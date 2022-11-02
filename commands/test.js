const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('test')
	    .setDescription('Replies with your input!')
	    .addStringOption(option =>
		    option.setName('input')
			    .setDescription('The input to echo back')
			    .setRequired(true)),
	async execute(interaction) {
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};