const Discord = require('discord.js');
const token = process.env.token;
const bot = new Discord.Client();

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('Version: 1.0.7 | !credit') ;
})


bot.on('message', msg=>{
    
    if(msg.content === "!credit"){
        msg.reply('Dev by ! ᴘsʏᴄʜᴏ ⚡#4863');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "אוהד"){
        msg.reply('המלך שלי ♥♥♥♥♥♥');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "פרינס"){
        msg.reply('הפלופר');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "חן בסט"){
        msg.reply('http://prntscr.com/s6vcm0');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "שאליקו"){
        msg.reply('https://cdn.discordapp.com/attachments/639192344591073321/707697888918110218/Screenshot_939.png');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "מישל"){
        msg.reply('https://cdn.discordapp.com/attachments/693792348907503686/707698166769909861/2371528-46.png');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "!version"){
        msg.reply('Version: 1.0.6');
    }
})


bot.login(token);