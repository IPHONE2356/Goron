module.exports = {
  name:"morph",
  description:"morph",
  execute(message,args){
    var images = //Add split by new line function here
    function randomint(max){
				return Math.floor(Math.random() * Math.floor(max))
		}
		var picker = randomint(images.length)
    message.channel.send({files:[`${images[picker]}`})
  }
}
