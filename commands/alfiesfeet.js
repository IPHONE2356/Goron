module.exports = {
	name:"alfiesfeet",
	description:"Sends a picture of alfies feet - Requested by Dylan",
	execute(message,args){
		message.channel.send({files : ["alfiesfeet.jpg"]})
	}
}