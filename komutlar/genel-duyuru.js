const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if(message.author.id !== '1179122683305267241') return message.channel.send("Bu komutu sadece bot sahibi kullanabilir.");
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hey Sen Napıyorsun', 'Ben Sunucu Botuyum Lütfen Beni Sunucunda Dene.')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1){
  const kacmesaj = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Kenshin`, client.user.avatarURL)
    .setFooter(message.author.tag + ' tarafından istendi', message.author.displayAvatarURL)
    .addField(`Doğru Kullanım: **` + ayarlar.prefix + `duyuru <mesaj>**`, `İstediğiniz şeyi bota duyurtur.`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(kacmesaj);
}

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`Kenshin`, client.user.avatarURL)
      .setDescription('' + mesaj + '')
      .setTimestamp()
      .setFooter(message.author.tag + ' tarafından duyuruldu', message.author.displayAvatarURL)

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

const tamamlandi = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Kenshin`, client.user.avatarURL)
    .setFooter(message.author.tag + ' tarafından duyuruldu', message.author.displayAvatarURL)
    .addField(`**Duyuru Gerçekleşti!**`, `Mesaj başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`)
    .setColor("RANDOM")
return message.channel.sendEmbed(tamamlandi)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'genel-duyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru <mesaj>'
};
