module.exports = {
	name:"phategg",
	description:"Send pictures of harrison - Requested by Jonah",
	execute(message,args){
		message.channel.send("Loading Images...")
		message.channel.send({files : ["harrison.png","harrison2.png","harrison3.png"]})
	}
}