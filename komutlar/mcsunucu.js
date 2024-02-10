const Discord = require('discord.js');
const request = require('request');
var mcPort = 25565

exports.run = (client, message, args) => {
      var url = 'http://mcapi.us/server/status?ip=' + args[0] + '&port=' + mcPort;
    let reason = args.slice(0).join(' ');
            if(!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Bir sunucu ip adresi girmelisin.').setColor('RED'));
        request(url, function (err, response, body) {
            if (err) {
                console.log(err);
                return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Sunucu adresi alınırken beklenmedik bir hata ile karşılaştık.').setColor('RED'));
            }
            body = JSON.parse(body);
            var status = 'Sunucu » **' + reason + '**\n\nSunucu şu anda aktif mi? » **Hayır**\n\nBu IP adresi bir sunucuya ait değil veya sunucu şu anda kapalı.';
            if (body.online) {
      status = 'Sunucu adı » **' + reason + '**\n\nSunucu şu anda aktif mi? » **Evet**\n\nSunucu versiyonu » **'+ body.server.name +'**\n\n';
                if (body.players.now) {
                    status += 'Aktif oyuncu sayısı » **' + body.players.now + '/'+ body.players.max +'**\n\nAçıklama » **' + body.motd +'**';
          } else {
            status += 'Şu anda sunucuda kimse yok.';
                }
            }
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(status).setThumbnail('https://cdn.pixabay.com/photo/2013/07/12/19/25/minecraft-154749_960_720.png').setColor('GREEN').setFooter('' + body.motd + ''));
        });
    };

module.exports.help = {
  name: 'mcsunucu'
};