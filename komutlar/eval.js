const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
    if(message.author.id !== '1179122683305267241') return message.channel.send("Bu komutu sadece bot sahibi kullanabilir.");
  if(args[0] == 'bot.token') return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor('Komut Çalıştırma').addField(':inbox_tray: Komut', `\`\`\`bot.token\`\`\``).addField(':outbox_tray: Sonuç', `\`\`\`Mal mısın aq?\`\`\``).setColor('RANDOM')) 
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Komut Çalıştırma')
        .setColor('RANDOM')
        .addField(':inbox_tray: Komut', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Sonuç', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.help = {
    name: 'eval'
}