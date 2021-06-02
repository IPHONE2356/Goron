module.exports = {
	name:"aimbot",
	description:"Sends a random aimbot siege clip, More clips can be added just DM suli",
	usage:"!aimbot",
	execute(message,args){
		var fs = require('fs')
		var links = fs.readFileSync("aimbotlinks.txt").toString()
		links = links.split("\n")
		var vidclips = ["niceman.mp4","R6Clip1"]
		if (!args.length){

			function randomint(max){
				return Math.floor(Math.random() * Math.floor(max))
			}
			var typepicker = randomint(links.length)
			
			if (typepicker <= 2){
				 message.channel.send("Loading clip...")				
				 var vidpick = randomint(vidclips.length)
				 console.log(vidpick)
				 message.channel.send({files: [vidclips[vidpick]]})
			}


			else{
				var picker = randomint(links.length)

				var prevpick = fs.readFileSync('aimbotval.txt')
				prevpick = parseInt(prevpick)
				while (prevpick == picker){
					var picker = randomint(links.length)
					console.log("Current picked clip is the same as the previous picked clip, Rerolling...")
				}
				fs.writeFile('aimbotval.txt',picker.toString() + "\n", (err) => {
					if (err) throw err;
				})
				console.log(picker)


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