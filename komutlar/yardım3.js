const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message, args, tools) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  const yardım = new Discord.RichEmbed()
  .setColor("#FF8C00")
  .setAuthor(`Kenshin | Yardım`, bot.user.avatarURL)
  .setFooter(message.author.tag + ' tarafından istendi', message.author.displayAvatarURL)
  .addField("» Kategoriler" , ":white_small_square: | **" + prefix +"ayarlar**: Sunucunuzu özelleştirmek için gerekli komutlar.\n :white_small_square: | **" + prefix +"moderasyon**: Sunucunuzu yönetmek için gerekli komutlar.\n :white_small_square: | **" + prefix +"bot**: Bot ile ilgili komutlar.\n :white_small_square: | **" + prefix + "sunucu**: Sunucu ile ilgili komutlar.\n:white_small_square: | **" + prefix + "eğlence**: Eğlence ile iglili komutlar.\n:white_small_square: | **" + prefix + "kullanıcı**: Kullanıcı ile iglili komutlar.\n:white_small_square: | **" + prefix + "resim**: Resim ile iglili komutlar.\n:white_small_square: | **" + prefix + "oyun**: Oyun ile iglili komutlar.\n:white_small_square: | **" + prefix + "profil**: Profil ile iglili komutlar.\n:white_small_square: | **" + prefix + "ekonomi**: Ekonomi ile iglili komutlar.\n:white_small_square: | **" + prefix + "level**: Level ile iglili komutlar.")
  .addField("» Linkler", `**[:robot: Davet](https://discordapp.com/oauth2/authorize?client_id=509009322034855948&scope=bot&permissions=2146958847)` + " | " + `[:wrench: Destek](https://discord.gg/TCcXtbx)` + " | " + `[:earth_africa: Website](http://fenixbot.ml/)` + " | " + `[:thumbsup: Oyla]()**`, false)
  .setTimestamp()
  return message.channel.sendEmbed(yardım)
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yardım3',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım2'
};