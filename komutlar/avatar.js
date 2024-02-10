const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor('RANDOM')
  .setImage(mention.avatarURL)
  .addField('Kenshin | Avatar Sistemi', `[Avatarın büyük halini göster!](${mention.avatarURL})`, false);
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor('RANDOM')
  .setImage(message.author.avatarURL)
  .addField('Kenshin | Avatar Sistemi', `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  console.log("!avatar komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
  message.channel.send(avatarEmbedYou);
  return;
}
message.channel.send("An error occured!");
};

module.exports.help = {
  name: "avatar"
}