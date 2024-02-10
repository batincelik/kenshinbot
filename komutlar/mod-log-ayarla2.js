const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
    let kanal = message.mentions.channels.first();
    if(!message.mentions.channels.first()) {
        return message.reply(`\`${prefix}yardım ${exports.help.name}\` yazarak doğru kullanıma bakabilirsin!`)
    }
    db.set(`modkayitlar_${message.guild.id}`, kanal.id)
    db.set(`modkayitlar2_${message.guild.id}`, args[0])
    const embed = new Discord.RichEmbed()
    .setDescription(`Moderatör kayıtlarının gönderileceği kanal ${kanal} olarak ayarlanmıştır.`)
    .setColor(client.ayarlar.renk)
    message.channel.send({embed: embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  kategori: 'yetkili'
};

exports.help = {
  name: 'mod-log-ayarla2',
  description: 'Ayarladığınız moderatör kayıtlar kanalına ban, kick gibi mesajları gönderir.',
  usage: 'moderatör-kayıt-kanal [mod-kayıt kanalınız]'
};