const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let mesaj = args.slice(0).join(' ');
      let isEnabled;
      if (!mesaj) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Destek sebebini söylemelisin.').setColor('RED').setFooter("Kenshin | Canlı Destek Sistemi"));
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: Destek talebiniz oluşturulmuştur. Birazdan yetkili ekibimiz sizinle ilgilenecektir.').setColor('GREEN').setFooter("Kenshin | Canlı Destek Sistemi"));      
      let chan = message.channel;
      let destekKanal = "533332530112495631";
      const embed = new Discord.RichEmbed()
        .setAuthor("Yeni Bir Destek Talebi Var!")
        .setColor("RANDOM")
        .addField("» Destek Talebi", mesaj)
        .addField("» Kullanıcı Hakkında", "• Gönderen Kullanıcı: " + message.author.tag + "\n• Gönderen Kullanıcının ID: " + message.author.id)
        .addField("» Sunucu Hakkında", "• Gönderilen Sunucu: " + message.guild.name + "\n• Gönderilen Sunucunun ID: " + message.guild.id + "\n• Gönderilen Kanal: " + message.channel.name + "\n")
        .setFooter("Kenshin | Canlı Destek Sistemi")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).sendEmbed(new Discord.RichEmbed().setDescription(':information_source: Destek çagrısı bağlanmak için `katıl` yazınız. İptal Etmek İçin `kapat` yazınız.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi"));
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Destek talebi zaman aşımına uğradı').setColor('RED').setFooter("Kenshin | Canlı Destek Sistemi"));
      if (reason === 'aborted') {
        message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Destek talebi reddedildi.').setColor('RED'));
        client.channels.get(destekKanal).sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: Destek talebi başarıyla reddedildi.').setColor('GREEN').setFooter("Kenshin | Canlı Destek Sistemi"));
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).sendEmbed(new Discord.RichEmbed().setDescription(':information_source: Destek talebini alındı. Destek talebini kapatmak için `kapat` yazınız.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi").setFooter("Kenshin | Canlı Destek Sistemi"));
        chan.send(`${message.author}`)
        chan.sendEmbed(new Discord.RichEmbed().setDescription(':information_source: Destek talebiniz yetkili ekibimiz tarafından alındı. Destek talebini kapatmak için `kapat` yazınız.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi"));
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<:bilgi:533332530112495631 > Çağrı kapatıldı.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi"));
              if (message.channel.id === chan.id) client.channels.get(destekKanal).sendEmbed(new Discord.RichEmbed().setDescription(':information_source: Destek talebini karşı taraftan kapatıldı.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi"));
              if (message.channel.id === destekKanal) chan.sendEmbed(new Discord.RichEmbed().setDescription(':information_source: Destek talebini karşı taraftan kapatıldı.').setColor('BLUE').setFooter("Kenshin | Canlı Destek Sistemi"));

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).sendEmbed(new Discord.RichEmbed().setDescription(':loud_sound: **(Kullanıcı) ' + `${message.author.tag}` + '**: ' + `${message.content}`).setColor('PURPLE').setFooter("Kenshin | Canlı Destek Sistemi"));
            if (message.channel.id === destekKanal) chan.sendEmbed(new Discord.RichEmbed().setDescription(':loud_sound: **(Destek Ekibi) ' + `${message.author.tag}` + '**: ' + `${message.content}`).setColor('PURPLE').setFooter("Kenshin | Canlı Destek Sistemi"));
          }
          contact(client)
        })
      }
    })
}

exports.help = {
  name: 'canlı-destek',
};
