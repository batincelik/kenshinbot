const Discord = require('discord.js');
let coins = require("../coins.json");

exports.run = (client, message, params) => {
  if (!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .addField("Paran: **" + uCoins + "** :dollar:", "Tüyo: Kolay para kazanmak için level atlayabilirsin.")
  .setThumbnail(message.author.displayAvatarURL)
  .setTimestamp()
  return message.channel.sendEmbed(coinEmbed).then(msg => {msg.delete(15000)});
};

exports.help = {
  name: 'para',
};
