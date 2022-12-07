const { EmbedBuilder } = require('discord.js');

function embedMessage(user, avatar, suggestion) {
    const Embed = new EmbedBuilder()
    .setColor('#2f3136')
    .setTitle(`Suggestion By: ${user}`)
    .setThumbnail(`${avatar}`)
    .setDescription(`**Suggestion**\n${suggestion}`)
    .setTimestamp()
    
    return Embed;
}
    
module.exports = embedMessage;