const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

module.exports.run = async (bot, message, args) => {
  var client = bot;
  
  var m = await message.channel.send("Bir saniye gerekli verileri hesaplıyorum...")
  
  var osType = await os.type();

    if (osType === 'Darwin') osType = 'macOS'
    else if (osType === 'Windows') osType = 'Windows'
    else osType = os.type();
  
    //--------------------------//
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
  
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("» Bot İsmi", "Kenshin", true)
  .addField("» Bot Sahibi", "<@1179122683305267241>", true)
    .addField("» Sürüm", " v1.0 ", )
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB' + " / 32 GB", true)  
  .addField("» İşlemci", `\`\`\`yaml\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
    .addField("» İşlemci Kullanımı", `%${percent.toFixed(2)}`, true)
    .addField("» İşletim Sistemi", `${osType} ${osBit}`, true)
    .addField("» Çalışma süresi", duration + ' boyunca sıkıntısız bir şekilde hizmet vermekte.')
    .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
    .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
    .addField("» Discord.JS sürüm", "v"+Discord.version, true)
    .addField(`» Node.JS sürüm`, `${process.version}`, true)
    .addField("» Davet Et", " [Davet Et](https://discord.com/oauth2/authorize?client_id=967097062124560404&scope=bot&permissions=8)", )
  .setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    message.channel.sendEmbed(pingozel)
})};

module.exports.help = {
  name: "bilgi"
}