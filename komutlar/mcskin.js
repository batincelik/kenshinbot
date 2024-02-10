  const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription('Özel mesajlarda komut kullanımı kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir minecraft kullanıcı ismi yazmalısın.').setColor('RED'));
  const mesaj2 = new Discord.RichEmbed()
    .setColor('RANDOM')
  .setTitle(`${mesaj} isimli oyuncunun skini`)
  .setImage(`http://minotar.net/body/${mesaj}/300.png`)
  message.channel.sendEmbed(mesaj2);
};

module.exports.help = {
  name: 'mcskin'
};

