const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args, guild) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var öneri = args.slice(0).join(' ');
  var guildID = "510795031573954600";
  var channelID = "531138513324867584";
  
  if (!öneri) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Neyi bildirmek istediğini belirtmelisin.').setColor('RED'));
    
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .setAuthor("Yeni Bir Hata Bildirimi Alındı!")
      .addField("» Bildirilen Hata", öneri)
      .addField("» Bildiren Kullanıcı Hakkında", "• Kullanıcı: " + message.author.tag + "\n• ID: " + message.author.id)
      .addField("» Bildirilen Sunucu Hakkında", "• Sunucu: " + message.guild.name + "\n• ID: " + message.guild.id)
      .setColor("RANDOM");
    bot.guilds.get(guildID).channels.get(channelID).send(embed);
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: Hata başarıyla bildirilmiştir.').setColor('GREEN'));
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bildir',
  description: 'Etiketlediğin kişiye söversin',
  usage: 'aletim'
};  