const { SlashCommandBuilder } = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


module.exports = {

    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Creates a button'),

    async execute(interaction) {
        const FormattedEmbed = new EmbedBuilder()
	    .setColor('#2f3136')
	    .setDescription(`<:clock:1037318080684113932> **|** __Countdown Timer__\nHi`)
    

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('cancel')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary),
        );
        await interaction.reply({ embeds: [FormattedEmbed], components: [row] });
    }
}