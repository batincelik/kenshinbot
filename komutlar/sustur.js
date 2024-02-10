const Discord = require("discord.js");
const ms = require("ms");
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu komudu kullanmak için **Mesajları Yönet** yetkisine sahip olmalısın.').setColor('RED'));
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Birini etiketlemelisin.').setColor('RED'));
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Seninle aynı rütbede olan yada senden daha yüksek rütbede olan birini susturmaya çalıştın.').setColor('RED'));
    let muterole = message.guild.roles.find(`name`, "Muted");
  if (tomute.roles.has(muterole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bu kullanıcı zaten susturulmuş.').setColor('RED'));

    if (!muterole) {
        try {
            muterole = await message.guild.editRole({
                name: "Muted",
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

    let mutetime = args[1];
    if (!mutetime) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir zaman girmelisin.\ns → Saniye\nm → Dakika\nh → Saat\nd → Gün').setColor('RED'));
    let reason = args.slice(2).join(' ');
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir sebep girmelisin.').setColor('RED'));
    await (tomute.addRole(muterole.id));
    let kayitlar = JSON.parse(fs.readFileSync("./kayitlar.json", "utf8"));
    if (!kayitlar[message.guild.id]) {
      return;
    }

    try {
      let kayitlarID = kayitlar[message.guild.id].kayitlar;
      let welcomechannel = client.guilds.get(message.guild.id).channels.get(kayitlarID);
      const embedanan = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTimestamp()
    .addField('**❯ Sunucun Adı:**', message.guild.name)
    .addField('**❯ Eylem:**', 'Susturma')
    .addField('**❯ Susturulan Kullanıcı:**', `<@${tomute.id}>`)
    .addField('**❯ Susturan Yetkili:**', `<@${message.author.id}>`)
    .addField('**❯ Susturma Süresi:**', `${ms(ms(mutetime))}`)
    .addField('**❯ Sebep:**', `${reason}`)
    .setFooter('ImagineNation Bot', client.user.avatarURL);
    welcomechannel.send(embedanan)
    } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return console.log(e)
    } 
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`:white_check_mark: <@${tomute.id}> isimli kullanıcı, <@${message.author.id}> isimli yetkili tarafından **${reason}** sebebiyle **${ms(ms(mutetime))}** süreyle susturuldu.`).setColor('GREEN'));   
    //message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<@${tomute.id}>, <@${message.author.id}> tarafından ${ms(ms(mutetime))} süreyle susturuldu. Sebep: ${reason}`).setColor('#36393F'));
    setTimeout(function() {
        let kayitlar = JSON.parse(fs.readFileSync("./kayitlar.json", "utf8"));
    if (!kayitlar[message.guild.id]) {
      return;
    }
      let kayitlarID = kayitlar[message.guild.id].kayitlar;
      let welcomechannel = client.guilds.get(message.guild.id).channels.get(kayitlarID);
        tomute.removeRole(muterole.id);
        welcomechannel.sendEmbed(new Discord.RichEmbed().setDescription(`<:bilgi:518382943786237963> <@${tomute.id}> isimli kullanıcı artık konuşabilir.`).setColor('BLUE')); 
    }, ms(mutetime));

}

exports.conf = {
    aliases: ['sustur'],
    permLevel: 4
};

module.exports.help = {
    name: "sustur",
    description: 'Oyuncunun konuşmasını engeller.',
    usage: 'sustur [zaman: saat, dakika, yada gün.]'
}