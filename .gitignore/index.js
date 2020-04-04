require('dotenv').config();
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
          .setDescription("┌╴╜          Liste des commandes du bot          ╙╴┐")
          .setColor("#dc143c")
          .addField("Début","├ !contexte :")
          .addField("**vous donne le contexte du rp**  ","├ !fiche :" )
          .addField("**vous donne la template fiche rp** ","├ !serverinfo :")
          .addField("**pour voir les infos du serveur** ", "├ !plainte :" )
          .addField("**vous créez une plainte au staff** ", "├ !aide fiche :"  )
          .addField("**t'aide à faire ta fiche rp** ","├ !map :"  )
          .addField("**vous montre la map du rp** ", "└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘" );
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
          .addField("└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘");
          return message.channel.send(ficheembed);      
                    
      }
      if (message.content === '!map') {
        message.reply(" ``` ```Voici une carte non-exhaustive de ce à quoi ressemble le monde pour vous donner une idée. Les points noirs représentent les capitales.   https://cdn.discordapp.com/attachments/695728674846015545/695729234148327455/Map_serv.png ``` ```")
      }
      
      if (message.content === '!contexte') {
        message.reply(" ``` ```  **Autrefois, il y a une guerre de commerce.Cette guerre s'est d'abord présentée sous forme de taxes sur les marchandises qui circulaientPlus les tensions montaient, plus cette guerre qui était déjà préssentie par la plupart s'approchaitSi ces tensions ont commencé à monter, c'est parce que le roi de l'Ouest, un nom, a prétendu détenir un précieux remède pour la maladie de la peste. Mais, avide de richesses, il a promis de le commercialiser pour des prix exhorbitants. Etant les seuls détenteurs de ce remède et de sa fabrication, les commercants du royaume avaient un monopole total dessus et pouvaient donc le vendre au prix qui leur chantaitLes gens suivirent et achetèrent le remède à n'importe quel prix, sauf qu'il s'est avéré qu'une semaine plus tard après sa mise en vente, un espion du Nord a appris que c'était un faux et que l'Ouest n'avait pas trouvé ce remède miracle.Tout le monde s'était fait berner en beauté et c'est là que les tensions commerciales ont commencé à monterIl y eut beaucoup d'autres cas plus minimes de ce genre qui favorisèrent ce cercle vicieuxLes royaumes qui travaillaient autrefois main dans la main se préparaient et s'armaient en vue d'une guerre qui parraissait de plus en plus inévitableLeur haine était telle qu'on assassina le roi de l'Est. Cela fut l'élément déclencheur de cette guerre.Donc la guerre dura pendant 1 an.Et les dragons dans tout ça, ils observaient les humains depuis les cieux. Dépités de voir leur stupidité décidèrent de séparer le royaume de l'Ouest des autres continentsCe fut une des rares fois dans l'histoire où le dragon géant ancestral qui supporte leur royaume s'est posé sur les terres du centre.Cela s'est passé il y a 4 ans et depuis, le commerce entre les différents royaumes redémarre même si il reste des haines et des tensions.Certains veulent la guerre, d'autres la paix. C'est à vous de décider du destin des royaumes** ``` ```")
      }
      if (message.content === '!aide Royaume') {
        message.reply(" ``` ``` Tu dois choisir le royaume dans lequel tu es né(e), il y a le royaume de Miolipost, d’Oriaskone ou de Xieonas, pour plus d'information n'hésite pas à checké le salon #topographie .``` ```")
      }
      if (message.content === '!aide Race') {
        message.reply(" ``` ``` Tu dois choisir ta race, tu as le choix, pour plus f'informations regarde le salons #races .  ``` ```")
      }
      if (message.content === '!aide Titre') {
        message.reply(" ``` ``` [le blabla sur les titres]  ``` ```")
      }
      if (message.content === '!aide Pouvoir') {
        message.reply(" ``` ``` Tu dois choisir un pouvoir qui t'es propre, tu ne peux pas prendre le pouvoir que quelqu'un d'autre a déjà choisis, ton pouvoir ne dois pas être trop **cheat** et dois être détaillé de minimum 3 lignes sur pc et 5 lignes sur téléphone.  ``` ```")
      }
      if (message.content === '!aide Histoire') {
        message.reply(" ``` ``` Tu dois écrire l'histoire de ton personnage, 5 lignes minimum sur pc et 10 lignes sur téléphone.  ``` ```")
      }
      if (message.content === '!fiche') {
        message.reply("  ``` nan t'es sérieux ? bon vas voir dans #modèle-de-fiche  ```")
      }
      if(message.content === "!plainte"){
        message.channel.send("Un salon pour porter ta plainte a bien été crée")
          for(var i = 0; i < 1; i++){
              message.guild.createChannel("Plainte en cours", "text").then(c => c.send("Merci de déposer ta plainte ici et d'être bref, ensuite ping le staff.."))
             
          }
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
