module.exports = {
	name:"tsar",
	description:"50 Megatons of TNT",
	aliases:["tsarbomba","si"],
	guildOnly : true,
	execute(message,args){
		const Discord = require('discord.js');
		const client = new Discord.Client();
		//const guild = <Guild>;
		if(message.author.tag == "Banter Gaming#1624"){
			message.channel.send("User authorized. :white_check_mark:")
			
			targetid = args[0]
			//targetrole = args[1]
			const channel = message.channel
			const members = channel.members
			message.channel.send("Scanning for target.... :mag:")
			members.forEach(member => {
				if (member.id == targetid){
					message.channel.send("Target found.")
					console.log(member)
					//const role = guild.roles.cache.get(targetrole)
					
					//message.channel.send("Boom")
					member.voice.setMute(true)
					//message.channel.send("Boom")
					member.voice.setDeaf(true)
					//member.voice.kick("Human Waste")
					message.channel.send("Boom")
					console.log("Changing nickanme")
					member.setNickname("Nuclear Waste")
					message.channel.send("https://giphy.com/gifs/explosion-oe33xf3B50fsc")
					
					/*var channel = message.channel
					console.log(`Channel: ${channel}`)
					var channel = channel.toString()
					var channel = channel.split("#")
					var channel = channel[1]
					var channel = channel.split(">")
					var channel = channel[0]
					console.log(`Channel: ${channel}`)
					console.log(typeof channel)
					
					channel = client.channels.cache.get(channel)
					console.log(`Channel: ${channel}`)

					//channel.updateOverwrite(role, {SEND_MESSAGES: false });
					channel.updateOverwrite([

						{
							id: targetid,
							deny: ['SEND_MESSAGES'],
						},
					]);
					*/
					//channel.updateOverwrite(channel.guild.roles.shush, { "SEND_MESSAGES": false })
				}
			})
		}
		else{
			message.channel.send(`You do not have access to this command ${message.author}`)
		}
	}
}