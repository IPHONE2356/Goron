module.exports = {
	name:"hasbulla",
	description:"Sends a cute video of hasbulla",
	execute(message,args){
		function randomint(max){
			return Math.floor(Math.random() * Math.floor(max))
		}
		var picker = randomint(7)
		message.channel.send({files:[`hasbulla${picker}.mp4`]})
	}
}