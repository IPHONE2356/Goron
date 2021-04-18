module.exports = {
	name:"aimbot",
	description:"Sends a random aimbot siege clip, More clips can be added just DM suli",
	execute(message,args){
		var fs = require('fs')
		var links = fs.readFileSync("aimbotlinks.txt").toString()
		links = links.split("\n")
		if (!args.length){

			function randomint(max){
				return Math.floor(Math.random() * Math.floor(max))
			}
			var typepicker = randomint(10)
			console.log(typepicker)
			if (typepicker == 9){
				
				message.channel.send("Loading Clip....")
				message.channel.send({files: ["R6CLIP1.mp4"]})
			}
			else{
				var picker = randomint(links.length)
				message.channel.send(links[picker])
			}
		}
		else if (args[0] == "length"){
			message.channel.send(`There are ${links.length} clips`)
		}
		else{
			message.channel.send("You did something wrong there, Inbred.")
		}

	}
}