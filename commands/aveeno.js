module.exports = {
	name:"aveeno",
	description:"Unmutes Jaimin",
	execute(message,args){
		const Discord = require('discord.js');
		var superauth = false
		var superuser = ["201043573162901504","493402498388721670"]
		var author = message.author.id
		superuser.forEach(selectedSu => {
			if(selectedSu == author){
				console.log("User authorized")
				superauth = true
			}
		})
		const channel = message.channel
		const members = channel.members
		if(superauth == true){
			members.forEach(member => {
				if(member.id == 330411095959273482){
					member.voice.setMute(false)
					const embed = new Discord.MessageEmbed()
					.setColor("00A6FF")
					.setTitle("Knees")
					.setDescription(`Unmuted ${member.nickname} :microphone2:`)
					message.channel.send(embed)
				}
			})
		}
		else if(superauth == false){
			const embed = new Discord.MessageEmbed()
			.setColor("FF0000")
			.setTitle("Knees")
			.setDescription("You do not have access to this command")
			message.channel.send(embed)

		}
	}
}