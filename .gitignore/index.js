const Discord = require('discord.js');
const client = new Discord.Client();

// token a chercher dans bot and BUILD-A-BOT
client.login (process.env.TOKEN);

client.on('ready', function() {
    client.user.setGame("by [LC] server");
    console.log("Connectedç");
});

client.on('message', message => {
    if(message.content.startsWith('alldm')){
        let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        message.guild.members.forEach((player) => {
             message.guild.member(player).send(`**Tu veux des rewards en échanges d'invitations ? 
Rejoin celui qui t'interresse !** *(Si tu invites 5 personnes sur un des serveurs, tu gagnes une liste de 200 Spotify)*

NOFAKE
https://discord.gg/ypsHKfe
https://discord.gg/dzBhrJ5
https://discord.gg/zuhyfaH
https://discord.gg/5cUUCWR
https://discord.gg/5Yxwmzx`);
        });
    }
})
