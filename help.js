module.exports = {
    help: function (user,userID,channelID,message,event) {
        bot.sendMessage({
            to: channelID,
            message: "<@" + userID + "> Check your messages!"
        });
        bot.sendMessage({
            to: userID,
            message: "<@" + userID + "> Options \n =badjoke"
        });
    }
};
