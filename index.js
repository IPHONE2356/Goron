//Jaimins knees are dry
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);
console.log(commandFiles.length + ' Command modules loaded');
//For the cooldowns feature, Not currently working
const cooldowns = new Discord.Collection();
//const guild = new Discord.VoiceState(guild,data);
//Adding every command module 
fs.writeFile('aimbotval.txt',"69 \n", (err) => {
	if (err) throw err;
})

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);


	client.commands.set(command.name, command);
}

//Event listener for when the client is ready
client.once('ready', () => {
	console.log(`Bot is online, logged in as ${client.user.tag}`);
	client.user.setActivity(`${commandFiles.length} Commands`, { type: 'WATCHING' });

});
/*
client.on('guildMemberRemove', member => {

	//0onst actualstring = message.guild.systemChannel.toString()
	const channel = member.guild.channels.cache.find(ch => ch.id == member.guild.id)
	//console.log(actualstring)
	//client.channels.cache.get(actualstring).send(`User has left`)
})
*/

/*client.on('guildMemberAdd', member => {
	

	// Send the message to a designated channel on a server:
	const channel = client.channels.cache.get(member.guild.systemChannel);
	// Do nothing if the channel wasn't found on this server
	// Send the message and also mention the member
	channel.send(`Welcome to the server, ${member}`);
});
*/


client.on('message', async message => {
	if(message.content == "https://tenor.com/view/meat-slap-that-meat-salt-bae-gif-7897765"){
		message.reply("I understand.")
	}
	if(message.content == "nonceLoadedCommands"){
		message.channel.send(commandFiles.length + ' Command modules loaded');
	}
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
	if(message.content == "!logout"){
		if(message.author.tag == "Banter Gaming#1624"){
			message.channel.send("Goodbye :wave:")
			client.destroy()
		}
		else{
			message.channel.send("https://tenor.com/view/suli-check-gif-20096728")
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

	//Filtering out the arguments from the command name
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	console.log(`Message author: ${message.author.username} Message content: ${message.content}`);
	if(message.attachments.size > 0){
		var currentattach = message.attachments
		console.log(currentattach)
	}
	//if (!client.commands.has(commandName)) return;
	//Checking if any of the aliases have been called
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	//If a command was not called, Do nothing
	if(!command) return;

	//Checks to see if the called command is set to guild-Only, if it is called in a DM, then it bugs out
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('This command can only be executed in a guild, You shmuck');
	}
	//Checks to see if any arguments were provided
	if (command.args && !args.length) {
		return message.channel.send('You didn\'t provide any arguments, You shmuck');
	}
	//For the cooldown feature, which does not work at the moment
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	//This is whole feature was experimental, it was made knowing it might not work
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
	//This is where the client tried to execute the called command, if there is an error it returns the error in the message channel
	try {
		command.execute(message, args);
		client.user.setActivity(`${commandFiles.length} Commands`, { type: 'WATCHING' });
	}
	catch (error) {
		console.error(error);
		message.channel.send('There was an error executing that command. You shmuck');
		message.channel.send("`` " + error +  " ``");
	}

});
//Logins to the bot via the token in a config file
client.login(config.token);
