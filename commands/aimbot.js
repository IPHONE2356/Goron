module.exports = {
	name:"aimbot",
	description:"Sends a random aimbot siege clip, More clips can be added just DM suli",
	execute(message,args){
		var fs = require('fs')
		var links = fs.readFileSync("aimbotlinks.txt").toString()
		links = links.split("\n")
		function randomint(max){
			return Math.floor(Math.random() * Math.floor(max))
		}
		var picker = randomint(links.length)
		message.channel.send(links[picker])

	}
}