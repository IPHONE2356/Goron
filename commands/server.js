module.exports = {
	name:"server",
	description:"Gives info about the server that the command is executed in",
	guildOnly: true,
	execute(message,args){
			const Discord = require('discord.js');
		//message.channel.send(`Name of Guild: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nDate Created: ${message.guild.createdAt}\nGuild banner: ${message.guild.banner}\nGuild icon:${message.guild.icon}\nOwner:${message.guild.owner}\nGuild region: ${message.guild.region}\nVerified: ${message.channel.verified}\nSystem channel: ${message.guild.systemChannel}\nVoice state: ${message.guild.voice}\nAcronym: ${message.guild.nameAcronym}`)
			arr = ["Jaimins got dry knees","Jaimins dry at apex","Thomas’ breath kicks","Max is dry at siege","Brandons got a block head","Harrison is set ten","Pol Likes Cig","Jaimin is a coconut","Alfie is a jew"]
			var footer = arr[Math.floor(Math.random() * arr.length)];
			footer = footer + " -Alfie"

			const embed = new Discord.MessageEmbed()
			//.setColor('#5700FF')
			.setColor('#C68D01')
			.setTitle('Server Info')
			.setURL('https://i.imgur.com/TmtXcrG.png')
			.setAuthor('Goron', 'https://i.imgur.com/Ah9RjVO.png', 'https://i.imgur.com/Ah9RjVO.png')
			.setDescription('Some general info about this guild')
			.setThumbnail('https://i.imgur.com/Ah9RjVO.png')
			.addFields(
				{ name: 'Name of Guild:', value: message.guild.name, inline:true},
				{ name: 'Total Members:', value: message.guild.memberCount, inline:true},
				{ name: 'Date Created:', value: message.guild.createdAt, inline: true },
				{ name: 'Guild Region', value: message.guild.region, inline: true },
				{ name: "Verified:",value:message.guild.verified,inline:true},
				{name: "Guild owner", value: message.guild.owner, inline:true},
				{name : "System Channel", value: message.guild.systemChannel, inline:true},
				{name: "Name Acronym", value: message.guild.systemChannel,inline:true}
			)
			
			//.setImage('https://i.imgur.com/Ah9RjVO.png')
			.setTimestamp()
			.setFooter(footer, 'https://i.imgur.com/Ah9RjVO.png');
			message.channel.send(embed)

	},
};

