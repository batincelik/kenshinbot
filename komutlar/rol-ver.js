const Discord = require('discord.js');
const db = require('quick.db');
let fs = require('fs');

exports.run = async (bot, message, args) => {
    let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor('RED'));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Birini etiketlemelisin.').setColor('RED'));
    let role = message.mentions.roles.first()
    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Vermek istediğin rolü etiketlemelisin.').setColor('RED'));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Böyle bir rol bulunamadı.').setColor('RED'));

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Kullanıcı zaten bu role sahip.').setColor('RED'));
      
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
    .addField('**❯ Eylem:**', 'Rol Verme')
    .addField('**❯ Verilen Kullanıcı:**', `${rMember}`)
    .addField('**❯ Veren Yetkili:**', `<@${message.author.id}>`)
    .addField('**❯ Verilen Rol:**', `${aRole}`)
    .setFooter('Steel Bot', bot.user.avatarURL);
    welcomechannel.send(embedanan)
    } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return console.log(e)
    }
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: ${rMember} isimli kullanıcıya, <@${message.author.id}> isimli yetkili tarafından ${aRole} isimli rol verildi!`).setColor('GREEN'));
    //message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! :white_check_mark:`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <rolismi>'
};