module.exports = {
	name:"cat",
	descroption:"Sends a random cat picture",
	aliases:["kitty","meow"],
	async execute(message,args){
		const fetch = require('node-fetch');
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file)
	}
}