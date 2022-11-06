const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const countdown = require('../embeds/timer/countdown.js');
const finished = require('../embeds/timer/finished.js');
const formatTime = require('../embeds/timer/format-time.js');


module.exports = {
	data: new SlashCommandBuilder()
	    .setName('timer')
	    .setDescription('Countdown timer for anything you want')
	    .addStringOption(option =>
		    option.setName('name')
			    .setDescription('Give your countdown timer a name')
			    .setRequired(true))
	    .addIntegerOption(option =>
		    option.setName('days')
			    .setDescription('Number of days')
                .setMinValue(0))
	    .addIntegerOption(option =>
		    option.setName('hours')
			    .setDescription('Number of hours')
                .setMinValue(0))
	    .addIntegerOption(option =>
		    option.setName('minutes')
			    .setDescription('Number of minutes')
                .setMinValue(0))
	    .addIntegerOption(option =>
		    option.setName('seconds')
			    .setDescription('Number of seconds')
                .setMinValue(0)),

	async execute(interaction) {
        const name = (interaction.options.getString('name'))[0].toUpperCase() + (interaction.options.getString('name')).substring(1);
        const days = interaction.options.getInteger('days') ?? 0, hours = interaction.options.getInteger('hours') ?? 0;
        const minutes = interaction.options.getInteger('minutes') ?? 0, seconds = interaction.options.getInteger('seconds') ?? 0;
        const total = days * 86400 + hours * 3600 + minutes * 60 + seconds;

        await interaction.reply({ embeds: [countdown(name, formatTime(seconds))] });

        try {
            for (let seconds = total-1; seconds >= 0; seconds--) {
                await wait(1000) 
                await interaction.editReply({ embeds: [countdown(name, formatTime(seconds))] })
            }
            await interaction.editReply({ embeds: [finished(name)] })
            await interaction.followUp(`<@${interaction.user.id}>`);
            msg.reactions.removeAll()
        }
        catch {
            console.log(`[DarkBot] ${name}'s timer has finished or has been deleted.`)
        }
	},
};