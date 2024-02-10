const Discord = require("discord.js");
const db = require('quick.db');
const fs = require('fs')

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  let girisMesaj = await db.fetch(`girisMesaj_${message.guild.id}`) || `${prefix}giriş [giriş mesajınız]`;
  let cikisMesaj = await db.fetch(`cikisMesaj_${message.guild.id}`) || `${prefix}çıkış [çıkış mesajınız]`;
  let dmMesaji = await db.fetch(`dmMesaji_${message.guild.id}`) || `${prefix}dm-ayarla [dm mesajınız]`;
  let OtoRol = await db.fetch(`OtoRol_${message.guild.id}`) || `${prefix}oto-rol-ayarla [@rol]`;
    if (db.has(`küfürE_${message.guild.id}`) === false)
      var kufurengeli = '**Kapalı**'
    if (db.has(`küfürE_${message.guild.id}`) === true)
      var kufurengeli = '**Açık**'
    if (db.has(`reklamE_${message.guild.id}`) === false)
      var reklamEngeli = '**Kapalı**'
    if (db.has(`reklamE_${message.guild.id}`) === true)
      var reklamEngeli = '**Açık**'
  let OtoRolJson = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
    let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
    sayac;

  if (sayac[message.guild.id]) {
    sayac[message.guild.id] = `${sayac[message.guild.id].sayi}`
  } else {
    sayac[message.guild.id] = `${prefix}sayaç-ayarla [hedef kullanıcı]`

  }
    let giriscikis = JSON.parse(fs.readFileSync("./girisCikisMesaj.json", "utf8"));
    giriscikis;

  if (giriscikis[message.guild.id]) {
    giriscikis = `${giriscikis[message.guild.id].kanal}`
  } else {
    giriscikis = `${prefix}giriş-çıkış-ayarla [giriş-çıkış kanalınız]`

  }
  let kayitlar = JSON.parse(fs.readFileSync("./kayitlarMesaj.json", "utf8"));
    kayitlar;

  if (kayitlar[message.guild.id]) {
    kayitlar = `${kayitlar[message.guild.id].kanal}`
  } else {
    kayitlar = `${prefix}log-ayarla [log kanalınız]`

  }
  let sayacodasi = JSON.parse(fs.readFileSync("./sayacodasiMesaj.json", "utf8"));
    sayacodasi;

  if (sayacodasi[message.guild.id]) {
    sayacodasi = `${sayacodasi[message.guild.id].kanal}`
  } else {
    sayacodasi = `${prefix}sayaç-odası-ayarla [sayaç kanalınız]`

  }
      const sEmbed = new Discord.RichEmbed()
      .setColor("#FF9900")
      .setTitle(`${message.guild.name} Sunucusunun Kenshin Ayarları`)
      .addField(`Prefix`, `${prefix}`, true)
      .addField(`Sayaç`, `${sayac[message.guild.id]}`, true)
      .addField(`Giriş Çıkış Mesajlarının Gideceği Kanal`, `${giriscikis}`, true)
      .addField(`Log Kanalı`, `${kayitlar}`, true)
      .addField(`Sayaç Kanalı`, `${sayacodasi}`, true)
      .addField(`Giriş Mesajı`, `${girisMesaj}`, true)
      .addField(`Çıkış Mesajı`, `${cikisMesaj}`, true)
      .addField(`Yeni Gelenlere Gönderilecek DM Mesajı`, `${dmMesaji}`, true)
      .addField(`Oto Rol`, `${OtoRol}`, true)
      .addField(`Reklam Engeli`, `${reklamEngeli} ${prefix}reklam-engeli`, true)
      .addField(`Küfür Engeli`, `${kufurengeli} ${prefix}küfür-engeli`, true)
      .setFooter(message.author.tag + ' tarafından istendi', message.author.displayAvatarURL)
      .setTimestamp()
      message.channel.send(sEmbed);
};

exports.help = {
  name: 'ayarlar'
};