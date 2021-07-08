module.exports = {
	name:"fortnite",
	description:"Picks a place for you to drop at",
	execute(message,args){
		function randomint(max){
			return Math.floor(Math.random() * Math.floor(max))
		}
		var locations = ["Coral Castle","Craggy Cliffs","Steamy Stacks","Pleasant Park","Believer Beach","Corny Complex","Dirty Docks","Boney Burbs","Holly Hedges","Weeping Woofs","Lazy Lake","Retail Row","Slurpy Swamp","Catty Corner","Misty Meadows"]
		var picker = randomint(locations.length)
		if (picker == 0){
			picker = 1
		}
		message.channel.send(locations[picker])
	}

}