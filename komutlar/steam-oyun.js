const Discord = require('discord.js')
var steam = require('steam-provider')
var db = require('quick.db')
var provider = new steam.SteamProvider();

exports.run = async(client, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Aramak istediğiniz oyunu belirtmelisin.').setColor('RED'));    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Oyun', steampng)
    .setTitle(result[0].name)
    .addField('Oyun ID', result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField(`Fiyatı`, `Normal Fiyat **${results.priceData.initialPrice}** TL`, true)
    .addField(`İndirimli Fiyat`, `**${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
    .setColor('RANDOM')
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: **' + game + '** adlı oyun bulunamadı.').setColor('RED'));
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['steamoyun', 'steam-oyun', 'stiimoyun'],
  permLevel: 0
};

exports.help = {
  name: 'steam-oyun',
  description: 'steamoyun',
  usage: 'steamoyun'
};