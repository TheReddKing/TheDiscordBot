var token = require('./token');
var Discord = require('discord.io');
var Lame = require('lame');
var fs = require('fs');
var spawn = require('child_process').spawn;
GLOBAL.bot = new Discord.Client({
    token: token.getToken(), //Put your tokenID here
    autorun: true
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
//Bots
var pingpong = require('./pingpong');
var server = require('./server');
var jokes = require('./jokes');
var help = require('./help');
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "=ping") {
        pingpong.pingpong(user,userID,channelID,message,event);
    }
    if(message === "=mute") {
        server.mute_id(user,userID,channelID,message,event);
    }
    if (message === "=help") {
        help.help(user,userID,channelID,message,event);
    }
    if(message === "=badjoke") {
        jokes.badjoke(user,userID,channelID,message,event);
    }
    if(message === "=badjoke --tts") {
        jokes.badjokeTTS(user,userID,channelID,message,event);
    }
});
