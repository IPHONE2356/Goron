module.exports = {
	name:"Undeafen",
	description:"oof",
	execute(message,args){
		const Discord = require('discord.js');
		var fs = require('fs')
		var counter = 0
		console.log(`Counter when file is executed: ${counter}`)
		if(counter < 3){
			console.log("Counter is under 3, Executing")
			var superauth = false
			// 201043573162901504
			//               Banter Gaming      		JayzUnited       Shush  			JustNotVeryGood	
			var superuser = ["201043573162901504","330411095959273482","341957074650923008","269179454935400448"]
			var author = message.author.id
			//Checks to see if user is authorized
			superuser.forEach(selectedSu => {
				if(selectedSu == author){
					console.log("User authorized")
					superauth = true
				}
			})
			//Gets the right voice channel
			const channel = message.channel
			const members = channel.members
			//Checks to see if no arguments were found
			if(!args.length){
				if(superauth == true){
					message.channel.send("Please specify a target to undeafen, Correct Usage: ``!deafen @Stinkybreathjaimin``")
				}
			//Executes when user is denied access
				else if (superauth == false){
					console.log("User tried to call command but does not have access to it.")
					const embed = new Discord.MessageEmbed()
					.setColor("FF0000")
					.setTitle("Undeafen")
					.setDescription("You do not have access to this command")
					message.channel.send(embed)
				}
			}
			//Targeted shush
			else{
				if(superauth == true){
					//Converts the mention tag to a readable ID
					var input = args[0]
					var target = input.slice(3,-1)
					//This checks to see if the person thinks they are smart and they try and mute me which will end up muting them instead
					if(message.author.id != superuser[0] && target == superuser[0]){
						message.channel.send("You are not smart")
						imposter = message.author.id
						members.forEach(member => {
							if(member.id == imposter){
								member.voice.setDeaf(false)
								const embed = new Discord.MessageEmbed()
								.setColor("00A6FF")
								.setTitle("Undeafen")
								.setDescription(`Undeafened ${member.nickname} :x: :microphone2: \n Because they thought they were smart`)
								message.channel.send(embed)
								message.channel.send({files:["cryingface.mp4"]})
							}
						})
					}
					else{
						//Normal targeted mute
						members.forEach(member => {
							if(member.id == target){
								member.voice.setDeaf(false)
								const embed = new Discord.MessageEmbed()
								.setColor("00A6FF")
								.setTitle("Undeafen")
								.setDescription(`Undeafened ${member.nickname} :x: :microphone2:`)
								message.channel.send(embed)
								message.channel.send({files:["cryingface.mp4"]})
							}
						})
					}
				}
				//if user is denied access
				else if(superauth == false){
					const embed = new Discord.MessageEmbed()
					.setColor("FF0000")
					.setTitle("Undeafen")
					.setDescription("You do not have access to this part of this command")
					message.channel.send(embed)
				}
			}
		}
		else{
			message.channel.send("The limit for this command has been reached, Limit clears tommorow")
		}
	}
}
