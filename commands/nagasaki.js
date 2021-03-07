module.exports = {
	name:"tsar",
	description:"50 Megatons of TNT",
	aliases:["tsarbomba","si"],
	execute(message,args){
		if(message.author.tag == "Banter Gaming#1624"){
			targetid = args[0]
			const channel = message.channel
			const members = channel.members
			members.forEach(member => {
				if (member.id == targetid){
					console.log(member)
					message.channel.send("Boom")
					member.voice.setMute(true)
					message.channel.send("Boom")
					member.voice.setDeaf(true)
					//member.voice.kick("Human Waste")
					message.channel.send("Boom")
					console.log("Changing nickanme")
					member.setNickname("Human Waste")
					//channel.updateOverwrite(channel.guild.roles.shush, { "SEND_MESSAGES": false })
				}
			})
		}
		else{
			message.channel.send(`You do not have access to this command ${message.author}`)
		}
	}
}