module.exports = {
  name:"morph",
  description:"morph",
  execute(message,args){
    function randomint(max){
				return Math.floor(Math.random() * Math.floor(max))
		}
		var picker = randomint(14)
    console.log(picker)
    if(picker == 0){
      picker = 1
    }
    message.channel.send({files:[`morph (${picker}).png`]})

  }
}
