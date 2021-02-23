module.exports = {
	name: "beans",
	aliases: ["carrots","onions","chocolate","broccoli","broadbean","sweetpotato"],
	description: "Joins the current voice channel you are in and plays the 'What's your favorite vegetable?' video ",
	guildOnly: true,
	async execute(message,args){
		var connection = await message.member.voice.channel.join()
		
		const dispatcher = connection.play('beans.mp3', {volume: 1.5});

		dispatcher.on('start', () => {
			console.log('beans.mp3 is now playing!');
			message.channel.send("Now playing beans.mp3")
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('beans.mp3 has finished playing!');
			message.channel.send("beans.mp3 has stopped playing, Disconnecting. ")
			connection.disconnect()
			
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error);
	}

	
}