const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);
console.log(commandFiles.length + ' Command modules loaded');

const cooldowns = new Discord.Collection();
//const guild = new Discord.VoiceState(guild,data);

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);


	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log(`Bot is online, logged in as ${client.user.tag}`);
	client.user.setActivity(config.status, { type: 'PLAYING' });

});
/*
client.on('guildMemberRemove', member => {
	console.log("Someone left" + member)
	//0onst actualstring = message.guild.systemChannel.toString()
	const channel = member.guild.channels.cache.find(ch => ch.id == member.guild.id)
	channel.send("Left")
	//console.log(actualstring)
	//client.channels.cache.get(actualstring).send(`Left`)
})
*/
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	console.log('ASMOIST');

	// Send the message to a designated channel on a server:
	const channel = client.channels.cache.get(member.guild.systemChannel);
	// Do nothing if the channel wasn't found on this server
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
});


client.on('message', async message => {
	if(message.content == '<@395967820883558400>') {
		message.channel.send('<@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400> <@395967820883558400>');
	}
	if(message.content == '!chattohim') {
		if(message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			console.log(connection);
		}
	}
	if(message.content == '!breathkicks') {
		if(message.member.voice.channel) {
			const connection = await message.member.voice.channel.leave();
			console.log(connection);
		}
	}
	/*if(message.content == "!beans"){
		// Create a dispatcher
		const connection = await message.member.voice.channel.join()
		const dispatcher = connection.play('beans.mp3');

		dispatcher.on('start', () => {
			console.log('audio.mp3 is now playing!');
		});

		dispatcher.on('finish', () => {
			console.log('audio.mp3 has finished playing!');
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error);
			}
	*/
	if (message.author.bot) return;

	/*if(message.content == "https://tenor.com/view/time-to-learn-finn-jake-gif-5188235"){
		message.channel.bulkDelete(1,true)
	}
	else if (message.content == "https://tenor.com/view/time-to-learn-finn-jake-gif-5188235https://tenor.com/view/time-to-learn-finn-jake-gif-5188235"){
		message.channel.bulkDelete(1,true)

	}
	else if (message.content == "https://tenor.com/view/adventure-time-jake-finn-time-to-learn-learn-gif-4458347"){
		message.channel.bulkDelete(1,true)
	}
	*/
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	console.log(`Message author: ${message.author.username} Message content: ${message.content}`);
	//if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if(!command) return;


	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('This command can only be executed in a guild. You shmuck');
	}

	if (command.args && !args.length) {
		return message.channel.send('You didn\'t provide any arguments, You shmuck');
	}
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`This command has a cooldown, Please wait  ${timeLeft.toFixed(1)} more minutes before reusing the \`${command.name}\` command.`);
		}
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.channel.send('There was an error executing that command. You shmuck');
		message.channel.send('`` " + error +  " ``');
	}

});

client.login(config.token);
