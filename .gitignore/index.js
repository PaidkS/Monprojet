const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })

bot.on("message", message => {
    if(message.content.includes("servercount")){
        console.log(`${bot.guilds.map(c => c.name)}`)
    }

    if (message.content === "!aide"){
        var helpembed = new Discord.RichEmbed()
          .setTitle("💬 Les commandes du bots : 💬")
          .setDescription("le serveur qui a pas de nom's commands ")
          .setColor("#dc143c")
          .addField("┌╴╜          Liste des commandes du bot          ╙╴┐")
          .addField("├ **!contexte :**", "vous donne le xontexte du rp  ")
          .addField("├ **!fiche :**", "vous donne la template fiche rp ")
          .addField("├ **!serverinfo :**", "pour voir les infos du serveur ")
          .addField("├ **!plainte :**", "vous crée une plainte au staff ")
          .addField("├ **!aide fiche :**", "T'aide à faire ta fiche rp ")
          .addField("├ **!map :**", "vous montre la map du rp ")
          .addField("└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘");
          return message.channel.send(helpembed);
      
      }
      
      if (message.content === "!aide fiche"){
        var ficheembed = new Discord.RichEmbed()
          .setTitle("💬 Les commandes du bots : 💬")
          .setDescription("ProtectBot's commands ")
          .setColor("#dc143c")
          .addField("┌╴╜          Liste des commandes du bot          ╙╴┐")
          .addField("├ **!aide Royaume :**  ")
          .addField("├ **!aide Race :**  ")
          .addField("├ **!aide Titre :**  ")
          .addField("├ **!aide Pouvoir :**  ")
          .addField("├ **!aide Histoire :**  ")
          .addField("├ **!aide Caractère | Physique :**  ")
          .addField("└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘");
          return message.channel.send(ficheembed);      
                    
      }
      
      if (message.content === "!serverinfo"){
        let sicon = message.guild.iconURL;
        var serverembed = new Discord.RichEmbed()
        .setTitle("Informations du serveur")
        .setDescription("Informations")
        .setColor("#15f153")
        .setThumbnail(sicon);
      
        return message.channel.send(serverembed);
      
      }
    
});
