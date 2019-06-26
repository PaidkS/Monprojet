const Discord = require('discord.js');
const client = new Discord.Client();

// token a chercher dans bot and BUILD-A-BOT
client.login (process.env.TOKEN);

client.on('ready', function() {
    client.user.setGame("dm");
    console.log("Connectedç");
});

client.on('message', message => {
    if(message.content.startsWith('alldm')){
        let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        message.guild.members.forEach((player) => {
             message.guild.member(player).send(`Bonjour,
Aujourd'hui je vous présente mon serveur discord plutôt basé sur la vente. 

Que peux-tu y trouver ? :thinking: 

- Des serveur discord contenant un nombre important de membres.
- Des comptes Minecraft Premium (des alts ou des full access)
- Un compte Epic games contenant le jeu borderlands 3 Pre-Purchase Super deluxe edition.
- Des comptes fortnite.
- Mon générateur.

Tu peux même faire ton shop à toi, exposer tes offres ! 

Tous est à prix bas, profitez-en !

Important : Tous achats se fait sur ppal 

Venez faire un tour 100

https://discord.gg/3ZvbUJz`);
        });
    }
})
