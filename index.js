const express = require("express");
const app = express();

app.listen(() => console.log('Bad Start Go Go'));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const fs = require("fs");


const client = new Discord.Client();
const config = require("./config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} Is Ready Now..`);
    client.commands.set(commandName, props);
  });
});

var _0x4003=["\x42\x61\x64\x20\xA9","\x6C\x6F\x67"];console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`);console[_0x4003[1]](`${_0x4003[0]}`)


client.login(config.token);