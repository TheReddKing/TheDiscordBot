# TheDiscordBot

A simple discord bot

The main thing it currently does are

=ping
=help
=badjoke (which just grabs a joke off of quality reddit jokes hehe)


#Setup
Here's a tutorial I made
https://www.youtube.com/watch?v=P66g0l-QInU

Have NodeJS.
Create a file called
token.js

    module.exports = {
        getToken: function () {
            return "PUT TOKEN ID HERE"
        }
    };


Then I ran (the say was for the speech synth)

    npm install discord.io
    npm install say

To run the program

    node index.js

