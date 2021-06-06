module.exports = {
	name:"bricker",
	description:"Brick brick brick briiick",
	aliases:["bricka","bricks"],
	execute(message,args){
		message.channel.send("RIP Bricka")
		message.channel.send({files:["bricker.png"]})
	}
}