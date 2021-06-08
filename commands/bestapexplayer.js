var olfiecounter = 0
module.exports = {
	name: 'bestapexplayer',
	description: 'Sends screenshots of Jaimin\'s good games on Apex. This command was requested by Alfie' ,
	aliases: ["apex","jiminim"],
	execute(message, args) {
		if (olfiecounter < 5 ){
			message.channel.send("Loading images...")
			message.channel.send({files: ['jaimin_apex_edited_1.png','jaimin_apex_edited_2.png','jaimin_apex_edited_3.png','jaimin_apex_edited_4.png','jaimin_apex_edited_5.png']})
			olfiecounter = olfiecounter + 1
		}
		else{
			message.channel.send("The limit for the command has been reached. Limit clears next time the bot goes offline")
		}
	},
};