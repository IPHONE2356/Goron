module.exports = {
	name:"yeahyeahyeahhhhhh",
	description:"yeah yeah yeahhhhhh",
	async execute(message,args){
		const Discord = require('discord.js')
		var connection = await message.member.voice.channel.join()
		
		const dispatcher = connection.play('msmsong.mp3', {volume: 0.5});

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
}