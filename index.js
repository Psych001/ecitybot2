const Discord = require('discord.js');
const token = process.env.token;
const bot = new Discord.Client();

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('Version: 1.0.8 | !credit') ;
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
    
    if(msg.content === "מוריס"){
        msg.reply('מוריס מת');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "שאליקו"){
        msg.reply('http://prntscr.com/sc73qj');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "מישל"){
        msg.reply('https://cdn.discordapp.com/attachments/693792348907503686/707698166769909861/2371528-46.png');
    }
})


bot.on('message', msg=>{
    
    if(msg.content === "קווין"){
        msg.reply('https://cdn.discordapp.com/attachments/458277615011364864/707701222269911110/unknown.png');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "!version"){
        msg.reply('Version: 1.0.8');
    }
})


bot.login(token);