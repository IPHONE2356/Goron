module.exports = {
	name:"broadcast",
	description:"Broadcasts a sound file to all voice channels that the bot is in.",
	async execute(message,args){
		if (message.author.tag == "Banter Gaming#1624"){
			var connection = await message.member.voice.channel.join()
		
			const dispatcher = connection.play('Max song.mp3', {volume: 1.5});

			dispatcher.on('start', () => {
				console.log('Broadcasting Max song.mp3');
				message.channel.send("Broadcasting Max song.mp3")
			});
			console.log("Start dispatch")
			dispatcher.on('finish', () => {
				console.log('Broadcasting Max song.mp3');
				message.channel.send("Broadcasting finished.")
				connection.disconnect()
				
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
			}
	}
}