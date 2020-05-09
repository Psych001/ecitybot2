/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
const token = process.env.token;
client.config = configs;

/////////////////////////////////////////////////////
// START THE BOT
/////////////////////////////////////////////////////

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('! ᴘsʏᴄʜᴏ ⚡#4863 | !credit') ;
})

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


bot.login(token);