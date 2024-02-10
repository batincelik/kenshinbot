const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

module.exports.run = (client, message, args) => {
  if(!message.author.id == '1179122683305267241') return message.channel.send('Bu komut bakımdadır!')
	if(!args[0]) {
  	if (db.has(`sunucuDili_${message.guild.id}`) === false)
  		var yazi = `Lütfen \`İngilizce\` yada \`Türkçe\` olarak bir değer giriniz.`
  	if (db.has(`sunucuDili_${message.guild.id}`) === true)
  		var yazi = `Please select a value with named \`English\` or \`Turkish\``
	message.channel.send(`${yazi}`)
  }
  if (args[0] !== "English" && args[0] !== "İngilizce" && args[0] !== "Türkçe" && args[0] !== "Turkish") {
  if (db.has(`sunucuDili_${message.guild.id}`) === false)
  		var yazi = `Lütfen \`İngilizce\` yada \`Türkçe\` olarak bir değer giriniz.`
  	if (db.has(`sunucuDili_${message.guild.id}`) === true)
  		var yazi = `Please select a value with named \`English\` or \`Turkish\``
	message.channel.send(`${yazi}`)
  }
		if(args[0] === 'English' || args[0] === 'İngilizce') {
			message.channel.send('This guild language is succesfully changed to \`English\` :white_check_mark:')
			db.set(`sunucuDili_${message.guild.id}`, 'ingilizce')
		}
		if(args[0] === 'Turkish' || args[0] === 'Türkçe') {
			message.channel.send('Sunucu dili başarıyla \`Türkçe\`\'ye çevirilmiştir. :white_check_mark:')
			db.delete(`sunucuDili_${message.guild.id}`)
		}
	};

module.exports.help = {
  name: 'dil-değiştir'
};