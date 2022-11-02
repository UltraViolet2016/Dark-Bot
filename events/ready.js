const { version } = require('../config.json');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`[DarkBot] Successfully logged in ${client.user.tag}. Running version ${version}`);
		client.user.setActivity("Dark's Server", { type: ActivityType.Watching });
		client.user.setStatus('dnd');
	},
};