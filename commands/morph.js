module.exports = {
  name:"morph",
  description:"morph",
  execute(message,args){
    message.channel.send({files:["morph.png"]})
  }
}
