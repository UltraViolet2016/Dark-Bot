const { EmbedBuilder } = require('discord.js');

function finished(name) {
    const FinishedEmbed = new EmbedBuilder()
    .setColor('#2f3136')
    .setDescription(`<:check:1037315609089822751> **|** __Countdown Timer__\n\`${name}\`'s countdown timer has finished.`)

    return FinishedEmbed;
}
    
module.exports = finished;