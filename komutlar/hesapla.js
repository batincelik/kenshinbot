const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents
const db = require('quick.db')



exports.run = function async(client, message, args) {
    let prefix = db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    var soru = args.join(' ');
    
    if(!soru) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir işlem belirtin.').setColor('RED'));
    else { 
      let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send(`HATA: \n**${err ? err : "Bilinmiyor"}**`)
        }

        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('» İşlem', soru ? soru : "İşlem Bulunamadı")
        .addField('» Sonuç', cevap ? cevap : "Hesaplanamadı")
        message.channel.send(embed)
    }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["matematik"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'hesapla',
  category: "kullanıcı",
  description: 'Belirtilen işlemi yapar.',
  usage: 'r?hesapla <işlem>'
};