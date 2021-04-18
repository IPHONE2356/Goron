module.exports = {
	name:"wetguy",
	description:"Undos the tsar bomba",
	aliases:["untsar","peacetreaty"],
	execute(message,args){
		if(message.author.tag == "Banter Gaming#1624"){
			targetid = args[0]
			const channel = message.channel
			const members = channel.members
			members.forEach(member => {
				if (member.id == targetid){
					console.log(member)
					message.channel.send("UnBoom")
					member.voice.setMute(false)
					message.channel.send("UnBoom")
					member.voice.setDeaf(false)
					//member.voice.kick("Human Waste")
					message.channel.send("UnBoom")
					console.log("Changing nickanme")
					member.setNickname("Nuclear Waste")
					//channel.updateOverwrite(channel.guild.roles.shush, { "SEND_MESSAGES": false })
				}
			})
		}
	}
}