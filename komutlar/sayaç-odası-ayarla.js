const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '1179122683305267241') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor("RED"));

     else {
        if (!message.mentions.channels.first()) {
            message.channel.send("Lütfen sayaçların gideceği kanalı etiketleyin.");
        }

        let toSet = message.mentions.channels.first().id;
        let toSetNAME = message.mentions.channels.first().name;
        let sayacodasi = JSON.parse(fs.readFileSync("./sayacodasi.json", "utf8"));

        if (!toSet || !toSetNAME) {
            message.channel.send("Lütfen sayaçların gideceği kanalı etiketleyin.");
        }

        sayacodasi[message.guild.id] = {
            sayacodasi: toSet
        }

        fs.writeFile("./sayacodasi.json", JSON.stringify(sayacodasi), (err) => {
            if (err) console.log(err);
        });
       let anan = JSON.parse(fs.readFileSync("./sayacodasiMesaj.json", "utf8"));
          if(!anan[message.guild.id]){
              anan[message.guild.id] = {
                kanal: args[0]
              };
            }
            
            anan[message.guild.id].kanal = args[0]
            
            fs.writeFile("./sayacodasiMesaj.json", JSON.stringify(anan), (err) => {

        let wlEmbed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("BAŞARILI!")
            .setDescription(`Artık sayaçlar <#${toSet}> kanalına gönderilicek.`);

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
 name: 'sayaç-odası-ayarla',
 description: '',
 usage: ''
};