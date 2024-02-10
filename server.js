
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Bot şuan da aktif! Port: ' + listener.address().port);
});

const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const superagent = require("superagent");
const chalk = require('chalk');
const fs = require('fs');
const weather = require('weather-js');
const snekfetch = require('snekfetch');
const ffmpeg = require('ffmpeg');
const hastebin = require('hastebin-gen');
const moment = require('moment');
const jsonfile = require('jsonfile');
const db = require('quick.db');
const bot = new Discord.Client({disableEveryone: true});
const Jimp = require('jimp');
const bodyParser = require('body-parser'),
      morgan = require('morgan'),
      dblIP = '178.62.19.159', //dont change this
      authorizationKey = '',
      { RichEmbed } = require('discord.js'),
      { WebhookClient } = require('discord.js'),
      webhookID = '518458085241782292',
      webhookToken = 'GOafs3yvhFqbucmQpWf2Ag6_qNDjImliHAg59HXfxiEUav6yIXnnIlKXUFc3aAuhKK_n',
      hook = new WebhookClient(webhookID, webhookToken);
let xp = require("./xp.json");
let coins = require("./coins.json");
let bakiye = require("./bakiye.json");
bot.commands = new Discord.Collection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

var lastUserUpvote;
var lastUserNone;

app.post('/vote', (req, ress) => {
    var authorization = req.headers.authorization;
    console.log(authorization)
    console.log(authorizationKey)
    var bot = req.body.bot;
    var user = req.body.user;
    var type = req.body.type;

    if (req.ip ==! dblIP || authorization != authorizationKey) {
        res.setHeader('Content-Type', 'text/plain'); 
        res.statusCode = 403; 
        return res.end('ITS_NOT_DBL')
    }

    if (bot == undefined || user == undefined || type == undefined) {
        res.setHeader('Content-Type', 'text/plain'); 
        res.statusCode = 403;
        return res.end('MISSING_PARAMS'); 
    };

    if (type === 'upvote' && lastUserUpvote !== user) {
        lastUserUpvote = user;
        var embed = new RichEmbed({
            color: 3447003,
            title: `Yeni bir oy alındı!`,
            description: `<@${user}> bota DBL üzerinde bir oy verdi!`,
            timestamp: new Date()
        });
        
        hook.send({ embeds: [embed] });

        res.statusCode = 200; 
        return res.end('OK');

    } else if (type === 'none' && lastUserNone !== user) {
        lastUserNone = user;
        var embed = new RichEmbed({
            color: 3447003,
            title: `Birisi verdiği oyu geri aldı!`,
            description: `<@${user}> bota DBL üzerinde verdiği oyu geri aldı!`,
            timestamp: new Date()
        });
        
        hook.send({ embeds: [embed] });

        res.statusCode = 200; 
        return res.end('OK');
    }

})

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Hiçbir komut bulunamadı!");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} yüklendi!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("message", async message => {
    let prefix = await db.fetch(`guildPrefix_${message.guild.id}` || '!')
    let karaliste = await db.fetch(`karalist_${message.author.id}`)
    if(karaliste) {
      if(message.content.startsWith == prefix) return message.channel.send('Sen karalistedesin kardeşim.')
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    if (message.channel.type === "dm") return;

    if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;
  if (message.content.toLowerCase() === prefix + 'kimlik') {
    let oyuncu = JSON.parse(fs.readFileSync("./isimler.json", "utf8"));
    oyuncu;

  if (oyuncu[message.author.id]) {
    oyuncu[message.author.id] = `${oyuncu[message.author.id].isim}`
  } else {
    oyuncu[message.author.id] = `**${prefix}isim (ismin)**`

  }
    let oyuncu2 = JSON.parse(fs.readFileSync("./biyografiler.json", "utf8"));
    oyuncu2;

  if (oyuncu2[message.author.id]) {
    oyuncu2[message.author.id] = `${oyuncu2[message.author.id].biyografi}`
  } else {
    oyuncu2[message.author.id] = `**${prefix}biyografi (biyografin)**`

  }
    let oyuncu3 = JSON.parse(fs.readFileSync("./yaslar.json", "utf8"));
    oyuncu3;

  if (oyuncu3[message.author.id]) {
    oyuncu3[message.author.id] = `${oyuncu3[message.author.id].yas}`
  } else {
    oyuncu3[message.author.id] = `**${prefix}yaş (yaşın)**`

  }
  let oyuncu4 = JSON.parse(fs.readFileSync("./cinsiyetler.json", "utf8"));
    oyuncu4;

  if (oyuncu4[message.author.id]) {
    oyuncu4[message.author.id] = `${oyuncu4[message.author.id].cinsiyet}`
  } else {
    oyuncu4[message.author.id] = `**${prefix}cinsiyet (Kız/Erkek/Kadın)**`

  }
  let oyuncu5 = JSON.parse(fs.readFileSync("./instalar.json", "utf8"));
    oyuncu5;

  if (oyuncu5[message.author.id]) {
    oyuncu5[message.author.id] = `${oyuncu5[message.author.id].instagram}`
  } else {
    oyuncu5[message.author.id] = `**${prefix}instagram (instagram adresin)**`

  }
let oyuncu6 = JSON.parse(fs.readFileSync("./lisanslar.json", "utf8"));
    oyuncu6;

  if (oyuncu6[message.author.id]) {
    oyuncu6[message.author.id] = `${oyuncu6[message.author.id].lisans}`
  } else {
    oyuncu6[message.author.id] = `**Lisans bulunamadı!**`

  }
const level = new Discord.RichEmbed().setTitle(`${user.username} isimli kullanıcının kimliği`, user.avatarURL).addField(`İsim`, `${oyuncu[message.author.id]}`).addField(`Cinsiyet`, `${oyuncu4[message.author.id]}`).addField(`Yaş`, `${oyuncu3[message.author.id]}`).addField(`Biyografi`, `${oyuncu2[message.author.id]}`).addField(`Instagram`, `${oyuncu5[message.author.id]}`).addField(`Lisans`, `${oyuncu6[message.author.id]}`).setColor("RANDOM").setFooter(``).setThumbnail(user.avatarURL)
message.channel.send(level)
  }
});

