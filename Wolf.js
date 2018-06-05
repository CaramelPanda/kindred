const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I smell prey!");
});

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login("NDUxODgyMjYwNzE1NjY3NDU2.DfIaqw.Jl1r9mcmjhRL3thkEZHa7b_9z-8");
