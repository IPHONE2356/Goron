module.exports = {
	name: "status",
	description:"Changes the status of the bot",
	execute(message,args){
		const Discord = require('discord.js');
		const client = new Discord.Client();
		if(message.author.tag == "Banter Gaming#1624"){
			var output = ""
			for (i=0; i < args.length; i++) {

				output = output + args[i] + " "
				console.log(`i= ${i}`)
				console.log(output)
			}
			
			client.user.setActivity(output, { type: 'WATCHING' });
			
			

		}
	}
}