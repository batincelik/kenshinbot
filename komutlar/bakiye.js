const Discord = require('discord.js');
let bakiye = require("../bakiye.json");

exports.run = (client, message, params) => {
  if (!bakiye[message.author.id]){
    bakiye[message.author.id] = {
      bakiye: 0
    };
  }

  let bakiyen = bakiye[message.author.id].bakiye;
  let bakiyeembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .addField("<:kart:518831625124184065> Hesabınızdaki bakiye miktarı: **" + bakiyen + "** <:tl:518469950705500180>", "Not: Bakiye satın almak için **Bot Sahiplerine** ulaşabilirsin.")
  .setThumbnail(message.author.displayAvatarURL)
  .setTimestamp()
  return message.channel.sendEmbed(bakiyeembed).then(msg => {msg.delete(15000)});
};

exports.help = {
  name: 'bakiye',
};
