const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

bot.on('ready', () =>{
    
    console.log('This bot is Online!');
    bot.user.setActivity('! ᴘsʏᴄʜᴏ ⚡#4863 | !credit') { type: 'WATCHING' }) ;
})

bot.on('message', msg=>{
    
    if(msg.content === "!credit"){
        msg.reply('Dev by ! ᴘsʏᴄʜᴏ ⚡#4863');
    }
})

bot.on('message', msg=>{
    
    if(msg.content === "נודר"){
        channel.send('hello!')
        msg.channel.sendMessage('נדרים')
;}
})


bot.login(token);