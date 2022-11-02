const { SlashCommandBuilder, SharedSlashCommandOptions } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

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
        const name = interaction.options.getString('name');
        const days = interaction.options.getInteger('days') ?? 0;
        const hours = interaction.options.getInteger('hours') ?? 0;
        const minutes = interaction.options.getInteger('minutes') ?? 0;
        const seconds = interaction.options.getInteger('seconds') ?? 0;
        const total = days * 86400 + hours * 3600 + minutes * 60 + seconds;
        

        function formatTime(seconds) {
            return [
                parseInt(seconds / 60 / 60),
                parseInt(seconds / 60 % 60),
                parseInt(seconds % 60)
            ]
                .join(":")
                .replace(/\b(\d)\b/g, "0$1")
        }



		await interaction.reply(`${total}s`);


        await wait(1000)

        // Set I as seconds and minus it by 1 after updating it and waiting 1 second  
        for (i = total-1; i > 0; i--) {
            const time = formatTime(i);
            await interaction.editReply(`${time}s`)
            await wait(1000)
        }

        // Once the countdown has reached 1 second, edit to countdown complete and follow up with a mention.
        await interaction.editReply(`${name}'s countdown timer has finished.`)
        await interaction.followUp(`<@${interaction.user.id}>`);
	},
};