const Discord = require('discord.js');
const exp = require('../exp.json');

module.exports.run = async (bot, message, args) => {
  if (!exp[message.author.id]) {
    exp[message.author.id] = {
      exp: 0,
      niveau: 1
    };
  }
  
  let cExp = exp[message.author.id].exp;
  let cNiv = exp[message.author.id].Niveau;
  let nextLevelUp = cNiv * 10;  
  
  let nivEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor('#dc143c')
    .addField('Niveau :', cNiv, true)
    .setTimestamp()
    .setFooter("Naenelis Bot");
    
  
  message.channel.send(nivEmbed);
};

module.exports.help = {
  name: 'niv' 
};
