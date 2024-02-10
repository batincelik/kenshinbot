const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  let oyuncu = JSON.parse(fs.readFileSync("./lisanslar.json", "utf8"));
  if(message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komutu sadece **Bot Sahibi** kullanabilir.').setColor('RED'));
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir biyografi belirtmelisin.').setColor('RED'));
  if(args[0]) {
    oyuncu[message.author.id] = {
      biyografi: args.join(" ")
    };
    fs.writeFile("./biyografiler.json", JSON.stringify(oyuncu), (err) => {
      if (err) console.log(err);
    });
    if (oyuncu[message.author.id]) {
    oyuncu[message.author.id] = `${oyuncu[message.author.id].biyografi}`
  } else {
    oyuncu[message.author.id] = `**Ayarlı Değil!** :X:`

  }
    message.channel.send(new Discord.RichEmbed().setDescription(`:white_check_mark: ${message.author.tag} isimli kullanıcının yeni biyografisi:\n\n*${args.join(" ")}*`).setColor("GREEN"));
  }
};

exports.help = {
  name: "onayla-asd"
}