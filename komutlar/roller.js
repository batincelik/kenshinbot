const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
    .addField("Toplam Rol",` ${message.guild.roles.size} Rol`)
   	.addField(`Roller`, `${message.guild.roles.array()}`)
   .setTimestamp()
   message.channel.send({embed});
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roller',
   description: 'Sunucudaki rolleri söyler.',
   usage: 'roller'
 };