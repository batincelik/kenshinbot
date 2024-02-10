const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));

     else {
        if (!message.mentions.channels.first()) {
            message.channel.send("Lütfen kayıtların gideceği kanalı etiketleyin.");
        }

        let toSet = message.mentions.channels.first().id;
        let toSetNAME = message.mentions.channels.first().name;
        let kayitlar = JSON.parse(fs.readFileSync("./kayitlar.json", "utf8"));

        if (!toSet || !toSetNAME) {
            message.channel.send("Lütfen kayıtların gideceği kanalı etiketleyin.");
        }

        kayitlar[message.guild.id] = {
            kayitlar: toSet
        }

        fs.writeFile("./kayitlar.json", JSON.stringify(kayitlar), (err) => {
            if (err) console.log(err);
        });
       let anan = JSON.parse(fs.readFileSync("./kayitlarMesaj.json", "utf8"));
          if(!anan[message.guild.id]){
              anan[message.guild.id] = {
                kanal: args[0]
              };
            }
            
            anan[message.guild.id].kanal = args[0]
            
            fs.writeFile("./kayitlarMesaj.json", JSON.stringify(anan), (err) => {

        let wlEmbed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("BAŞARILI!")
            .setDescription(`Artık kayıtlar <#${toSet}> kanalına gönderilicek.`);

        message.channel.send(wlEmbed);
    }
)}};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['girişçıkışayarla', 'girişçıkış', 'giriş-çıkış'],
 permLevel: 0
};

exports.help = {
 name: 'log-ayarla',
 description: '',
 usage: ''
};