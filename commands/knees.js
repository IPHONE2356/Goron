module.exports = {
	name:"knees",
	description:"Server mutes Jaimin",
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
		if(superauth == true){
			const channel = message.channel
			const members = channel.members
			members.forEach(member => {
				if(member.id == 330411095959273482){
					member.voice.setMute(true)
					const embed = new Discord.MessageEmbed()
					.setColor("00A6FF")
					.setTitle("Shush")
					.setDescription(`Muted ${member.nickname} :x: :microphone2:`)
					message.channel.send(embed)
				}
			})
		}
		else if(superauth == false){
			const embed = new Discord.MessageEmbed()
			.setColor("FF0000")
			.setTitle("Shush")
			.setDescription("You do not have access to this command")
			message.channel.send(embed)

		}
	}
}