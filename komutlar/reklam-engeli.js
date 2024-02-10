const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
  const db = require('quick.db');

exports.run = async (client, message) => {
  	const suankiayar = db.fetch(`reklamE_${message.guild.id}` || 'Ayarlı değil.')
	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komutu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor('RED'));
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');
	if(secenekler.length < 1) {
		if (db.has(`reklamE_${message.guild.id}`) === false) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Lütfen `aç` yada `kapat` olarak bir değer giriniz.\nŞu an reklam engel durumu: **' + 'Kapalı.**').setColor('RED'));
	if (db.has(`reklamE_${message.guild.id}`) === true) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: | Lütfen `aç` yada `kapat` olarak bir değer giriniz.\nŞu an reklam engel durumu: **' + suankiayar + '**').setColor('RED'));
  	}
  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply("`aç` veya `kapat` yazınız!")  
	if (secenekler === "aç" || secenekler === "on") {    
    var i = db.set(`reklamE_${message.guild.id}`, "Açık.")  
		message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: | Reklam engeli başarıyla **aktif edildi.**').setColor('GREEN'));
	};

	if (secenekler === "kapat" || secenekler === "off") {    
    db.delete(`reklamE_${message.guild.id}`)    
		message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: | Reklam engeli başarıyla **deaktif edildi.**').setColor('GREEN'));
  }
  };

module.exports.help = {
	name: 'reklam-engeli'
};