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
		    option.setName('time')
			    .setDescription('Select a number above 0 as a timer')
			    .setRequired(true)
                .setMinValue(0))
	    .addStringOption(option =>
		    option.setName('unit')
			    .setDescription('Select a what time unit you are using')
			    .setRequired(true)
                .addChoices(
                    { name: 'Days', value: 'd' },
                    { name: 'Hours', value: 'h' },
                    { name: 'Minutes', value: 'm'},
                    { name: 'Seconds', value: 's'},
                )),
	async execute(interaction) {
        const name = interaction.options.getString('name');
		const time = interaction.options.getInteger('time');
        const unit = interaction.options.getString('unit');
		await interaction.reply(`${time}${unit}`);


        // Convert whatever time & unit they had to seconds for the countdown for loop timer
        switch(unit) {
            case "d":
                seconds = time * 86400
            case "h":
                seconds = time * 3600;
                break;
            case "m":
                seconds = time * 60;
                break;
            case "s":
                seconds = time;
                break;
        }
        // Instantly edited to below the time inputted so wait 1 second
        await wait(1000)

        // Set I as seconds and minus it by 1 after updating it and waiting 1 second  
        for (i = seconds-1; i > 0; i--) {
            await interaction.editReply(`${i}s`)
            await wait(1000)
        }

        // Once the countdown has reached 1 second, edit to countdown complete and follow up with a mention.
        await interaction.editReply(`${name}'s countdown timer has finished.`)
        await interaction.followUp(`<@${interaction.user.id}>`);
	},
};