const Discord = require('discord.js');
const db = require('quick.db');
let fs = require('fs');

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Mesajları Yönet** yetkisine sahip olmalısın.').setColor('RED'));
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Birini etiketlemelisin.').setColor('RED'));
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Seninle aynı rütbede olan yada senden daha yüksek rütbede olan birinin susturma cezasını açmaya çalıştın.').setColor('RED'));
    let muterole = message.guild.roles.find(`name`, "Susturulmuş");
    if (!tomute.roles.has(muterole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu kullanıcı zaten susturulmamış.').setColor('RED'));

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#FF0000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let reason = args.slice(1).join(' ');
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir sebep girmelisin.').setColor('RED'));
    await (tomute.removeRole(muterole.id));

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
    .addField('**❯ Eylem:**', 'Susturma Cezasını Kaldırma')
    .addField('**❯ Cezası Kaldırılan Kullanıcı:**', `<@${tomute.id}>`)
    .addField('**❯ Cezasını Kaldıran Yetkili:**', `<@${message.author.id}>`)
    .addField('**❯ Sebep:**', `${reason}`)
    .setFooter('Mover Bot', bot.user.avatarURL);
    welcomechannel.send(embedanan)
    } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return console.log(e)
    } 
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: <@${tomute.id}> isimli kullanıcının susturma cezası, <@${message.author.id}> isimli yetkili tarafından **${reason}** sebebiyle kaldırıldı.`).setColor('GREEN'));   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sustur-aç',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <rolismi>'
};