module.exports = {
	name:"leave",
	description:"Makes the bot leave the voice channel you are currently in",
	async execute(message,args){
		const connection = await message.member.voice.channel.leave()
		message.channel.send("Left the voice channel")

	}

}