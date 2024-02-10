const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {
  let start = Date.now();
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Pong!`)
        .setColor(0xff2f2f)
        .addField("📶 Benim Pingim", `${API}ms`, true)
        .addField("💻 API\'nin Pingi", `${API}ms`, true)
        .setFooter("Dikkat! Bu bot ücretsiz bir hostingde hostlanmıştır.\nSizleyin yapacağı bağışlarla makineye geçilecektir.")
        message.channel.send(embed);
      
    };

exports.help = {
    name: 'ping'
}