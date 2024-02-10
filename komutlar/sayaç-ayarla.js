const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
	let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));
		if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor('RANDOM')
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.members.size) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen sunucu sayısından [${message.guild.members.size}] daha yüksek bir değer girin!`)
			.setColor('RANDOM')
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0]
		};
	}
	
	profil[message.guild.id].sayi = args[0]
	
	fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Sayaç başarıyla ${args[0]} olarak ayarlandı!`)
		.setColor('RANDOM')
		.setTimestamp()
	message.channel.send({embed})
}

exports.help = {
	name: 'sayaç-ayarla'
}