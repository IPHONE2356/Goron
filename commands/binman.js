module.exports = {
	name:"binman",
	description:"Nice picture of a binman",
	execute(message,args){
		message.channel.send({files:["binman.png"]})
	}
}