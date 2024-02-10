const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
   const snekfetch = require('snekfetch');
    if (!args.slice(0).join(' ')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Hastebine ney yüklemem gerektiğini yazmalısın.').setColor('RED'));
        
    snekfetch.post('https://hastebin.com/documents')
        .send(args.slice(0)
            .join(' '))
        .then(body => {
      //message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':white_check_mark: Yazıyı hastebine yükledim.\nhttps://hastebin.com/" + body.body.key').setColor('GREEN'));
            message.channel.send({embed: { description: ":white_check_mark: Yazıyı hastebine yükledim.\nLink: https://hastebin.com/" + body.body.key, color: 0x1D82B6}});
        });

}
module.exports.help = {
  name: "hastebin",
 usage: "hastebin",
 description: "hastebin komutu"
}