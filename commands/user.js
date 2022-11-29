const { SlashCommandBuilder } = require('discord.js');
const embedMessage = require('../embeds/general/general.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		interaction.reply({ embeds: [embedMessage(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)] });
	},
};