const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const suggestionEmbed = require('../embeds/suggestions/suggestion.js')

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

        const message = await interaction.guild.channels.cache.get('1047032593767473232').send({ embeds: [suggestionEmbed(user, avatar, suggestion)] });
        message.react('👍')
        .then(() => message.react('👎'));
    }

}