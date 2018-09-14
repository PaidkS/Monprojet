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
        message.reply("Liste des commandes du SolusBot: \n -s!help \n -s!beta \n -s!paidks \n -solus");
    }

    if (message.content === prefix + "beta"){
        message.reply("La beta est en dévelopement");
        console.log("commande Salut effectué");
    }
});

bot.on('message',message => {
    if (message.content === prefix + "Paidks"){
        message.reply("It's my dady");
    }
});
