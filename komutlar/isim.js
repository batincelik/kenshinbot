const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  let oyuncu = JSON.parse(fs.readFileSync("./isimler.json", "utf8"));
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir isim belirtmelisin.').setColor('RED'));
  if(args[0]) {
    oyuncu[message.author.id] = {
      isim: args.join(" ")
    };
    fs.writeFile("./isimler.json", JSON.stringify(oyuncu), (err) => {
      if (err) console.log(err);
    });
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: **${args.join(" ")}** artık yeni ismin ${message.author.tag}!`).setColor("GREEN"));
  }
};

exports.help = {
  name: "isim"
}