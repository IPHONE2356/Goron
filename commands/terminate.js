module.exports = {
	name:"terminate",
	description:"Logs the bot off",
	aliases:["logoff","halt","destroy"],
	execute(message,args){
		if(message.author.tag == "Banter Gaming#1624"){
			message.channel.send("Goodbye :wave:")
			client.destroy()
		}
		else{
			message.channel.send("https://tenor.com/view/suli-check-gif-20096728")
		}
	}
}