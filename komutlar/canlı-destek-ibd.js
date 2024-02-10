const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!client.guilds.get('id', '1179122683305267241')){
  const yanlissunucu = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('Bu komut yanlızca [Kenshin destek sunucusu](https://discord.gg/JfwQuN)nda kullanılır.')
  return message.channel.sendEmbed(yanlissunucu);}
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    message.guild.createChannel(`talep-${message.author.id}`, 'text').then(ch => {
        message.guild.roles.forEach((role) => {
            if (!role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: false,
                }).catch()
            if (role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        }})

        const embed = new Discord.RichEmbed()
        .setAuthor("» Kenshin | Canlı Destek")
        .setDescription(`**Merhaba ! Müsait bir yetkilimiz sizinle ilgilenecektir.\nEğer ilgilenen olmazsa birisiyle özel mesaja geçebilirsiniz. Ayrıca __${prefix}kapat__ yazabilirsiniz!**`)
        .setFooter('» Kenshin | Canlı Destek', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.awaitMessages((msg)=> {
            if (msg.content === `${prefix}kapat`) {
                  ch.send("`Canlı destek iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

module.exports.help = {
  name: 'canlı-destekjkwqheudhwqdıjhqwuıdwqıuyhsuıwqhs',
};
