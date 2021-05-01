module.exports = {
	name:"blm",
	aliases : ["racist"],
	description:"A certain someone giving a speech about equal rights no matter what complexion you are",
	execute(message,args){
		if(message.guild.id == 725712693583151188){
			message.channel.send({files:["blmfist.png"]})	
		}
		else{
			message.channel.send({files: ["blm.mp4"]})
		}
	}
}