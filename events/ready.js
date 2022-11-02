const { version } = require('../config.json');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`[DarkBot] Successfully logged in ${client.user.tag}. Running version ${version}`);
	},
};