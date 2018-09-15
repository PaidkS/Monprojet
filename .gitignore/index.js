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

  
