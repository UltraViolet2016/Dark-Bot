const { SlashCommandBuilder } = require('discord.js');
const embedMessage = require('../embeds/general/general.js');
const suggestionEmbed = require('../embeds/suggestions/suggestion.js')
const { suggestionChannelID, checkEmoji } = require('../config.json'); 

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

        interaction.reply({embeds: [embedMessage(`${checkEmoji} **|** Suggestion has been successfully posted in <#${suggestionChannelID}>`)] });

        const message = await interaction.guild.channels.cache.get(suggestionChannelID).send({ embeds: [suggestionEmbed(user, avatar, suggestion)] });
        message.react('👍')
        .then(() => message.react('👎'));
    }
}