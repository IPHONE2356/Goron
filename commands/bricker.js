module.exports = {
	name:"bricker",
	description:"Brick brick brick briiick",
	aliases:["bricka","bricks"],
	execute(message,args){
		message.channel.send("RIP Bricka")
		message.channel.send({files:["bricker.png"]})
		message.channel.bulkDelete(2,true).catch(err => {
				console.error(err)
				message.channel.send("Error, jaimin stinks")
			});
		message.channel.send("I lieeeeeeed")
	}
}