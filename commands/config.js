module.exports = {
	name:"config",
	description:"config",
	execute(message,args){
		const config = require('../config.json')

		const databank = require('../databank.json')
		if (message.author.tag == "Banter Gaming#1624"){
			/*if(!args.length){
				message.channel.send(`No arguments were provided, ${message.author}`)
			}
			*/
			if (args[0] == "token"){
				message.channel.send(config.token)
			}
			else if (args[0] == "testbot"){
				message.channel.send(config.testbot)
			}
			else if (args[0] == "prefix"){
				message.channel.send(config.prefix)
			}
			else if (args[0] == "status"){
				message.channel.send(config.status)
			}
			else if(args[0] == "loadedCommands"){
				message.channel.send(databank.commandFiles)
			}
		}
	}
}