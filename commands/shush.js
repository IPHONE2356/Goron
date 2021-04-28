module.exports = {
	name:"shush",
	description:"Shush",
	guildOnly : true,
	execute(message,args){

		/*
		if(!args.length){
			message.channel.send(`You did not provide any arguments ${message.author}`)
		}
		else if (args[0]){
			const channel = message.channel
			const members = channel.members
			members.forEach(member => {
				if(member.id == args[0]){
					member.voice.setMute(true)
				}
			})
		}
		*/
    	
        if(message.author.id == "330411095959273482"){
        	if (!args.length){
        		try{
					const channel = message.channel
			    	const members = channel.members
			        members.forEach(member => {
			        	console.log(member)
			        	var target = 493402498388721670
			        	var test = 201043573162901504
			        	if (member.id == target) {
			        		member.voice.setMute(true)
			        		message.channel.send("Muted")
			        	}
		        	})
		        } catch (error){
		    	console.error(error)
		    	message.channel.send(`There was an error executing that commmand, You shmuck \n ${error}`)
		    	}
		    } 
	        else{
	        	if (args[0] == 201043573162901504){
	        		message.channel.send("You are not smart")
	        	}
	        	else{
		        	const channel = message.channel
		        	const members = channel.members
		        	members.forEach(member => {

		        		if(member.id == args[0]){
		        			member.voice.setMute(true)
		        			message.channel.send("Muted")
		        		}
		        	})
		        }
	        }
        }

        else if(message.author.tag == "Banter Gaming#1624"){
        	if (!args.length){
        		try{
					const channel = message.channel
			    	const members = channel.members
			        members.forEach(member => {
			        	console.log(member)
			        	var target = 493402498388721670
			        	var test = 201043573162901504
			        	if (member.id == target) {
			        		member.voice.setMute(true)
			        		message.channel.send("Muted")
			        	}
		        	})
		        } catch (error){
		    	console.error(error)
		    	message.channel.send(`There was an error executing that commmand, You shmuck \n ${error}`)
		    	}
		    } 
	        else{
	        	const channel = message.channel
	        	const members = channel.members
	        	members.forEach(member => {

	        		if(member.id == args[0]){
	        			member.voice.setMute(true)
	        			message.channel.send("Muted")
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
	        		member.voice.setMute(true)
	        		message.channel.send("Muted")
	        	}
        	})
        }
        /*
        else if (message.author.tag == "JustNotVeryGood#4626"){
			const channel = message.channel
	    	const members = channel.members
	        members.forEach(member => {
	        	var target = 493402498388721670
	        	var test = 201043573162901504
	        	if (member.id == target) {
	        		member.voice.setMute(true)
	        		message.channel.send("Muted")
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
	        		member.voice.setMute(true)
	        		message.channel.send("Muted")
	        	}
        	})
        }
        */
        
	    else{
	    	message.channel.send("https://gamerdvr.com/gamer/iphone2356/video/125379340")
	    }
	    
	    
	   //message.channel.send("https://gamerdvr.com/gamer/iphone2356/video/125379340")

    }
	
}
