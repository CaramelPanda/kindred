const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("The Hunt begins.");
});

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login("NDUxODgxODI3MDI4ODI4MTcx.DfIaeg.7fDALnyqwl11kvJPe8RdLZGNLf8");
