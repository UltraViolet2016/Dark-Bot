const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}

		const filter = i => i.customId === 'primary';

		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

		collector.on('collect', async i => {
			if (i.customId === 'primary') {
				await i.deferUpdate();
				await wait(4000);
				await i.editReply({ content: 'A button was clicked!', components: [] });
			}
		});

		collector.on('end', collected => console.log(`Collected ${collected.size} items`));
	
	},
};