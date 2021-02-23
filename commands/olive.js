module.exports = {
	name: 'olive',
	description: 'olive',
	async execute(message, args) {
		var counter = 0
		const Discord = require('discord.js')
		if (message.author.id == 493402498388721670){
			
			var connection = await message.member.voice.channel.join()
			
			const dispatcher = connection.play('olive.mp3', {volume: 1.5});

			dispatcher.on('start', () => {
				console.log('olive.mp3 is now playing!');
				message.channel.send("Now playing olive.mp3")
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('olive.mp3 has finished playing!');
				message.channel.send("olive.mp3 has stopped playing, Disconnecting. ")
				connection.disconnect()
				
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		}
		else if (message.author.tag == "Banter Gaming#1624"){
			
			var connection = await message.member.voice.channel.join()
			
			const dispatcher = connection.play('olive.mp3', {volume: 1.5});

			dispatcher.on('start', () => {
				console.log('olive.mp3 is now playing!');
				message.channel.send('olive.mp3 is now playing')
				//message.channel.send("Now playing olive.mp3")
				const fs = require('fs');

// Create a ReadableStream of s16le PCM audio
				//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});

				//audio.pipe(fs.createWriteStream(message.author.tag + counter));
				
				//counter = counter + 1
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('olive.mp3 has finished playing!');
				//message.channel.send("olive.mp3 has stopped playing, Disconnecting. ")
				
				message.channel.send('olive.mp3 has finished playing')

				//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
				connection.disconnect()
				
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		}
		else{
		message.channel.send({files: ["olive.png"]});
		}
		
	}
};

/*
module.exports = {
	name:"olive",
	description:"olive",
	async execute(message,args){

		
		const Discord = require('discord.js')
		var connection = await message.member.voice.channel.join()
		
		const dispatcher = connection.play('olive.mp3', {volume: 1.5});

		dispatcher.on('start', () => {
			console.log('olive.mp3 is now playing!');
			//message.channel.send("Now playing olive.mp3")
			const embed = new Discord.MessageEmbed()


			
				//.setColor('#5700FF')
				.setColor('#00C1FF')
				.setTitle('olive.mp3')
				.setURL('https://i.imgur.com/TmtXcrG.png')
				.setAuthor('Goron', 'https://i.imgur.com/Ah9RjVO.png')
				.setDescription('olive.mp3 is now playing')
			const fs = require('fs');

// Create a ReadableStream of s16le PCM audio
			//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});
			discrim = Math.random() * (50 - 1) + 1
			//audio.pipe(fs.createWriteStream(message.author.tag + discrim));
			message.channel.send(embed)
			
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('olive.mp3 has finished playing!');
			//message.channel.send("olive.mp3 has stopped playing, Disconnecting. ")
			
			const afterembed = new Discord.MessageEmbed()


			
				//.setColor('#5700FF')
				.setColor('#00C1FF')
				.setTitle('olive.mp3')
				.setURL('https://i.imgur.com/TmtXcrG.png')
				.setAuthor('Goron', 'https://i.imgur.com/Ah9RjVO.png')
				.setDescription('olive.mp3 has finished playing, Disconnecting')
			message.channel.send(afterembed)

			//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
			connection.disconnect()
			
		});
	}
}
*/