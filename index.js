//code here under here blah

const Discord = require('discord.js');
const { prefix } = require('./config.json'); 

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', message => {
    if (message.content == `${prefix}DM`) {
        member.send("I am a sample message");
    }
});
bot.on('guildMemberAdd', member => {
    member.send("Welcome " + member.displayName + " to " + member.guild.name);
});

bot.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
    if (message.content === `${prefix}are you here?`) {
        message.channel.send('I am here');
    }
});
