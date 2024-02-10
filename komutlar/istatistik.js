const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
  console.log("istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Kenshin', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@1179122683305267241>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB' + " / 32 GB", true)  
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField(`» Node.JS sürüm`, `${process.version}`, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("**❯ Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=967097062124560404&scope=bot&permissions=8)", )
  .addField("**❯ Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/nxUTAmF6Mh)", )
  return message.channel.send(istatistikler);
  };

module.exports.help = {
  name: "istatistik"
}