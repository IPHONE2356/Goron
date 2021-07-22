module.exports = {
	name:"disconnect",
	description:"Disconnects a user by their mention tag",
	usage:"[user id]",
	aliases:["dc","getout"],
	execute(message,args){
		if(message.author.tag == "Banter Gaming#1624"){
			const channel = message.channel
			const members = channel.members
			var input = args[0]
			var target = input.slice(3,-1)
			members.forEach(member => {
				if (member.id == target){
					console.log(member)
					member.voice.kick("Wet guy")
					message.channel.send(`Kicked ${member.nickname}`)
				}
			})
		}
	}
}