module.exports = {
	name: 'bomb',
	description: 'Bulk deletes messages in a channel. Correct usage: ``!bomb [amount]``',
	args: true,
	guildOnly:true,
	aliases: ["boom","osama","shamima","purge"],
	usage:"!bomb [No of messages]",
	execute(message, args) {

		if (message.author.tag == "Banter Gaming#1624"){
			
			/*if(!args.length) {
				return message.channel.send(`No arguments were provided ${message.author}`)
			}*/
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				return message.reply("That is not a valid number")
			}
			else if (amount > 51) {
				return message.reply("The maximum amount of messages you can bulk delete is 20")
			}
			else {
			message.channel.bulkDelete(amount,true).catch(err => {
				console.error(err)
				message.channel.send("There was an error trying to bulk delete messages. It could be that there are no messages in the channel that are newer than 2 weeks.")
			});
			message.channel.send(`Succesfully deleted ${amount} message(s)`)
			}
		}
		
		else if(message.author.id == 330416413816782848){
			
			/*if(!args.length) {
				return message.channel.send(`No arguments were provided ${message.author}`)
			}*/
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				return message.reply("That is not a valid number")
			}
			else if (amount > 101) {
				return message.reply("The maximum amount of messages you can bulk delete is 100")
			}
			else {
			message.channel.bulkDelete(amount,true).catch(err => {
				console.error(err)
				message.channel.send("There was an error trying to bulk delete messages. It could be that there are no messages in the channel that are newer than 2 weeks.")
			});
			message.channel.send(`Succesfully deleted ${amount} message(s)`)
			}
		}
		else{
			message.channel.send(`You do not have access to this command ${message.author}`)
		}
		//

	},
};