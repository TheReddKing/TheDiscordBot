module.exports = {
    badjoke: function (user,userID,channelID,message,event) {
        bot.sendMessage({
            to: channelID,
            message: "<@" + userID + "> What do you call an person? --- A fish"
        });
    }
};
