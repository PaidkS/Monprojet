const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("s!")

bot.on('ready', function() {
    bot.user.setGame("Command: s!help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === prefix + "solus"){
        message.reply("Solus est un MMO FPS français en dévelopemet");
    }

    if (message.content === prefix + "beta"){
        message.reply("La beta est en dévelopement");
        console.log("commande Salut effectué");
    }
});

bot.on('message',message => {
    if (message.content === prefix + "paidks"){
        message.reply("It's my dady");
    }
});

    if (message.content === prefix + "help"){
        var embed = new DiscordEmbed()
           .setTitle("Help")
           .setDescription("Les commandes du bot son")
           .addField("s!help","Page d'aide",true)
           .addField("s!beta","Informations sur le l'avancement de la beta",true)
           .addField("s!meme","Même aléatoire",true)
           .addField("s!level","Affiche votre niveau",true)
           .addField("s!paidks","Le meilleur"true)
           .addField("s!solus","Informations sur le jeux"true)
           .setColor("0xFF0000")
           .setFooter("Enjoy")
        message.channel.sendEmbed(embed);
    }
});
  
