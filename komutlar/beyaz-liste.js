const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== '1179122683305267241') return message.channel.send("Bu komutu sadece bot sahibi kullanabilir.");
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  
  let user = client.users.get(args.slice(0).join(' '));  
  db.delete(`karalist_${user.id}`)
  
  let embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeden çıkartıldı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "beyaz-liste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyaz-liste [kullanıcı ID]"
};