const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = async function(bot, message, args) {
  let {body} = await superagent
  .get(`http://random.cat/view/18`);

  let köpek = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Çok Tatlı :heart_eyes:")
  .setImage(body.kedi)
  return message.channel.sendEmbed(köpek)

};

exports.help = {
  name: 'kedi'
};
