module.exports = {
	name:"facts",
	description:"States some facts - Requested by Alfie",
	execute(message,args){

		if(!args.length){
		facts = ["Harrisons touches kids","Jaimin actaully has really crusty toes","Thomas is so good at apex","Alfie is a wet guy","Jaimin has dry knees","Alastair has good touch"]

		var output = facts[Math.floor(Math.random() * facts.length)]
		message.channel.send(output)
		}
		else if (args[0] == "list"){
			message.channel.send(facts)
		}
	}
}
