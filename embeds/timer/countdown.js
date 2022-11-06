const { EmbedBuilder } = require('discord.js');

function countdown(name, time) {
    const CountdownEmbed = new EmbedBuilder()
    .setColor('#2f3136')
    .setDescription(`<:clock:1037318080684113932> **|** __Countdown Timer__\n\`${name}\` **»** ${time}`)

    return CountdownEmbed;
}
    
module.exports = countdown;