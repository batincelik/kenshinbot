//Define discord-js
const Discord = require('discord.js');

//Define moment
const moment = require("moment");

exports.run = async (bot, message, args) => {
  let user;
  // If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
  // Define the member of a guild.
const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    let member = message.guild.member(user);
     var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))

  
  //Discord rich embed
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(user.avatarURL)
    .setTitle(`Kenshin | Kullanıcı Bilgi Sistemi`)
    .addField("Kullanıcı ID\'si:", `${user.id}`, true)
    .addField("Kullanıcı İsmi:", `${user.username}#${user.discriminator}`, true)
    .addField('BOT mu?', user.bot ? 'Evet' : 'Hayır', true)
    .addField('Durum:', durm, true)
    .addField("Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Bilinmiyor'}`, true)
    .addField("Rolleri:", member.roles.array(roles => `\`${roles.name}\``).join(', '), true)
    .setFooter(`${message.author.username}#${message.author.discriminator} tarafından istendi.`)
     message.channel.send({embed});
};

module.exports.help = {
  name: "kullanıcı-bilgi"
}