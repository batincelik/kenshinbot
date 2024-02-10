const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  if(message.author.id !== '1179122683305267241') return message.channel.send("Bu komutu sadece bot sahibi kullanabilir.");
  const sie = [":x:| Bu komutu sadece **Bot Sahibi** kullanabilir!"]
    const tmm = [":white_check_mark: | Yeniden başlıyorum."]
    let ananinsonucu = Math.floor(Math.random() * sie.length);
    let babaminsonucu = Math.floor(Math.random() * tmm.length);
    if (message.author.id !== "1179122683305267241") {
      message.channel.send(sie[ananinsonucu]);
    } else {
      message.channel.send(tmm[babaminsonucu]).then(msg => {
      console.log(`Yeniden basliyom`);
      process.exit(0);
    })
   }
  }

exports.help = {
  name: 'yenile'
};