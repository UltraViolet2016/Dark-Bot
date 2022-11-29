const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const embedMessage = require('../embeds/general/general.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		interaction.reply({ embeds: [embedMessage(`Pong!`)] });


	},
};