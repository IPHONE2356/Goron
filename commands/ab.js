module.exports = {
	name:"ab",
	description:"Sends a nice picture of the AB himself",
	aliases:["AB","alcoholbandit","bandit"],
	execute(message,args){
		message.channel.send({files:["AB.png"]})
	}
}