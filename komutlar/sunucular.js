const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, `Sunucu ID: ` + guild.id);
      embed.setColor('#D97634')
      embed.setTitle('*Bulunduğum Sunucular*')
    }
    message.channel.send({embed: embed});
  }
}

exports.help = {
  name: "sunucular"
};