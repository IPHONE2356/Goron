module.exports = {
	name: 'pumpkin',
	description: 'pumpkin',
	execute(message, args) {
		message.channel.send({files: ["pumpkin.jpg"]});
		
	},
};