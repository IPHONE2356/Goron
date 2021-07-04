module.exports = {
	name:"shush",
	description:"Server mutes alfie, Some people can server mute others using their ID",
	execute(message,args){
		const Discord = require('discord.js');
		var superauth = false
		// 201043573162901504
		//               Banter Gaming      		JayzUnited       Shush  			JustNotVeryGood
		var superuser = ["201043573162901504","330411095959273482","341957074650923008","269179454935400448"]
		var author = message.author.id
		superuser.forEach(selectedSu => {
			if(selectedSu == author){
				console.log("User authorized")
				superauth = true
			}
		})
		const channel = message.channel
		const members = channel.members
		//Deafult function which mutes Alfie
		if(!args.length){
			console.log("No arguments provided.")
			if(superauth == true){
				console.log("Executing Superuser commnad")
				members.forEach(member => {
					var target = 493402498388721670
					//var target = 201043573162901504
					if(member.id == target){
						member.voice.setMute(true)
						const embed = new Discord.MessageEmbed()
						.setColor("00A6FF")
						.setTitle("Shush")
						.setDescription(`Muted ${member.nickname} :x: :microphone2:`)
						message.channel.send(embed)
						message.channel.send({files:["cryingface.mp4"]})

					}
				})
			}
		//Executes when user is denied access
			else if (superauth == false){
				console.log("User tried to call command but does not have access to it.")
				const embed = new Discord.MessageEmbed()
				.setColor("FF0000")
				.setTitle("Shush")
				.setDescription("You do not have access to this command")
				message.channel.send(embed)
			}
		}
		//Targeted shush
		else{
			if(superauth == true){
				var input = args[0]
				var target = input.slice(3,-1)
				if(message.author.id != superuser[0] && target == superuser[0]){
					message.channel.send("You are not smart")
					imposter = message.author.id
					members.forEach(member => {
						if(member.id == imposter){
							member.voice.setMute(true)
							const embed = new Discord.MessageEmbed()
							.setColor("00A6FF")
							.setTitle("Shush")
							.setDescription(`Muted ${member.nickname} :x: :microphone2: \n Because they thought they were smart`)
							message.channel.send(embed)
							message.channel.send({files:["cryingface.mp4"]})
						}
					})
				}
				else{
					members.forEach(member => {
						if(member.id == target){
							member.voice.setMute(true)
							const embed = new Discord.MessageEmbed()
							.setColor("00A6FF")
							.setTitle("Shush")
							.setDescription(`Muted ${member.nickname} :x: :microphone2:`)
							message.channel.send(embed)
							message.channel.send({files:["cryingface.mp4"]})
						}
					})
				}
			}
			else if(superauth == false){
				const embed = new Discord.MessageEmbed()
				.setColor("FF0000")
				.setTitle("Shush")
				.setDescription("You do not have access to this part of this command")
				message.channel.send(embed)
			}
		}
	}
}
