module.exports = {
	name:"yeahyeahyeahhhhhh",
	description:"Plays My singing monsters Songs. THe parameters are: ``!yeahyeahyeahhhhhh`` for the Plant Island song, ``!yeahyeahyeahhhhhh shugabush`` For the shugabush sound and ``!yeahyeahyeahhhhhh shugaisland`` for the whole Shugabush Island song",
	aliases:["bom","do","msm"],
	async execute(message,args){
		if(!args.length){
			const Discord = require('discord.js')
			var connection = await message.member.voice.channel.join()
			
			const dispatcher = connection.play('msmsong.mp3', {volume: 0.35});

			dispatcher.on('start', () => {
				console.log('msmsong.mp3 is now playing!');
				message.channel.send("Now playing msmsong.mp3")
				const fs = require('fs');

	// Create a ReadableStream of s16le PCM audio
				//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


				//counter = counter + 1
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('msmsong.mp3 has finished playing!');
				message.channel.send("msmsong.mp3 has stopped playing, Disconnecting. ")
				//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
				connection.disconnect()
				
			});


			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		}
		else if(args[0] == "shugabush"){

			const Discord = require('discord.js')
			var connection = await message.member.voice.channel.join()
			
			const dispatcher = connection.play('shugabush.mp3', {volume: 0.35});

			dispatcher.on('start', () => {
				console.log('shugabush.mp3 is now playing!');
				message.channel.send("Now playing shugabush.mp3")
				const fs = require('fs');

	// Create a ReadableStream of s16le PCM audio
				//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


				//counter = counter + 1
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('shugabush.mp3 has finished playing!');
				message.channel.send("shugabush.mp3 has stopped playing, Disconnecting. ")
				//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
				connection.disconnect()
				
			});


			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);

		}
		else if(args[0] == "shugaisland"){
			const Discord = require('discord.js')
			var connection = await message.member.voice.channel.join()
			
			const dispatcher = connection.play('shugabushfull.mp3', {volume: 0.35});

			dispatcher.on('start', () => {
				console.log('shugabushfull.mp3 is now playing!');
				message.channel.send("Now playing shugabushfull.mp3")
				const fs = require('fs');

	// Create a ReadableStream of s16le PCM audio
				//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


				//counter = counter + 1
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('shugabushfull.mp3 has finished playing!');
				message.channel.send("shugabushfull.mp3 has stopped playing, Disconnecting. ")
				//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
				connection.disconnect()
				
			});


			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
		}

	}
}