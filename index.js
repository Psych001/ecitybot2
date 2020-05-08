const Discord = require('discord.js');

const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');

const token = process.env.token;
const bot = new Discord.Client();
client.config = configs;


client.login(configs.token)
  .then(
    () => {
      console.log("Bot startet!");
      console.log("Receiving information, please wait...");
    },
    () => {
      client.destroy();
      console.log("Bot destroyed!");
    });



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