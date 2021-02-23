module.exports = {
	name: 'alfiestoes',
	description: 'Sends 3 GIFs to the channel, This command was requested by jiminim',
	aliases : ["alfie","toes"],
	cooldown: 20,
	execute(message, args) {
		var jaimincounter = 0
		var olfiecounter = 0;
		console.log(message.author.tag)
		if (message.author.tag == "jayzunited#4496"){
			console.log(jaimincounter)
			if (jaimincounter < 5){
				jaimincounter = jaimincounter + 1
				message.channel.send("https://tenor.com/view/don-robbie-aftv-robbie-boxing-robbie-boxing-gif-16950592")
				message.channel.send("https://tenor.com/view/confused-white-persian-guardian-why-gif-11908780")
				message.channel.send("https://tenor.com/view/nope-sloth-no-how-about-gif-7251428")
			}
			else{
				message.channel.send("The limit for the command has been reached. Limit clears next time the bot goes offline")
			}
		}
		else if(message.author.tag == "Banter Gaming#1624"){
			message.channel.send("https://tenor.com/view/don-robbie-aftv-robbie-boxing-robbie-boxing-gif-16950592")
			message.channel.send("https://tenor.com/view/confused-white-persian-guardian-why-gif-11908780")
			message.channel.send("https://tenor.com/view/nope-sloth-no-how-about-gif-7251428")
		}
		else{
			message.channel.send(`You do not have access to this command ${message.author}`)
		}
	}
};
		
