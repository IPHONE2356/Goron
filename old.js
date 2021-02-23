const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./commands.js')
//const firstMessage = require('./first-message.js')
const privateMessage = require('./private-message.js')
var osamatoken = "NzAyNTA4OTkwMTA5NzEyNDA0.XqBEew.DTVAoZI3GZVcaZo_36kzFmTy24Y"

client.on('ready', () => {
	console.log("Bot online.Logged in as" + client.user.id)
	


	command(client, "ping", message => {
		message.channel.send('Pong!')
	})
	command(client,"servers",message => {
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
		})
	})
	command(client,["clear","bomb"], message => {
		if(message.member.hasPermission("ADMINISTRATOR")) {
			message.channel.messages.fetch().then((results) => {
				message.channel.bulkDelete(results)
			})
		}
	})
	command(client,"status",message => {
		const content = message.content.replace("!status ", "")
		message.channel.send("Хорошо :thumbsup:")

		client.user.setPresence({
			activity: {
				name: content,
				type: 0,
			}
		})
	})
	
	privateMessage(client,'help',"Shut up you nonce")
})

client.login(config.goron)