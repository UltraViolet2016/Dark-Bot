const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


const Pong = new EmbedBuilder()
	.setColor('#2f3136')
	.setDescription('Pong!')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {


	},
};