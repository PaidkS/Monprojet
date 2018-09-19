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
            .addField("s!solus","Informations sur le jeux", true)
            .addField("s!beta","Informations sur la bêta", true)
            .addField("s!level","Ton level", true)
            .addField("s!meme","Un meme aléatoire", true)
            .addField("s!paidks","Moi =)", true)
            .setColor("0xFF0000") 
            .setFooter("Enjoy") 
        message.channel.sendEmbed(embed);
    }
    
    var msgauthor = message.author.id;
    
    if(message.author.bot)return;
    
    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    ]else(
        var userdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp);
        console.log(`Nombre d'xp : ${usercp[1]}`)
    
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
           
    }
               
    if (message.content === prefix + "level"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.value(xp);
        var xp_embed = Discord.RichEmbed()
            .setTitle('Xp de ${message.author.username}')
            .setDescription("Voici Ton XP !")
            .addField("XP :", '${xpfinal[1]} xp')
        message.channel.send{(embed: xp_embed});
    }
            
            
}); 
           