bot.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            message.channel.send(`:loudspeaker: Tebrikler ${message.guild.name}! Başarıyla \`${sayac[message.guild.id].sayi}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
});

bot.on("guildMemberRemove", async member => {
  let sayacodasi = JSON.parse(fs.readFileSync("./sayacodasi.json", "utf8"));
  let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));

  if (!sayacodasi[member.guild.id]) {
                  return;
                }

                try {
                  let giriscikiskanalID = sayacodasi[member.guild.id].sayacodasi;
                  let welcomechannel = bot.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
                  welcomechannel.send(`:loudspeaker: :outbox_tray: Kullanıcı Ayrıldı! \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.members.size}\` Kişi Kaldı! \`${member.guild.members.size}\` Kişiyiz! \`${member.user.tag}\``);
                } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
                  return console.log(e)
                }
              });

bot.on("guildMemberAdd", async member => {
  let sayacodasi = JSON.parse(fs.readFileSync("./sayacodasi.json", "utf8"));
  let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));

  if (!sayacodasi[member.guild.id]) {
                  return;
                }

                try {
                  let giriscikiskanalID = sayacodasi[member.guild.id].sayacodasi;
                  let welcomechannel = bot.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
                  welcomechannel.send(`:loudspeaker: :inbox_tray: Kullanıcı Katıldı! \`${sayac[member.guild.id].sayi}\` Kişi Olmamıza \`${sayac[member.guild.id].sayi - member.guild.members.size}\` Kişi Kaldı! \`${member.guild.members.size}\` Kişiyiz! \`${member.user.tag}\``);
                } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
                  return console.log(e)
                }
              });

bot.on("message", async (message, member, guild) => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!" || `<@${bot.user.id}> `;
    if(!message.content.startsWith(prefix || message.content.startsWith(`<@${bot.user.id}>`))) return;
  if (message.channel.type != 'text') return message.channel.send('Lütfen komutları sunucularda kullanın.');

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args)
});

bot.on("message", async (message, member, guild) => {
if(message.content.startsWith('-createinvite')) {
const args = message.content.split(' ').slice(1)
let guild = bot.guilds.get(args[0]);

if (!guild) return message.reply("The bot isn't in the guild with this ID.");

let invitechannels = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
if(!invitechannels) return message.channel.send('No Channels found with permissions to create Invite in!')

invitechannels.random().createInvite()
  .then(invite=> message.channel.send('Found Invite:\n' + invite.code))
}
});


let statuses = [
  "Güncellemeler yüzünden kesintiler olabilir.",
  "Yardım komutu yenilendi! | !yardım"
]

bot.on("ready", () => {
  
  console.log("Kenshin Aktif Edildi!")
		bot.user.setPresence({
          game: {
              name: 'twitch.tv/baturay',
          },
          status: 'online'
      })
})

bot.on("guildMemberAdd", async member => {
  let giriscikis = JSON.parse(fs.readFileSync("./giriscikis.json", "utf8"));
  let messagess = await db.fetch(`girisMesaj_${member.guild.id}`) // Fetch Join Message
        if (!messagess) return // If The Join Message Is Existent
              if (!giriscikis[member.guild.id]) {
                return;
                }

                try {
                  let giriscikiskanalID = giriscikis[member.guild.id].giriscikis;
                  let welcomechannel = bot.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
                  welcomechannel.send(`${messagess.replace('{kullanıcı}', member).replace('{üye-sayısı}', member.guild.memberCount)}`);
                } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
                  return console.log(e)
                }
              });

