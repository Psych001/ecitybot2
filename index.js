const Discord = require('discord.js');
const bot = new Discord.Client();
const fivereborn = require('fivereborn-query')

const token = process.env.token;

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('! ᴘsʏᴄʜᴏ ⚡#4863 | !credit') ;
})

bot.on('message', msg=>{
    
    if(msg.content === "!credit"){
        msg.reply('Dev by ! ᴘsʏᴄʜᴏ ⚡#4863');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "!version"){
        msg.reply('1.0.9');
        }
})

fivereborn.query("51.75.73.161", 30120, (err, data) => {
  if (!err) {
    console.log(data)
  } else {
    console.log('Server is offline.')
  }
})

bot.on('message', msg=>{
    
    if(msg.content === "!data"){
        msg.reply(data);
        }
})



    

bot.login(token);