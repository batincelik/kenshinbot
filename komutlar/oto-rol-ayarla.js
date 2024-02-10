const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");

exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    if (!message.member.hasPermission('MANAGE_ROLES') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x:| Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor("RED"));
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  if (!args[0]) { // jika tidak ada argument makan autorole akan dimatikan
    autorole[message.guild.id] = {
      role: ':no_entry: **Ayarlı Değil!**'
    };
    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
      if (err) console.log(err);
    });
    message.channel.send(new Discord.RichEmbed().setDescription(`Doğru kullanım: ${prefix}oto-rol-ayarla [Yetki]`).setColor("RED"));
  }
  if(args[0]) {
    let roles = message.mentions.roles.first();
    if(!roles) return message.channel.send(new Discord.RichEmbed().setDescription(`Doğru kullanım: ${prefix}oto-rol-ayarla [Yetki]`).setColor("RED"));
    let role = message.guild.roles.find("name", roles);
    autorole[message.guild.id] = {
      role: roles.id // yang diambil hanya id nya saja
    };
    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
      if (err) console.log(err)
    });
    db.set(`OtoRol_${message.guild.id}`, args[0])
    message.channel.send(new Discord.RichEmbed().setDescription(`**${roles.name}** isimli rol artık sunucuya giren herkese otomatik olarak verilecek.`).setColor("RED"));
  }
};

exports.help = {
  name: "oto-rol-ayarla"
}