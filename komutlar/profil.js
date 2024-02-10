const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  const yardım = new Discord.RichEmbed()
  .setColor("#FF8C00")
  .setAuthor(`Kenshin | Profil Komutları`, client.user.avatarURL)
  .setFooter(message.author.tag + ' tarafından istendi', message.author.displayAvatarURL)
  .addField("» Komutlar" , ":white_small_square: | **" + prefix + "kimlik**: Kimliğinizi gösterir.\n:white_small_square: | **" + prefix + "isim**: Kimliğinize isminizi ekler.\n:white_small_square: | **" + prefix + "cinsiyet**: Kimliğinize cinsiyet ekler.\n:white_small_square: | **" + prefix + "yaş**: Kimliğinize yaş ekler.\n:white_small_square: | **" + prefix + "biyografi**: Kimliğinize biyografi ekler.\n:white_small_square: | **" + prefix + "instagram**: Kimliğinize instagram adresinizi ekler.")
  .addField("» Linkler", `**[:robot: Davet](https://discordapp.com/oauth2/authorize?client_id=509009322034855948&scope=bot&permissions=2146958847)` + " | " + `[:wrench: Destek](https://discord.gg/TCcXtbx)` + " | " + `[:earth_africa: Website](http://fenixbot.ml/)` + " | " + `[:thumbsup: Oyla]()**`, false)
  .setTimestamp()
  return message.channel.sendEmbed(yardım)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: 'Sunucunuzu yönetmek için komutlar.',
  usage: 'profil'
};
