module.exports = {
	name:"acapella",
	description:"Server mutes dylan, To unmute do !comehere acapella. This can be accessed by anyone",
	usage:"!acapella",
	execute(message,args){
		const channel = message.channel
		const members = channel.members
		var target = 460455100092252170
		members.forEach(member => {
			if(member.id == target){
				member.voice.setMute(true)
			}
			if(message.author.id == target){
				console.log("Suicide.")
			}
		})
	}
}
