const Discord = require('discord.js');

exports.run = (client, message, args) => {
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
	  .addField('❯ Bot Davet', '[Tıkla](https://discord.com/oauth2/authorize?client_id=967097062124560404&scope=bot&permissions=8)')
    .addField('❯ Destek Sunucusu', '[Tıkla](https://discord.gg/nxUTAmF6Mh)')
    message.channel.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Davet linkimizi verir.',
  usage: 'davet'
};
