module.exports = {
	name:"comehere",
	description:"Come here",
	execute(message,args){
		
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
			        		member.voice.setMute(false)
			        		message.channel.send(`Unmuted ${member.nickname}`)
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
	        	else if (args[0] == 330411095959273482){
	        		message.channel.send("You are not smart")
	        	}
		        else{
		        	const channel = message.channel
		        	const members = channel.members
		        	members.forEach(member => {


		        		if(member.id == args[0]){
		        			member.voice.setMute(false)
		        			message.channel.send(`Unmuted ${member.nickname}`)
		        		}
		        	})
		        }
	        }
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
		        		message.channel.send(`Unmuted ${member.nickname}`)
		        	}
	        	})
	        }
	        else{
	        	const channel = message.channel
	        	const members = channel.members
	        	members.forEach(member => {
	        		if(member.id == args[0]){
	        			member.voice.setMute(false)
	        			message.channel.send(`Unmuted ${member.nickname}`)
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
	        		message.channel.send(`Unmuted ${member.nickname}`)
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
	        		member.voice.setMute(false)
	        		message.channel.send("Unmuted.")
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
	        		message.channel.send("Unmuted.")
	        	}
        	})
        }
        */
	    else{
	    	if(!args.length){
	    		message.channel.send({files : ["Best_aim_ever.mp4"]})
	    	}
	    	else if(args[0] == "acapella"){

	    		var targetid = 460455100092252170
	    		var testid = 201043573162901504
	    		if(message.author.id == targetid){
	    			message.channel.send("You are not smart")
	    		}
	    		else{
	    			const channel = message.channel
	    			const members = channel.members
	    			members.forEach(member => {
	    				if(member.id == targetid){
	    					member.voice.setMute(false)
	    					message.channel.send(`Unmuted ${member.nickname}`)
	    				}

	    			})
	    		}
	    	}
	    	
	    }
		
		//message.channel.send({files : ["Best_aim_ever.mp4"]})


    }
	
}
