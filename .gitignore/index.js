const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("s!")

bot.on('ready', function() {
    bot.user.setGame("s!help for help");
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

    if (message.content === prefix + "paidks"){
        message.reply("It's my dady");
    }
    
    if (message.content === prefix + "help"){ 
        var embed = new Discord.RichEmbed() 
            .setTitle("Help") 
            .setDescription("Les commandes du bot son") 
            .addField("s!help","Page d'aide", true) 
            .setColor("0xFF0000") 
            .setFooter("Enjoy") 
        message.channel.sendEmbed(embed);
    }
}); 
