const Discord = require('discord.js');

exports.run = (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor('RED'));
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Neyi duyuracağımı belirtmedin.').setColor('RED'));
  message.delete();
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    .setFooter(`Duyuruyu yapan: ${message.author.tag}`)
  message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['announce', 'broadcast'],
  permLevel: 3
};

exports.help = {
  name: 'duyuru',
  description: 'Sadece adminlerin duyuru yapabileceği bir komut',
  usage: 'duyuru [duyuru yaparsınız]'
};