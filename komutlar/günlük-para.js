const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async (client, message, args) => {

    let cooldown = 8.64e+7,
    amount = 250

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 5)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`Başarısız`)
        .setColor('RED')
        .setDescription(`Günlük paranı bugün almışsın zaten? Bir dahakine almak için **24** saat beklemen gerekmektedir.`)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Başarılı')
          .setDescription(`Başarıyla günlük paranı aldın! Eline geçen para: **${amount} TL**`)
          .setColor('GREEN')
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}

};

module.exports.help = {
  name: 'günlük-para'
};
