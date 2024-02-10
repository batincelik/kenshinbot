const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = async function(bot, message, args) {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let köpek = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Çok Tatlı :heart_eyes:")
  .setImage(body.url)
  return message.channel.sendEmbed(köpek)

};

exports.help = {
  name: 'köpek'
};
