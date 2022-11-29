const { EmbedBuilder } = require('discord.js');

function embedMessage(message) {
    const Embed = new EmbedBuilder()
    .setColor('#2f3136')
    .setDescription(`${message}`)

    return Embed;
}
    
module.exports = embedMessage;