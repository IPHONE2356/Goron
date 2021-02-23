module.exports = {
	name: "ush",
	description: "ush -Requested by dylan",
	async execute(message,args){
		
		if (message.author.id == 460455100092252170){
		var connection = await message.member.voice.channel.join()
		const dispatcher = connection.play('ush.mp3', {volume: 1.5});
		dispatcher.on('start', () => {
			console.log('ush.mp3 is now playing!');
			message.channel.send("Now playing ush.mp3")
			const fs = require('fs');

// Create a ReadableStream of s16le PCM audio
			//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


			//counter = counter + 1
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('ush.mp3 has finished playing!');
			message.channel.send("ush.mp3 has stopped playing, Disconnecting. ")
			//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
			connection.disconnect()
			
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error);
		}
		else if (message.author.id == 269179454935400448){
		var connection = await message.member.voice.channel.join()
		const dispatcher = connection.play('ush.mp3', {volume: 1.5});
		dispatcher.on('start', () => {
			console.log('ush.mp3 is now playing!');
			message.channel.send("Now playing ush.mp3")
			const fs = require('fs');

// Create a ReadableStream of s16le PCM audio
			//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


			//counter = counter + 1
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('ush.mp3 has finished playing!');
			message.channel.send("ush.mp3 has stopped playing, Disconnecting. ")
			//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
			connection.disconnect()
			
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error);
		}
		else if (message.author.id == 201043573162901504){
		var connection = await message.member.voice.channel.join()
		const dispatcher = connection.play('ush.mp3', {volume: 1.5});
		dispatcher.on('start', () => {
			console.log('ush.mp3 is now playing!');
			message.channel.send("Now playing ush.mp3")
			const fs = require('fs');

// Create a ReadableStream of s16le PCM audio
			//const audio = connection.receiver.createStream(message.author, { mode: 'pcm', end: "manual"});


			//counter = counter + 1
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('ush.mp3 has finished playing!');
			message.channel.send("ush.mp3 has stopped playing, Disconnecting. ")
			//message.channel.send("Error disconnecting, ``voiccechannel is not defined``")
			connection.disconnect()
			
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error);
		}

	}
}