const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Mesajları Yönet** yetkisine sahip olmalısın.').setColor('RANDOM'));
  let mesaj = args.slice(0).join(' ');
  let mesajiyazan = message.author.tag
  if (mesaj.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Ne yazmam gerektiğini belirtmedin.').setColor('RED'));
  message.delete();
  const yazı = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(mesaj)
  return message.channel.sendEmbed(yazı)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'embed',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yazdır [yazdırmak istediğiniz şey]'
};
