const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const token = process.env.token;
client.config = config;

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
})


function activity() {
  setTimeout(() => {
    fivereborn.query(config.serverInfo[0], config.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity(" online " + data.clients + "/" + data.maxclients, { type: config.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();


bot.login(config,token);