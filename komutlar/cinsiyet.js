const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  let oyuncu = JSON.parse(fs.readFileSync("./cinsiyetler.json", "utf8"));
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir cinsiyet belirtmelisin. Kız & Kadın & Erkek').setColor('RED'));
  if (args[0] === 'Kız' || args[0] === 'kız') {
    oyuncu[message.author.id] = {
      cinsiyet: args.join(" ")
    };
    fs.writeFile("./cinsiyetler.json", JSON.stringify(oyuncu), (err) => {
      if (err) console.log(err);
    });
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: ${message.author.tag} isimli kullanıcının cinsiyeti **${args.join(" ")}**`).setColor("GREEN"));
  }
    if (args[0] === 'Erkek' || args[0] === 'erkek') {
    oyuncu[message.author.id] = {
      cinsiyet: args.join(" ")
    };
    fs.writeFile("./cinsiyetler.json", JSON.stringify(oyuncu), (err) => {
      if (err) console.log(err);
    });
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: ${message.author.tag} isimli kullanıcının cinsiyeti **${args.join(" ")}**`).setColor("GREEN"));
  }
    if (args[0] === 'Kadın' || args[0] === 'kadın') {
    oyuncu[message.author.id] = {
      cinsiyet: args.join(" ")
    };
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: ${message.author.tag} isimli kullanıcının cinsiyeti **${args.join(" ")}**`).setColor("GREEN"));
  }
};

exports.help = {
  name: "cinsiyet"
}