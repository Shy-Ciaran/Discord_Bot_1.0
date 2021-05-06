//code here under here blah
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')

const bot = new Discord.Client();

bot.login(token);

bot.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
    }
    if(message.content === `${prefix}are you here?`){
        message.channel.send('I am here')
    }
});
