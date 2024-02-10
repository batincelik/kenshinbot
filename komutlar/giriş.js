const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
					let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "!";
                let mentionEmbed = new Discord.RichEmbed()
                     .setDescription(`**Lütfen giriş mesajını ayarlayın.**\nÖrneğin: \`\`\`${prefix}giriş Sunucumuza hoşgeldin {kullanıcı}! Seninle birlikte {üye-sayısı} kişiye ulaştık!\`\`\``)
                     .setColor('RED')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':x: | Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor('RED')); // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args[0]) return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let mesaj;
                     if (args.slice(0, 1000, args[0]).join(' ') === 'NONE') mesaj = ''; // If they wrote the word none, it sets newMessage as empty.
                     else mesaj = args.slice(0, 1000, args[0]).join(' '); // If they didn't write none, set what they wrote as the message
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.RichEmbed()
                     .addField(`Başarıyla giriş mesajı ayarlandı.`, `\`\`\`${mesaj}\`\`\``)
                     .setColor('GREEN')
                
                     db.set(`girisMesaj_${message.guild.id}`, mesaj)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };

exports.help = {
  name: "giriş"
};