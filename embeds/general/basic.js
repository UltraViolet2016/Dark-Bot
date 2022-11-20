const { EmbedBuilder } = require('discord.js');

function message(message) {
    const MessageEmbed = new EmbedBuilder()
    .setColor('#2f3136')
    .setDescription(`${message}`)

    return MessageEmbed;
}
    
module.exports = message;