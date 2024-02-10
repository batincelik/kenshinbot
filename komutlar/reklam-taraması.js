const Discord = require('discord.js');

exports.run = (client, msg, args) => {
 if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor('RED'));
 const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
 return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.");
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ["reklamtaraması", "reklambul", "rtaraması"]
};

exports.help = {
 name: 'reklam-taraması',
 description: 'Sunucunuzda Reklam Taraması Yapar',
  usage: 'checkinvites'
};