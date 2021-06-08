module.exports = {
	name:"comehere",
	description:"Used to unmute people, Everyone has access to !comehere acapella but only some people can use the main unmute function",
	execute(message,args){
		const Discord = require('discord.js');
		var superauth = false
		// 201043573162901504
		var superuser = [201043573162901504,330411095959273482]
		var author = message.author.id
		superuser.forEach(selectedSu => {
			if(selectedSu == author){
				console.log("User authorized")
				superauth = true
			}
		})
		const channel = message.channel
		const members = channel.members
		if(!args.length){
			console.log("No arguments provided.")
			if(superauth == true){
				console.log("Executing Superuser commnad")
				members.forEach(member => {
					var target = 493402498388721670
					if(member.id == target){
						member.voice.setMute(false)
						const embed = new Discord.MessageEmbed()
						.setColor("00A6FF")
						.setTitle("Comehere")
						.setDescription(`Unmuted ${member.nickname} :microphone2:`)
						message.channel.send(embed)

					}
				})
			}
			else if (superauth == false){
				console.log("User tried to call command but does not have access to it.")
				const embed = new Discord.MessageEmbed()
				.setColor("FF0000")
				.setTitle("Comehere")
				.setDescription("You do not have access to this command")
				message.channel.send(embed)
			}
		}
		else if (args[0] == "acapella"){
			var target = 460455100092252170
			if(message.author != target){
				members.forEach(member => {
					if(member.id == target){
						member.voice.setMute(false)
						const embed = new Discord.MessageEmbed()
						.setColor("00A6FF")
						.setTitle("Comehere")
						.setDescription(`Unmuted ${member.nickname}:microphone2:`)
					}
				})
			}
			else if(message.author == target){
				message.channel.send("Harrison harrison harrison harrison harrison harrison")
			}
		}
		else{
			if(superauth == true){
				members.forEach(member => {
					var target = args[0]
					if(member.id == target){
						member.voice.setMute(false)
						const embed = new Discord.MessageEmbed()
						.setColor("00A6FF")
						.setTitle("Comehere")
						.setDescription(`Unmuted ${member.nickname} :microphone2:`)
						message.channel.send(embed)
					}
				})
			}
			else if(superauth == false){
				const embed = new Discord.MessageEmbed()
				.setColor("FF0000")
				.setTitle("Comehere")
				.setDescription("You do not have access to this part of this command")
				message.channel.send(embed)
			}
		}
	}
}