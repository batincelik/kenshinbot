const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  let oyuncu = JSON.parse(fs.readFileSync("./yaslar.json", "utf8"));
  if (isNaN(args[0])) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir yaş belirtmelisin.').setColor('RED'));
  if(!isNaN(args[0])) {
    oyuncu[message.author.id] = {
      yas: args.join(" ")
    };
    fs.writeFile("./yaslar.json", JSON.stringify(oyuncu), (err) => {
      if (err) console.log(err);
    });
const Discord = require('discord.js');
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: **${args.join(" ")}** artık yeni yaşın ${message.author.tag}!`).setColor("GREEN"));
  }
};

exports.help = {
  name: "yaş"
}