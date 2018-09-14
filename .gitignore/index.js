const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("s!")

bot.on('ready', function() {
    bot.user.setGame("Command: s!help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes du SolusBot: \n -s!help");
    }

    if (message.content === prfix + "beta"){
        message.reply("La beta est en dévelopement");
        console.log("commande Salut effectué");
    }
});
