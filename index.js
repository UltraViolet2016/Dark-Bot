const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


let max = ''
for (const file of commandFiles) {
	if (file.length > max) {
		max = file;
	}
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

console.log(`―`.repeat(max.length + 4))
let category = 'Commands'
console.log(`| ` + `${category}` + ` `.repeat(max.length - category.length) + ` |`)
console.log(`―`.repeat(max.length + 4))
for (const file of commandFiles) {
	const space = max.length - file.length;
	console.log(`| ` + `${file}` + ` `.repeat(space) + ` |`)
}
console.log(`―`.repeat(max.length + 4))



const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);