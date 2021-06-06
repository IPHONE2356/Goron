module.exports = {
  name:"memorial",
  description:"R.I.P bricka",
  execute(message,args){
    message.channel.send("R.I.P Bricka")
    message.channel.send({files:["max1.jpg","max2.jpg","max3.jpg","binman.png"]})
  }
}