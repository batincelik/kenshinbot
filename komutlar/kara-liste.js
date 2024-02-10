const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== '1179122683305267241') return message.channel.send("Bu komutu sadece bot sahibi kullanabilir.");
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  
  let user = client.users.get(args.slice(0).join(' '));
  if (db.has(`karalist_${user.id}`) === true) return message.reply("Bu kullanıcı zaten kara listede!");
  
  db.set(`karalist_${user.id}`, "aktif")
  
  let embed = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeye alındı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "karaliste"],
  permLevel: 5,
  kategori: "yapımcı"
};

exports.help = {
  name: "kara-liste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "kara-liste [kullanıcı ID]"
};