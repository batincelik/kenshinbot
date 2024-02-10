const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let ruskiruskisukka = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let sukkasukkaruski = message.author.tag
    let fucked = bot.emojis.find("name", "fucked");
    let patlican = bot.emojis.find("name", "pompa");
    if (!ruskiruskisukka) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Fuckedlamak için öncelikle birini etiketlemelisin.').setColor('RANDOM'));
    let embedz = new Discord.RichEmbed()
      .setAuthor(`${ruskiruskisukka.user.tag}, ${sukkasukkaruski} isimli arkadaşı tarafından fuckedlandı.`)
      .setColor("RANDOM")
      .setDescription(`\n${patlican}\n     :sweat_drops:\n        ${fucked}`)
    message.channel.send(embedz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfüret', 'küfür'],
  permLevel: 0
};

exports.help = {
  name: 'fucked',
  description: 'Etiketlediğin kişiyi sikersin',
  usage: 'söv <@Oyuncu>'
};