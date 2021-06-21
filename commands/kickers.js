module.exports = {
	name: "kickers",
	description: "Was requested by someone",
	execute(message,args){
		if (message.author.id == 460455100092252170){
		message.channel.send({files : ["Toothbrush.jpg","Toothpaste.jpg","Gum.jpg","Mouthwash.png"]})
		message.channel.send("https://www.wikihow.com/Brush-Your-Teeth")
		}
		else if (message.author.tag == "Banter Gaming#1624"){
		message.channel.send({files : ["Toothbrush.jpg","Toothpaste.jpg","Gum.jpg","Mouthwash.png"]})
		message.channel.send("https://www.wikihow.com/Brush-Your-Teeth")
		}
		else if (message.author.id == 330411095959273482){
		message.channel.send({files : ["Toothbrush.jpg","Toothpaste.jpg","Gum.jpg","Mouthwash.png"]})
		message.channel.send("https://www.wikihow.com/Brush-Your-Teeth")
		}
		else{
			message.channel.send({files : ["Toothbrush.jpg","Toothpaste.jpg","Gum.jpg","Mouthwash.png"]})
			message.channel.send("https://www.wikihow.com/Brush-Your-Teeth")
		}
	}
}