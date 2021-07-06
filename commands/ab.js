module.exports = {
	name:"ab",
	description:"yum",
	aliases:["AB","alcoholbandit","bandit"],
	execute(message,args){
		message.channel.send({files:["AB.png"]})
	}
}