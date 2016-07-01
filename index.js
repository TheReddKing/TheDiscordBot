var token = require('./token');
var Discord = require('discord.io');
var Lame = require('lame');
var fs = require('fs');
var spawn = require('child_process').spawn;
GLOBAL.bot = new Discord.Client({
    token: token.getToken(), //Put your tokenID here
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

//Bots
var pingpong = require('./pingpong');
var help = require('./help');
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "=ping") {
        pingpong.pingpong(user,userID,channelID,message,event);
    }
    if (message === "=help") {
        help.help(user,userID,channelID,message,event);
    }
});
