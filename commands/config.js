module.exports = {
	name:"config",
	description:"Sends elements of a config file",
	execute(message,args){
		const config = require('../config.json')

		const databank = require('../databank.json')
		if (message.author.tag == "Banter Gaming#1624"){
			/*if(!args.length){
				message.channel.send(`No arguments were provided, ${message.author}`)
			}
			*/
			if (args[0] == "token") {
				if (message.author.tag == "Banter Gaming#1624") {
					message.channel.send(config.token)
				}
				else {
					message.channel.send("Tokens are just passwords but longer, and if they get into the wrong hands the bot can be hijacked and any code can be executed from it. Only the bot owner has access to this feature of the command")
                }
			}
			else if (args[0] == "testbot") {
				if (message.author.tag == "Banter Gaming#1624") {
					message.channel.send(config.testbot)
				}
				else {
					message.channel.send("Tokens are just passwords but longer, and if they get into the wrong hands the bot can be hijacked and any code can be executed from it. Only the bot owner has access to this feature of the command")
                }
			}
			else if (args[0] == "prefix"){
				message.channel.send(config.prefix)
			}
			else if (args[0] == "status"){
				message.channel.send(config.status)
			}
		}
	}
}