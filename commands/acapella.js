module.exports = {
	name:"acapella",
	description:"Server mutes dylan - Only used for when he is singing",
	aliases:["silence","peace"],
	execute(message,args){
		const channel = message.channel
	    const members = channel.members
        members.forEach(member => {
        	var target = 460455100092252170
        	var test = 201043573162901504
        	if (member.id == target) {
        		member.voice.setMute(true)
        		message.channel.send("Muted")
        	}
    	})
	}

}