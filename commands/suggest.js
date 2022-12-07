const { SlashCommandBuilder } = require("discord.js");
const embedMessage = require("../embeds/general/general.js");
const suggestionEmbed = require('../embeds/suggestions/suggestion.js')
const suggestionChannelID = require('../config.json');
const checkEmoji = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('Create a suggestion')
    .addStringOption(option =>
        option.setName('suggestion')
            .setDescription('Enter your suggestion')
            .setRequired(true)),
    
    async execute(interaction) {
        const user = interaction.user.tag
        const suggestion = interaction.options.getString('suggestion');
        const avatar = interaction.user.displayAvatarURL();

        interaction.reply({embeds: [embedMessage(`<:check:1037315609089822751> **|** Suggestion has been successfully posted in <#1047032593767473232>`)] });

        const message = await interaction.guild.channels.cache.get('1047032593767473232').send({ embeds: [suggestionEmbed(user, avatar, suggestion)] });
        message.react('👍')
        .then(() => message.react('👎'));
    }
}