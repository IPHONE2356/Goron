module.exports = {
	name:"comehere",
	description:"Used to unmute people, Everyone has access to !comehere acapella but only some people can use the main unmute function",
	execute(message,args){
		const Discord = require('discord.js');
		var superauth = false
		// 201043573162901504
		//               Banter Gaming      JayzUnited         JustNotVeryGood   
		var superuser = [201043573162901504,330411095959273482,269179454935400448]
		var author = message.author.id
		//Checks to see if the user is authorized
		superuser.forEach(selectedSu => {
			if(selectedSu == author){
				console.log("User authorized")
				superauth = true
			}
		})
		//Gets the right voice channel
		const channel = message.channel
		const members = channel.members
		if(!args.length){
			console.log("No arguments provided.")
			if(superauth == true){
				//Checks to see if the target user is trying to unmute themselves
				if(message.author.id == 493402498388721670){
					message.channel.send({files:["cryingface.mp4"]})
				}
				else{
				console.log("Executing Superuser commnad")
				//Scans for the target
				members.forEach(member => {
					var target = 493402498388721670
					if(member.id == target){
						//Unmutes the target and sends a confirmation message
						member.voice.setMute(false)
						const embed = new Discord.MessageEmbed()
						.setColor("00A6FF")
						.setTitle("Comehere")
						.setDescription(`Unmuted ${member.nickname} :microphone2:`)
						message.channel.send(embed)

					}
				})
				}
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
		//For the acapella command
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
						message.channel.send(embed)
					}
				})
			}
			//Checks to see if the target is trying to unmute themselves
			else if(message.author == target){
				message.channel.send("Harrison harrison harrison harrison harrison harrison")
			}
		}
		else{
			if(superauth == true){
				//Checks to see if the target user is trying to unmute themselves
				var input = args[0]
				var target = input.slice(3,-1)
			 	if(message.author.id != superuser[0] && message.author.id == target){
			 		message.channel.send({files:["cryingface.mp4"]})
			 	}
			 	else{
					members.forEach(member => {
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
