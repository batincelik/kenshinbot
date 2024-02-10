const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));

  if(prefix == '!') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Ayarlanmayan bir şeyi sıfırlayamam.').setColor('RED'));

  db.set(`guildPrefix_${message.guild.id}`, '!') 
  message.channel.sendEmbed(new Discord.RichEmbed().addField(`Prefix başarıyla sıfırlandı! Tekrardan prefixi değiştirmek isterseniz`, `!prefix [istediğiniz prefix]`).setColor("GREEN"));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["önek-sıfırla", "ön-ek-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: 'prefix-sıfırla',
  description: '',
  usage: ''
};