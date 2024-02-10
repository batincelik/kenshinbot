const Discord = require('discord.js')
const request = require('node-superfetch')
const moment = require('moment')
const ayarlar = require('../ayarlar.json')
const { GOOGLE_KEY } = process.env

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Lütfen geçerli bir kitap ismi belirtin.').setColor('RED'));

  const kitap = args.join(" ")

  try {
    const { body } = await request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({
        apiKey: GOOGLE_KEY,
        q: kitap,
        maxResults: 1,
        printType: 'books'
      });

    if(!body.items) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Lütfen geçerli bir kitap ismi belirtin.').setColor('RED'));
  
    const data = body.items[0].volumeInfo;

    const embed = new Discord.RichEmbed()
      .setAuthor(`${data.title} | Kitap Bilgileri`, "https://i.imgur.com/N3oHABo.png", `https://books.google.com.tr/`)
      .addField(`Yazarlar`, data.authors || 'Bilinmiyor')
      if(!data.publishedDate) {
        embed.addField(`Yayın Tarihi`, `Bilinmiyor`)
      } else {
        embed.addField(`Yayın Tarihi`, `${moment(data.publishedDate).format('DD/MM/YYYY')}`)
      }
      embed.addField(`Sayfa Sayısı`, data.pageCount || 'Bilinmiyor')
      if(data.imageLinks) {
        embed.setThumbnail(`${data.imageLinks ? data.imageLinks.thumbnail : null}`)
      }
      embed.setColor(ayarlar.renk)
      .setTimestamp()
    message.channel.send({embed})
  } catch (err) {
    console.log(err)
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kitap', 'kitap-ara'],
  permLevel: 0,
  kategori: 'kullanıcı'
}

exports.help = {
  name: 'kitap-ara',
  description: 'Yazılan kitabın bilgisini gösterir.',
  usage: 'kitapara [kitap ismi]'
}