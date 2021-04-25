module.exports = {
	name: 'feedback',
	description: 'Use this command if you want to request a command. Correct usage: ``!feedback [request]``',
	execute(message, args) {
		if (message.author.id != 493402498388721670){
			const fs = require ('fs')
			var arlen = args.length
			if(!args.length) {
				return message.channel.send(`No arguments were provided ${message.author}`)
			}
			else{
				var counter = 1
				var output = " "
				for (i=0; i < args.length; i++) {
					output = output + args[i] + " "
					console.log(`i= ${i}`)
					console.log(output)
				}
			}

			
			console.log(output)
			fs.appendFile('feedback.txt', message.author.tag + output + "\n", (err) => {
				if (err) throw err;
			})
			message.channel.bulkDelete(1,true)
			message.channel.send("Done")
		}
	},
};