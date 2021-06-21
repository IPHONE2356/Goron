module.exports = {
  name:"morph",
  description:"morph",
  execute(message,args){
    function randomint(max){
				return Math.floor(Math.random() * Math.floor(max))
		}
		var picker = randomint(55)
    console.log(picker)
    if(picker == 0){
      picker = 1
    }
    if (!args.length){
    message.channel.send({files:[`morph (${picker}).png`]})
    }
    else if (args[0] == "list"){
      message.channel.send("https://imgur.com/a/v9GKKGm")
    }
    else{
      message.channel.send({files:[`morph (${picker}).png`]})
    }

  }
}
