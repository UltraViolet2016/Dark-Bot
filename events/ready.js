const { version, guildName} = require('../config.json');
const { ActivityType } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`[DarkBot] Loading stage complete`);
		await wait(750);
		console.log(`[DarkBot] Successfully logged into ${client.user.tag}`);
		await wait(750);
		console.log(`[DarkBot] Running Version ${version}`);
		client.user.setActivity(`${guildName}`, { type: ActivityType.Watching });
		client.user.setStatus('dnd');

	},
};