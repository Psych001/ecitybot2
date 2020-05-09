<<<<<<< HEAD
const Discord = require('discord.js');
const bot = new Discord.Client();
const fivereborn = require('fivereborn-query')

=======
/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
>>>>>>> 9fd8aac72c44eb9f4c9ea29e6b0baf09b43c5786
const token = process.env.token;
client.config = configs;

/////////////////////////////////////////////////////
// START THE BOT
/////////////////////////////////////////////////////

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('! ᴘsʏᴄʜᴏ ⚡#4863 | !credit') ;
})

<<<<<<< HEAD
bot.on('message', msg=>{
    
    if(msg.content === "!credit"){
        msg.reply('Dev by ! ᴘsʏᴄʜᴏ ⚡#4863');
    }
})

fivereborn.query("51.75.73.161", 30120, (err, data) => {
  if (!err) {
    console.log(data)
  } else {
    console.log('Server is offline.')
  }
})

=======
/////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////

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
activity();
>>>>>>> 9fd8aac72c44eb9f4c9ea29e6b0baf09b43c5786


bot.login(token);