const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));

     else {
        if (!message.mentions.channels.first()) {
            message.channel.send("Lütfen giriş çıkış ve sayaç mesajlarının ayarlanacağı kanalı etiketleyin.");
        }

        let toSet = message.mentions.channels.first().id;
        let toSetNAME = message.mentions.channels.first().name;
        let giriscikis = JSON.parse(fs.readFileSync("./giriscikis.json", "utf8"));

        if (!toSet || !toSetNAME) {
            message.channel.send("Lütfen giriş çıkış mesajlarının ayarlanacağı kanalı etiketleyin.");
        }

        giriscikis[message.guild.id] = {
            giriscikis: toSet
        }

        fs.writeFile("./giriscikis.json", JSON.stringify(giriscikis), (err) => {
            if (err) console.log(err);
        });
        let mesajOdasi = JSON.parse(fs.readFileSync("./girisCikisMesaj.json", "utf8"));
          if(!mesajOdasi[message.guild.id]){
              mesajOdasi[message.guild.id] = {
                kanal: args[0]
              };
            }
            
            mesajOdasi[message.guild.id].kanal = args[0]
            
            fs.writeFile("./girisCikisMesaj.json", JSON.stringify(mesajOdasi), (err) => {

        let wlEmbed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("BAŞARILI!")
            .setDescription(`Artık giriş ve çıkış mesajları <#${toSet}> kanalına gönderilicek.`);

        message.channel.send(wlEmbed);
    }
)}}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['girişçıkışayarla', 'girişçıkış', 'giriş-çıkış'],
 permLevel: 0
};

exports.help = {
 name: 'giriş-çıkış-ayarla',
 description: '',
 usage: ''
};