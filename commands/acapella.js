module.exports = {
	name:"acapella",
	description:"Server mutes dylan, To unmute do !comehere acapella. This can be accessed by anyone",
	usage:"!acapella",
	execute(message,args){
		const Discord = require('discord.js')
		if(message.author.id == 508345920639729675){
			message.channel.send("https://tenor.com/view/suli-check-gif-20096728")
		}
		else{
			const channel = message.channel
			const members = channel.members
			var target = 460455100092252170 
			members.forEach(member => {
				if(member.id == target){
					member.voice.setMute(true)
					const embed = new Discord.MessageEmbed()
					.setTitle("Acapella")
					.setColor("AC570B")
					.setDescription(`Muted ${member.nickname}`)
					message.channel.send(embed)
				}
				if(message.author.id == target){
					console.log("Suicide.")
				}
			})
		}
		//message.channel.send("https://tenor.com/view/suli-check-gif-20096728")
	}
}
