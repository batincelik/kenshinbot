const Discord = require('discord.js');
let fs = require('fs');

module.exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Üyeleri At** yetkisine sahip olmalısın.').setColor('RED'));
   let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!user) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Birini etiketlemelisin.').setColor('RED'));
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Seninle aynı rütbede olan yada senden daha yüksek rütbede olan birini atmaya çalıştın.').setColor('RED'));
     let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Sebep girmelisin.').setColor('RED'));

  user.kick(reason);

  let kayitlar = JSON.parse(fs.readFileSync("./kayitlar.json", "utf8"));
    if (!kayitlar[message.guild.id]) {
      return;
    }

    try {
      let kayitlarID = kayitlar[message.guild.id].kayitlar;
      let welcomechannel = bot.guilds.get(message.guild.id).channels.get(kayitlarID);
      const embedanan = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTimestamp()
    .addField('**❯ Sunucun Adı:**', message.guild.name)
    .addField('**❯ Eylem:**', 'Sunucudan Atma')
    .addField('**❯ Atılan Kullanıcı:**', `${user}`)
    .addField('**❯ Atan Yetkili:**', `<@${message.author.id}>`)
    .addField('**❯ Sebep:**', `${reason}`)
    .setFooter('Kenshin', bot.user.avatarURL);
    welcomechannel.send(embedanan)
    } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return console.log(e)
    }
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: **<@${user.id}>** isimli kullanıcı, **<@${message.author.id}>** isimli yetkili tarafından **${reason}** sebebiyle sunucudan atıldı!`).setColor('GREEN'));
};

exports.help = {
  name: 'at'
};