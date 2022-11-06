const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
	    .setName('note')
	    .setDescription('Create notes')
	    .addStringOption(option =>
		    option.setName('action')
			    .setDescription('Give your countdown timer a name')
			    .setRequired(true)
                .addChoices(
                    { name: 'Create', value: 'create' },
                    { name: 'Open', value: 'open' },
                    { name: 'Delete', value: 'delete' }
                ))
	    .addStringOption(option =>
		    option.setName('name')
			    .setDescription('Name of the file')
                .setRequired(true)),
	async execute(interaction) {
        const action = interaction.options.getString('action');
        const name = interaction.options.getString('name');
        interaction.reply('')
	},
};