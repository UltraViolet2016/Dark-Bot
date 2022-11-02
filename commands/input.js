const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('input')
	    .setDescription('Replies with your input!')
	    .addStringOption(option =>
		    option.setName('input')
			    .setDescription('The input to echo back')
			    .setRequired(true)),
	async execute(interaction) {
		const message = interaction.options.getString('input') ?? 'No message provided';
		await interaction.reply(`${message}`);
	},
};