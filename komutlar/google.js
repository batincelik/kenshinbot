const discord = require ('discord.js');
const Jimp = require(`jimp`)

exports.run = async(client, message, args) => {
        let googlearatma = args.join(" ").slice(0);
        if(!googlearatma) return message.channel.send(`Googleda aratmak için bana bir şey vermen gerekiyor!`)
        var imagetobase = `https://i.hizliresim.com/7DaA2r.png`;
   		  Jimp.read(imagetobase, function (err, hadiseks) {
                Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
                    hadiseks.print(font, 83, 168, `${googlearatma}`)
                    hadiseks.write("./img/googlearattim.png")
                    hadiseks.getBuffer(`image/jpeg`, (err, buf) => {
                        message.channel.send({files: [{attachment: buf, name: `google.jpg`}] })
                    })
                })
            })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'google',
  description: 'Botun pingini gösterir.',
  usage: 'google'
};
