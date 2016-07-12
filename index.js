var token = require('./token');
var Discord = require('discord.io');
var Lame = require('lame');
var fs = require('fs');
var wav = require('wav');
var spawn = require('child_process').spawn;

var say = require('say');
var voiceChannelID = "107268539072659456";
voiceChannelID = "109034619680075776";


var file = "hal.wav";

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

    console.log(bot.servers);
});
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};



//Bots
var pingpong = require('./pingpong');
// var server = require('./server');
var jokes = require('./jokes');
var help = require('./help');

bot.on('message', function(user, userID, channelID, message, event) {
    console.log(channelID);
    if (message === "=ping") {
        pingpong.pingpong(user,userID,channelID,message,event);
    }
    if(message === "=mute") {
        // server.mute_id(user,userID,channelID,message,event);
    }
    if (message === "=help") {
        help.help(user,userID,channelID,message,event);
    }
    if(message.includes("=badjoke")) {
        jokes.badjoke(user,userID,channelID,message,event,message);
    }
    if(message === "=rule34") {
        bot.sendMessage({
            to: userID,
            message: "<@" + userID + "> YOU SICK FOOL!"
        });
    }
    if(message.includes("=join")) {

        say.export(message.replaceAll("=join",""), 'Bruce',1.2, 'hal.wav', function(err) {
          if (err) {
            return console.error(err);
          }

          console.log('Text has been saved to hal.wav.');


          bot.joinVoiceChannel(voiceChannelID, function() {
              bot.getAudioContext({channel: voiceChannelID, stereo: true}, handleStream);
          });


        });
    }
});

function handleStream(stream) {
    stream.playAudioFile('./hal.wav');
	// playMP3(stream, file);
}

// { CHAT '107268538779058176': [Getter/Setter],
//   '107268539072659456': [Getter/Setter],
//   '109034619680075776': [Getter/Setter],
//   CHAT '110575332179857408': [Getter/Setter],
//   CHAT '110576444693827584': [Getter/Setter],
//   '110901836797452288': [Getter/Setter],
//   '110932589514080256': [Getter/Setter],
//   '110933135792816128': [Getter/Setter],
//   CHAT '111280307499450368': [Getter/Setter],
//   CHAT '111904940078678016': [Getter/Setter],
//   '130543088576888832': [Getter/Setter],
//   '130815645653794817': [Getter/Setter],
//   CHAT '179453455532949504': [Getter/Setter],
//   CHAT '183375629977124864': [Getter/Setter],
//   CHAT '185084560739008512': [Getter/Setter],
//   '185088580945838080': [Getter/Setter],
//   CHAT '187719257713410053': [Getter/Setter],
//   '189165014698033152': [Getter/Setter],
//   '189165125511413761': [Getter/Setter] },
