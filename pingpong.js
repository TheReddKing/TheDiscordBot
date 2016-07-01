module.exports = {
    pingpong: function (user,userID,channelID,message,event) {
        bot.sendMessage({
            to: channelID,
            message: "pong <@" + userID + ">"
        });
    }
};
