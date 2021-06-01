const { prefix } = require('../config.json');
module.exports = {
	name: "help",
	description: "Lists all commands",
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message,args){
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here\'s a list of all my commands:');


	const fs = require('fs')
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	data.push(`**There are ${commandFiles.length} command modules loaded**\n`)
	data.push(commands.map(command => command.name).join(', '));
	data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command.\n`);


	return message.author.send(data, { split: true })
		.then(() => {
			if (message.channel.type === 'dm') return;
			message.reply('Check your DMs');
		})
		.catch(error => {
			console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
			message.reply('Error sending DM , You may have turned DMs off for people that are not in your friends list.');
		});

	// ...
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That is not a valid command. You shmuck');
		}

		data.push(`\`\`Name:\`\`  ${command.name}`);

		if (command.aliases) data.push(`\`\`Aliases:\`\` ${command.aliases.join(', ')}`);
		if (command.description) data.push(`\`\`Description:\`\` ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		

		message.channel.send(data, { split: true });


	}
}
