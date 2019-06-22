const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', function() {
    bot.user.setGame("Okue Is Back");
    console.log("Connectedç");
});

client.login(process.env.TOKEN);


client.on('message', message => {
    if(message.content.startsWith('alldm')){
   let cont = message.content.slice(1).split(" ")
           let args = cont.slice(1)
           let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
         message.guild.members.forEach((player) => {
             message.guild.member(player).send(`Rejoins .
   
   
    LOVE SOCIAL https://discord.gg/KSBxDWd`);
   });
  
