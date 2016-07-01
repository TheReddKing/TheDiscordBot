var file = "data.db";
var fs = require('fs');
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var jokes = []
db.serialize(function() {
    db.each("SELECT id, text_title, text_joke FROM s001_redditjokes", function(err, row) {
        // console.log(row.id + ": " + row.text_title);
        jokes.push("\n\n" + row.text_title + " !THEREDDKING! " + row.text_joke);
    });
});

module.exports = {
    badjoke: function (user,userID,channelID,message,event) {
        bot.sendMessage({
            to: channelID,
            message: "<@" + userID + ">" + randomJoke()
        });
    },
    badjokeTTS: function (user,userID,channelID,message,event) {
        bot.sendMessage({
            to: channelID,
            message: "<@" + userID + ">"
        });
        bot.sendMessage({
            to: channelID,
            message: randomJoke(),
            tts: true
        });
    }
};
function randomJoke() {
    return  jokes[parseInt(Math.random()*jokes.length)].replaceAll("\\|\\|","\n").replaceAll(" !THEREDDKING! ","\n\n\n")
}
