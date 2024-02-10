const Discord = require("discord.js");
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:',
  'ğ': ':regional_indicator_g:',
  'ı': ':regional_indicator_i:',
  'ş': ':regional_indicator_s:',
  'ç': ':regional_indicator_c:',
  'ö': ':regional_indicator_o:',
  'ü': ':regional_indicator_u:',
  'Ğ': ':regional_indicator_g:',
  'İ': ':regional_indicator_i:',
  'Ş': ':regional_indicator_s:',
  'Ç': ':regional_indicator_c:',
  'Ü': ':regional_indicator_u:',
  'Ö': ':regional_indicator_o:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length < 1) {
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(':X: Emoji şeklinde yazmam için mesaj belirtmelisin.').setColor('RED'));
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "emoji-yazı",
  category: "Miscelaneous",
  description: "Says your text in big LETTERS",
  usage: "emojify [text]"
};