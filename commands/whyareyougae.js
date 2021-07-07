module.exports = {
	name:"whyareyougae",
	description:"Why are you gay? Who says im gay? You are gay, You are transgenda",
	aliases:["whyareyougay","pepejulianonzima","pastasempa"],
	async execute(message,args){
		var connection = await message.member.voice.channel.join()
	
		const dispatcher = connection.play('whyareyougae.mp3', {volume: 1.5});

		dispatcher.on('start', () => {
			console.log('Broadcasting whyareyougae.mp3');
			message.channel.send("Playing whyareyougae.mp3")
		});
		console.log("Start dispatch")
		dispatcher.on('finish', () => {
			console.log('Playing whyareyougae.mp3');
			message.channel.send("whyareyougae.mp3 has stopped playing, Disconnecting.")
			connection.disconnect()
			
		});

		// Always remember to handle errors appropriately!
		dispatcher.on('error', message.channel.send(error));
	}
}
