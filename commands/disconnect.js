module.exports = {
	name:"disconnect",
	description:"Disconnects a user by ID",
	usage:"!disconnect [user id]",
	aliases:["dc","getout"],
	execute(message,args){
		if(message.author.tag == "Banter Gaming#1624"){
			const channel = message.channel
			const members = channel.members
			members.forEach(member => {
				if (member.id == args[0]){
					console.log(member)
					member.voice.kick("Wet guy")
					message.channel.send(`Kicked ${member.nickname}`)
				}
			})
		}
	}
}