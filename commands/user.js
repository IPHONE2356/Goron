module.exports = {
	name:"user",
	description:"Gives info about the user who executed the command, More functionality coming soon.",
	execute(message,args){
		const Discord = require('discord.js')
		const client = new Discord.Client();
		arr = ["Harrison is dry at shooting","Jaimins got dry knees","Jaimins dry at apex","Thomas’ breath kicks","Max is dry at siege","Brandons got a block head","Harrison is set ten","Pol Likes Cig","Jaimin is a coconut","Alfie is a jew","Alastair can't aim","Alastair's touch","Harrison"]

		
			
		var footer = arr[Math.floor(Math.random() * arr.length)];
		footer = footer + " -Alfie"
		if (args[0] == "footer.list"){
			message.channel.send(arr)
		}
		else{
			const embed = new Discord.MessageEmbed()


				
				//.setColor('#5700FF')
				.setColor('#00C1FF')
				.setTitle('User info')
				.setURL('https://i.imgur.com/TmtXcrG.png')
				.setAuthor('Goron', 'https://i.imgur.com/Ah9RjVO.png')
				.setDescription('User information')
				//.setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
				.addFields(
					{ name: 'Full username:', value: message.author.tag, inline:true},
					{ name: 'User ID', value: message.author.id, inline:true},
					{ name: 'Date Created:', value: message.author.createdAt, inline: true },
					{ name: 'Bot', value: message.author.bot, inline: true },
					{ name: "Verified:",value:message.author.verified,inline:true}
				)
				
				.setImage(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
				.setTimestamp()
				.setFooter(footer, 'https://i.imgur.com/Ah9RjVO.png');
				message.channel.send(embed)
		
	//message.channel.send(`Full Username: ${message.author.tag}\nUser ID: ${message.author.id}\nCreated at: ${message.author.createdAt}\nBot: ${message.author.bot}\nhttps://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
		}
	},

};