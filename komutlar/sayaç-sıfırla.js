const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
let profil = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor(ayarlar.renk)
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id].sayi
		delete profil[message.guild.id]
		fs.writeFile("./sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor('RANDOM')
			.setTimestamp()
		message.channel.send({embed})
		return
	};

exports.help = {
	name: 'sayaç-sıfırla'
}