const Discord = require('discord.js');
const bot = new Discord.Client();

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
    
    if(msg.content === "נודר"){
        channel.send('נדרים')
        msg.channel.send('נדרים')
        ;
    }
})


bot.login(token);