bot.on("guildMemberRemove", async member => {
  let giriscikis = JSON.parse(fs.readFileSync("./giriscikis.json", "utf8"));
  let messagess = await db.fetch(`cikisMesaj_${member.guild.id}`) // Fetch Leave Message
        if (!messagess) return // If The Leave Message Is Existent
              if (!giriscikis[member.guild.id]) {
                return;
                }

                try {
                  let giriscikiskanalID = giriscikis[member.guild.id].giriscikis;
                  let welcomechannel = bot.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
                  welcomechannel.send(`${messagess.replace('{kullanıcı}', member).replace('{üye-sayısı}', member.guild.memberCount)}`);
                } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
                  return console.log(e)
                }
              });

bot.on('guildMemberAdd', async member => {
        let dmuser = await db.fetch(`dmMesaji_${member.guild.id}`) // If DMing User Message Is Active
        if (!dmuser) return;
        member.send(`${dmuser.replace('{kullanıcı}', member).replace('{üye-sayısı}', member.guild.memberCount)}`)
    });

bot.on('message', async message => {
    let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
    let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)
    let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
    if(message.content === prefix + komut) return message.channel.send(gonderileceksey)
  });

/*bot.on("message", async message => {
   if (message.content.toLowerCase() === 'sa') {
    await message.react('🇦');
    message.react('🇸');
  }
  });*/

bot.on("message", msg => {
  if (!msg.guild) return;
  if (db.has(`reklamE_${msg.guild.id}`) === false) return;
    if (db.has(`reklamE_${msg.guild.id}`) === true) {
      const kufur = ["discord.gg", "discord.io", ".com", ".net", ".gg", ".cf", ".tk", ".ml", ".ooo", "discord.gg/invite"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Reklam Engeli!")
        .setDescription(`Bu sunucuda linkler/discord sunucu linkleri **${bot.user.username}** tarafından engellenmektedir! Reklam yapmana izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }
});

bot.on("message", msg => {
  if (!msg.guild) return;
  if (db.has(`küfürE_${msg.guild.id}`) === false) return;
    if (db.has(`küfürE_${msg.guild.id}`) === true) {
      const kufur = ["göt", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var k = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Küfür Engeli!")
        .setDescription(`Bu sunucuda küfürler **${bot.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim!`)
        msg.channel.send(k).then(message => message.delete(5000));
    }
}
    }
});

bot.on("message", async message => {  
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  if (message.content.toLowerCase() === prefix + 'döviz') {
    var request = require('request');
    request('https://pinnableapi.glitch.me/api/doviz', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**<:dolar:518723991859363841> Dolar alış:** ${info.dolaralis} <:tl:518469950705500180> \n**<:dolar:518723991859363841> Dolar satış:** ${info.dolarsatis} <:tl:518469950705500180>\n -------------- \n**<:euro:518724799368003584> Euro alış:** ${info.euroalis} <:tl:518469950705500180> \n**<:euro:518724799368003584> Euro satış:** ${info.eurosatis} <:tl:518469950705500180>\n -------------- \n<a:yukleniyor:518467471527903256>  **Son güncelleme:** ${info.songuncelleme}`).setFooter('Baturay | Döviz Sistemi').setColor("#ff0000"));
    }
})
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hpbalance") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843441552654337/image8.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on("message", async message => {
    let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hpbravery") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843440864919554/image7.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hpbrilliance") {    
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843440864919552/image6.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "dcbughunter") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843440441425922/image5.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hpevent") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843440441425920/image4.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
}) 

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "dcstaff") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843438981677067/image1.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
})

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "atatürk-çerçeve") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487849021658890240/image0.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
})

bot.on("message", async message => { 
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "dcpartner") {   
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)  
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487843439740715028/image2.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 0, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "hacked") {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487837060326227972/image0.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 2, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});



bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "winner") {
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        message.channel.send("<a:yukleniyor:518467471527903256> | `Profil Fotoğrafınıza` **Göre Ayarlıyorum. Bu Biraz Zaman Alabilir**").then(m => m.delete(1000));

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(400, 400)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/484692865985806346/487841969561796608/image0.png", (err, avatar) => {
                avatar.resize(400, 400)
                image.composite(avatar, 2, 0).write(`./img/snip/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/snip/${bot.user.id}-${user.id}.png`));
                }, 1000);
            });

        });
    }
});

