module.exports = {
	name: "feet",
	description:"feet",
	execute(message,args){
		function randomint(max){
			return Math.floor(Math.random() * Math.floor(max))
		}
		/*
		discrim = randomint(2)
		console.log(discrim)
		if (discrim == 1){
			message.channel.send({files:["harrysfeet.png"]})
		}
		else if (discrim == 0){
			message.channel.send({files:["alfiesfeet.jpg"]})
		}
		else{
		message.channel.send({files : ["harrysfeet.png","alfiesfeet.jpg"]})
		}
		*/
		message.channel.send({files:["alfiesfeet.jpg","harrysfeet.png","harrysfeet2.JPG"]})
	}
}
