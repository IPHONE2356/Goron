module.exports = {
	name:"comehere",
	description:"Come here",
	execute(message,args){
		
		if (message.author.tag == "jayzunited#4496"){
		const channel = message.channel
    	const members = channel.members
        members.forEach(member => {
        	var target = 493402498388721670
        	var test = 201043573162901504
        	if (member.id == target) {
        		member.voice.setMute(false)
        		message.channel.send("Done.")
        	}
    //member.voice.setMute(true)
    
    	})
        }
        else if(message.author.tag == "Banter Gaming#1624"){
        	if (!args.length){
				const channel = message.channel
		    	const members = channel.members
		        members.forEach(member => {
		        	console.log(member)
		        	var target = 493402498388721670
		        	var test = 201043573162901504
		        	if (member.id == target) {
		        		member.voice.setMute(false)
		        		message.channel.send("Done.")
		        	}
	        	})
	        }
	        else{
	        	const channel = message.channel
	        	const members = channel.members
	        	members.forEach(member => {
	        		if(member.id == args[0]){
	        			member.voice.setMute(false)
	        			message.channel.send("Done.")
	        		}
	        	})
	        }
        }
        else if(message.author.tag == "bbbrandon#3858"){
			const channel = message.channel
	    	const members = channel.members
	        members.forEach(member => {
	        	var target = 493402498388721670
	        	var test = 201043573162901504
	        	if (member.id == target) {
	        		member.voice.setMute(false)
	        		message.channel.send("Done.")
	        	}
        	})
        }
        else if (message.author.tag == "JustNotVeryGood#4626"){
			const channel = message.channel
	    	const members = channel.members
	        members.forEach(member => {
	        	var target = 493402498388721670
	        	var test = 201043573162901504
	        	if (member.id == target) {
	        		member.voice.setMute(false)
	        		message.channel.send("Done.")
	        	}
        	})
        }
        else if (message.author.tag == "Dyl#0671"){
			const channel = message.channel
	    	const members = channel.members
	        members.forEach(member => {
	        	var target = 493402498388721670
	        	var test = 201043573162901504
	        	if (member.id == target) {
	        		member.voice.setMute(false)
	        		message.channel.send("Done.")
	        	}
        	})
        }
	    else{
	    	message.channel.send({files : ["Best_aim_ever.mp4"]})
	    }
		
		//message.channel.send({files : ["Best_aim_ever.mp4"]})


    }
	
}
