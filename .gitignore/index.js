const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('695647284477558885').send(" *Bienvenue **" + member.user.username + " ** J'imagine que tu venu ici pour faire du rp non? Si oui, je te conseille de d'abord lire le #├「règlement」📃  pour que tu saches à quoi t'attendre.  Bon rp !");
});

bot.on("message", message => {
  if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() ===  '!kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.sendMessage("Ptdr t ki ? ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.sendMessage("Mentionne un mec là !!!")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.sendMessage("tu t'es pris pour qui, tu peux pas le kick")
        member.kick()
        message.channel.sendMessage("**"+member.user.username + '** à été exclu !')
    }


    if (args[0].toLocaleLowerCase() === "!roll" && args.length === 2){     
      var rproll = Math.floor(Math.random() *args[1].valueOf()) + 1; 
      var rollembed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Puissance  **"+ rproll + "**" )                         
          return message.channel.send(rollembed);      
      //message.reply('Ton roll est de '+ rproll );               
    }        
      
          
    
    
    
    if(message.content.includes("servercount")){
        console.log(`${bot.guilds.map(c => c.name)}`)
    }

    if (message.content === "!aide"){
        var helpembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)
          .setTitle("💬 Les commandes du bots : 💬")
          .setTimestamp()
          .setDescription("┌╴╜          Liste des commandes du bot          ╙╴┐")
          .setColor("#dc143c")
          .addField("Début","├ !contexte :")
          .addField("**vous donne le contexte du rp**  ","├ !fiche :" )
          .addField("**vous donne la template fiche rp** ","├ !serverinfo :")
          .addField("**pour voir les infos du serveur** ", "├ !plainte :" )
          .addField("**vous créez une plainte au staff** ", "├ !aide fiche :"  )
          .addField("**t'aide à faire ta fiche rp** ","├ !map :"  )
          .addField("**vous montre la map du rp** ", "└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘" )
          .setFooter("Naenelis Bot");
          message.author.send(helpembed);
      
      }
      
      if (message.content === "!aide fiche"){
        var ficheembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !")
          .addField(`commandes :`, "``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")         
          .setFooter("Naenelis Bot");
          return message.channel.send(ficheembed);      
                    
      }
      if (message.content === "!map"){
        var mapembed = new Discord.RichEmbed()
          .setTitle("Voici la carte du monde de Naenelis :")
          .setAuthor("Naenelis", bot.user.displayAvatarURL)
          .setTimestamp()
          .setDescription("Voici une carte non-exhaustive de ce à quoi ressemble le monde pour vous donner une idée. Les points noirs représentent les capitales.")
          .setColor("#dc143c")
          .setImage('https://cdn.discordapp.com/attachments/491648927745966118/696420198399475782/5cdcbaa59eca5c9d1179732ee6c8b978_1.png')
          .setFooter("Naenelis Bot");
          return message.channel.send(mapembed);
      
      }  
      if (message.content === "!contexte"){
        var mapembed = new Discord.RichEmbed()
          .setTitle("Voici la carte du monde de Naenelis :")
          .setAuthor("Naenelis", bot.user.displayAvatarURL)
          .setTimestamp()
          .setDescription(" Autrefois, il y a une guerre de commerce.Cette guerre s'est d'abord présentée sous forme de taxes sur les marchandises qui circulaientPlus les tensions montaient, plus cette guerre qui était déjà préssentie par la plupart s'approchaitSi ces tensions ont commencé à monter, c'est parce que le roi de l'Ouest, un nom, a prétendu détenir un précieux remède pour la maladie de la peste. Mais, avide de richesses, il a promis de le commercialiser pour des prix exhorbitants. Etant les seuls détenteurs de ce remède et de sa fabrication, les commercants du royaume avaient un monopole total dessus et pouvaient donc le vendre au prix qui leur chantaitLes gens suivirent et achetèrent le remède à n'importe quel prix, sauf qu'il s'est avéré qu'une semaine plus tard après sa mise en vente, un espion du Nord a appris que c'était un faux et que l'Ouest n'avait pas trouvé ce remède miracle.Tout le monde s'était fait berner en beauté et c'est là que les tensions commerciales ont commencé à monterIl y eut beaucoup d'autres cas plus minimes de ce genre qui favorisèrent ce cercle vicieuxLes royaumes qui travaillaient autrefois main dans la main se préparaient et s'armaient en vue d'une guerre qui parraissait de plus en plus inévitableLeur haine était telle qu'on assassina le roi de l'Est. Cela fut l'élément déclencheur de cette guerre.Donc la guerre dura pendant 1 an.Et les dragons dans tout ça, ils observaient les humains depuis les cieux. Dépités de voir leur stupidité décidèrent de séparer le royaume de l'Ouest des autres continentsCe fut une des rares fois dans l'histoire où le dragon géant ancestral qui supporte leur royaume s'est posé sur les terres du centre.Cela s'est passé il y a 4 ans et depuis, le commerce entre les différents royaumes redémarre même si il reste des haines et des tensions.Certains veulent la guerre, d'autres la paix. C'est à vous de décider du destin des royaumes ")
          .setColor("#dc143c")
          .setFooter("Naenelis Bot");
          return message.channel.send(mapembed);
      
      }   
      if (message.content === "!aide Race"){
        var ficheembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici la liste des races que tu peux choisir pour ton personnage rp :")
          .addField(`Races :`, "``Humain`` ``Vampire`` ``Orque`` ``Nain`` ``Elfe`` ``Hommes-lézards`` ``Neko`` ")         
          .setFooter("Naenelis Bot");
          return message.channel.send(ficheembed);      
                    
      }                                   
      if (message.content === "!aide Pouvoir"){
        var ficheembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("``` ```\n **Tu dois choisir un pouvoir qui t'es propre, tu ne peux pas prendre le pouvoir que quelqu'un d'autre a déjà choisis, ton pouvoir ne dois pas être trop **cheat** et dois être détaillé de minimum 3 lignes sur pc et 5 lignes sur téléphone.** \n  ``` ```")                  
          .setFooter("Naenelis Bot");
          return message.channel.send(ficheembed);      
                    
      }     
      if (message.content === "!aide Histoire"){
        var ficheembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("``` ``` \n **Tu dois écrire l'histoire de ton personnage, 5 lignes minimum sur pc et 10 lignes sur téléphone.** \n  ``` ```")         
          .setFooter("Naenelis Bot");
          return message.channel.send(ficheembed);      
                    
      }
      //!summon commandes
      
      if (message.content === "!summon monstre tier 1"){
        var tiersembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !")
          .addField(`commandes :`, "``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")         
          .setFooter("Naenelis Bot");
          return message.channel.send(tiersembed);      
                    
      }
      if (message.content === "!summon monstre tier 2"){
        var tierssembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !")
          .addField(`commandes :`, "``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")         
          .setFooter("Naenelis Bot");
          return message.channel.send(tierssembed);      
                    
      }
      if (message.content === "!summon monstre tier 3"){
        var tiersssembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !")
          .addField(`commandes :`, "``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")         
          .setFooter("Naenelis Bot");
          return message.channel.send(tiersssembed);      
                    
      }
      if (message.content === "!summon monstre tier 4"){
        var tierssssembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !")
          .addField(`commandes :`, "``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")         
          .setFooter("Naenelis Bot");
          return message.channel.send(tierssssembed);      
                    
      }
      if (message.content === "!menu"){
        var menuembed = new Discord.RichEmbed()
          .setTitlle("Menu de jeu :")
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()          
          .addField("Niveau : 1", "", True )
          .addField("Guilde : Aucune", "", True )
          .addField("Titre : Aucun", "", True )
          .addField(">Stats 📈", "", False )
          .addField(">Aide 🔍", "", False )
          .addField(">Option ⚙️", "", False )        
          .setFooter("Naenelis Bot");
          return message.channel.send(menuembed);

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
        .setThumbnail(sicon)
        .setFooter("Naenelis Bot");
      
        return message.channel.send(serverembed);
      
      }
    
});