bot.on('guildCreate', guild => {
    db.set(`sunucuKomut_${guild.id}`, "Bulunmuyor.")
    let channel = bot.channels.get("514458622202347520")
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle(`:inbox_tray: Giriş | ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
bot.on('guildDelete', guild => {
    let channel = bot.channels.get("514458622202347520")
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`:outbox_tray: Çıkış | ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

bot.on('messageDelete', async (message) => {
    let kayitlar = JSON.parse(fs.readFileSync("./kayitlar.json", "utf8"));
    if (message.guild.me.hasPermission('MANAGE_CHANNELS')) {
    }
    const entry = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    }).then(audit => audit.entries.first())
        if (!kayitlar[message.guild.id]) {
        return;
      }

      try {
        let kayitlarKanal = kayitlar[message.guild.id].kayitlar;
        let logs = bot.guilds.get(message.guild.id).channels.get(kayitlarKanal);
        const logembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setDescription(`${message.author.tag} tarafından gönderilen mesaj ${message.channel} kanalında silindi.\n\n\n${message.content}`)
        .setColor('#36393F')
        .setTimestamp()
    logs.send(logembed);
      } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
        return console.log(e)
      }
});

bot.on('guildCreate', guild => {
  const owner = guild.owner
  let merhaba = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setAuthor(guild.name, guild.iconURL)
  .addField('Beni eklediğin için teşekkürler sayın', `${owner}`)
  .addField('Ben sizlerin sunucusundaki kullanıcılara daha iyi bir hizmet sağlamak için buradayım.', 'Baturay Sizlere Tam Destek Sunar!')
  .addField('**Komutları öğrenmek için**', `**!yardım** yazmanız yeterlidir!`)
  owner.send(merhaba);
});
  
bot.elevation = message => {
  if(!message.guild) {
  return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 4;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 5;
  if (message.author.id === ayarlar.sahip) permlvl = 6;
  return permlvl;
};      



bot.on("message", async message => {
if(message.content === `<@${bot.user.id}> prefix`) {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  if(message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu sunucunun prefixi **${prefix}** olarak ayarlanmıştır.\nGörünüşe göre senin **Yönetici** yetkin var. Prefixi değiştirebilirsin.\n${prefix}prefix-ayarla [yeni prefix]`)
  message.channel.send(`Bu sunucunun prefixi **${prefix}** olarak ayarlanmıştır.`)
}});

bot.on("guildMemberAdd", member => {
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  if (!autorole[member.guild.id]) { // jika tidak ada autorole yang di set, agar tidak error saat ada yang join
    autorole[member.guild.id] = {
      autorole: ayarlar.autorole
    };
  }
  var role = autorole[member.guild.id].role;
  if (!role) return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
  member.addRole(role);
});

bot.on("message", async message => {
  if (message.guild.id === "264445053596991498") return;

  if (!bakiye[message.author.id]){
    bakiye[message.author.id] = {
      bakiye: 0
    };
  }
    
  if (!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let coinAmt = Math.floor(Math.random() * 149) + 1;
  let xpAdd = Math.floor(Math.random() * 4) + 1;
 
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

bot.on("message", async message => {
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
  const id = "510795031573954600"
  const DBL = require("dblapi.js");
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwOTAwOTMyMjAzNDg1NTk0OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQzOTM0OTA3fQ.zfByf4CGlo2H8xy158jYfRsqgBTR3kToVxzbVtFDKfk', this.client);
  if(message.content.startsWith(prefix + 'oy-verdim')) {
    dbl.hasVoted(message.author.id).then(voted => {
          if (voted) {
            if (message.member.roles.has('659474948632608798')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Sen zaten destekçisin.').setColor('RED'));
            const bildirim = message.member.guild.channels.find('name', 'oy-verenler');
            if (!bildirim) return;
            var guild = message.guild
            message.member.addRole('659474948632608798');
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(' <@&659474948632608798> rolü başarıyla verildi. Bizi desteklediğin için teşekkür ederiz!').setColor('GREEN'));
            
            bildirim.sendEmbed(new Discord.RichEmbed().setColor("BLUE").setAuthor("Yeni Bir Destekçimiz Var!").addField("» Destekleyen Kullanıcı", `<@${message.author.id}>`, true).addField("» Verilen Rol", "<@&659474948632608798>", true).setFooter("• Bizi desteklediğin için teşekkür ederiz!").setTimestamp())          
          }
    else if (!voted) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için bota 12 saatte bir oy varmeniz gerekmektedir.\nVerdiğiniz oyun bota işlenmesi birkaç dakika sürebilir. Anlayışınız için teşekkür ederiz. **[Buraya tıklayarak](https://discordbots.org/bot/509009322034855948/vote) bota oy verebilirsiniz.**').setColor('RED'));
  })
 }
});

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("./coins.json" , JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });
    const lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .addField("Seviye yükseldi;" , "Tebrikler :tada: Level " + (curlvl + 1) + " oldun.\nHesabına **" + coinAmt + "** :dollar: eklendi!")
    .setFooter(`Kenshin`, bot.user.avatarURL)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.sendEmbed(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
});
  
bot.login(ayarlar.token)