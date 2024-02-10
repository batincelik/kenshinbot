const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));

  if (!args.join(' ')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Kullanmak istediğin prefixi yaz. Örneğin: ${prefix}prefix-ayarla c?`).setColor("RED"));
  db.set(`guildPrefix_${message.guild.id}`, args.join())
  message.channel.sendEmbed(new Discord.RichEmbed().addField(`Prefix başarıyla değiştirildi! Yeni Prefix`, `${args.join()}`).setColor("GREEN"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["önek", "ön-ek"],
  permLevel: 0
};

exports.help = {
  name: 'prefix-ayarla',
  description: '',
  usage: ''
};