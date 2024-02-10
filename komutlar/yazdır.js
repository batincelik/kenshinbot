const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('ıoueq yaw').setColor('RANDOM'));
  let mesaj = args.slice(0).join(' ');
  let mesajiyazan = message.author.tag
  if (mesaj.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('YAWWW').setColor('RED'));
  message.delete();
  message.channel.send(`${mesaj}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alperkaya',
  description: 'İstediğiniz şeyi bota alperkaya.',
  usage: 'alperkaya [alperkaya istediğiniz şey]'
};
