const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKEN)

client.on('message', message => {
  var prefix = '++'
  if(message.content.toLowerCase() === `${prefix}ping`) {
    
    message.channel.send('ponk')
    
  }
  
  
  
  
  
  
  
  
  
})
