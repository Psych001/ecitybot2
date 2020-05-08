const Discord = require('discord.js');

const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');

const token = process.env.token;
const bot = new Discord.Client();
client.config = configs;


bot.on('ready', () =>{
    
    console.log('This bot is Online!');
})


bot.on('message', msg=>{
    
    if(msg.content === "!version"){
        msg.reply('Version: 1.0.9');
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
activity();


bot.login(token);