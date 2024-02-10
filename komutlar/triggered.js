module.exports.run = async (bot, message, args) => {
  message.channel.startTyping();
  message.channel.send({
    file: {
      attachment: "https://cute-api.tk/v1/generate/triggered?url=" + message.author.avatarURL,
      name: 'triggered.png'
    }
  });
message.channel.stopTyping();
};

module.exports.help = {
  name: 'triggered'
};