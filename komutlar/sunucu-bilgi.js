const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

var konum = ''
        if(message.guild.region === "russia") {
            var konum = ':flag_ru: Rusya'
        }
        if(message.guild.region === "us-west") {
            var konum = ':flag_us: Batı Amerika'
        }
        if(message.guild.region === "us-south") {
            var konum = ':flag_us: Güney Amerika'
        }
        if(message.guild.region === "us-east") {
            var konum = ':flag_us: Doğu Amerika'
        }
        if(message.guild.region === "us-central") {
            var konum = ':flag_us: Amerika'
        }
        if(message.guild.region === "brazil") {
            var konum = ':flag_br: Brezilya'
        }
        if(message.guild.region === "singapore") {
            var konum = ':flag_sg: Singapur'
        }
        if(message.guild.region === "sydney") {
            var konum = ':flag_au: Sidney'
        }
        if(message.guild.region === "eu-west") {
            var konum = ':flag_eu: Batı Avrupa'
        }
        if(message.guild.region === "eu-south") {
            var konum = 'Güney Avrupa'
        }
        if(message.guild.region === "eu-east") {
            var konum = 'Doğu Avrupa'
        }
        if(message.guild.region === "eu-central") {
            var konum = ':flag_eu: Avrupa'
        }
        if(message.guild.region === "hongkong") {
            var konum = ':flag_hk: Hong Kong'
        }
        if(message.guild.region === "japan") {
            var konum = ':flag_jp: Japonya'
        }

var ay = ''
        if(message.guild.month === "1") {
            var ay = 'Ocak'
        }
        if(message.guild.month === "2") {
            var ay = 'Şubat'
        }
        if(message.guild.month === "3") {
            var ay = 'Mart'
        }
        if(message.guild.month === "4") {
            var ay = 'Nisan'
        }
        if(message.guild.month === "5") {
            var ay = 'Mayıs'
        }
        if(message.guild.month === "6") {
            var ay = 'Haziran'
        }
        if(message.guild.month === "7") {
            var ay = 'Temmuz'
        }
        if(message.guild.month === "8") {
            var ay = 'Ağustos'
        }
        if(message.guild.month === "September") {
            var ay = 'Eylül'
        }
        if(message.guild.month === "10") {
            var ay = 'Ekim'
        }
        if(message.guild.month === "11") {
            var ay = 'Kasım'
        }
        if(message.guild.month === "12") {
            var ay = 'Aralık'
        }
      
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let offline = message.guild.members.filter(member => member.user.presence.status == 'offline');
  let afk = message.guild.members.filter(member => member.user.presence.status == 'idle');
  let dnd = message.guild.members.filter(member => member.user.presence.status == 'dnd');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
        let sicon = message.guild.iconURL;
        let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
        let serverembed = new Discord.RichEmbed()
            .setAuthor(message.guild.name + " - Sunucu Bilgileri", sicon)
            .setColor("#7289DA")
            .setThumbnail(sicon)
            .addField("ID", message.guild.id, true)
            .addField("İsim", message.guild.name, true)
            .addField("Sahip", message.guild.owner.user.tag + " <:sunucusahibi:518775842659237899>", true)         
            .addField("Üyeler: " + message.guild.memberCount, "<:cevrimici:518421963094622213> Çevrimiçi: " + online.size + "\n<:rahatsizetmeyin:518421962947690497> Rahatsız Etmeyin: " + dnd.size + "\n<:bosta:518421962784243714> Boşta: " + afk.size + "\n<:cevrimdisi:518421963514052638> Çevrimdışı/Görünmez: " + offline.size + "\n<:bot:518421334108405773> Bot: " + message.guild.members.filter(m => m.user.bot).size ,true)
            .addField("Kanallar", message.guild.channels.size, true)
            /*.addField("İnsanlar", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
            .addField("Botlar", message.guild.members.filter(m => m.user.bot).size, true)
            .addField("Çevrimiçi", online.size, true)
            .addField("Çevrimdışı", offline.size, true)
            .addField("AFK", afk.size, true)
            .addField("Rahatsız Etmeyin", dnd.size, true)*/
            .addField('Roller','**' + prefix + 'roller** yazarak ulaşabilirsiniz.', true)
            .addField("Oluşturulma tarihi", `${day}.${month}.${year}`, true);
        message.channel.send(serverembed);
};

module.exports.help = {
  name: 'sunucu-bilgi'
};