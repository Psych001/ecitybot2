const Discord = require('discord.js');
const bot = new Discord.Client();
const fivereborn = require('fivereborn-query')

const token = process.env.token;

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
   // bot.user.setActivity('Version 1.1.0 | !credit') ;
})

bot.on('message', msg=>{
    
    if(msg.content === "!credit"){
        msg.reply('Dev by ! ᴘsʏᴄʜᴏ ⚡#4863');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "!version"){
        msg.reply('1.1.0');
        }
})

function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity(" online " + data.clients + "/" + data.maxclients, { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
 

bot.login(token);