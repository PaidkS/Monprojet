const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

let xp = require("./xp.json");
console.log("start")
bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('!menu', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
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
          .setTimestamp()
          .setDescription("**Voici les commandes de base du bot :\nLe préfixe du bot est !**")
          .setColor("#dc143c")
          .addField("<:3263_Blank:697073139099893780>","Commandes :")
          .addField("``aide fiche`` ``contexte`` ``fiche`` ``serverinfo`` ``map`` ``menu`` ``calîn`` ``bisous``","<:3263_Blank:697073139099893780>")     
          .setFooter("Naenelis Bot");
          message.author.send(helpembed);
      
      }
      
      if (message.content === "!aide fiche"){
        var ficheembed = new Discord.RichEmbed()
          .setAuthor("Naenelis", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("**Voici toutes les commandes d'aide des fiches rp du bot Naenelis!\nLe préfixe du bot est !**")
          .addField(`<:3263_Blank:697073139099893780>`, "**Commandes :**")   
          .addField("``!aide Histoire`` ``!aide Race`` ``!aide Pouvoir``")      
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
          .setTitle("Voici le contexte du monde de Naenelis : <a:2765_pika_cheer:697063554058158084> ")
          .setAuthor("Naenelis", bot.user.displayAvatarURL)
          .setTimestamp()
          .setDescription(" ``` ``` \n Naenelis est un royaume assez récent qui vit toujours aujourd'hui. Il possède une superficie assez étendue lui permettant d'avoir plusieurs topographies différentes. Ce royaume a été fondé il y à 512 ans de cela. Un groupe de 81 personnes est venu s'installer ici en provenance d'un monde inconnu. Tous les savoirs sur cet ancien monde ont disparu en même temps que le décès des fondateurs qui ne voulaient pas mettre au courant leurs descendants de ces savoirs. On suppose qu'ils avaient été bannis de leur monde mais rien de certain. Donc ils créèrent une colonie sur ce territoire inexploré. La colonie eut plusieurs soucis à sa création, mais 10 ans plus tard, un groupe de 200 personnes rejoignit la colonie. Ils avaient été bannis eux aussi de ce monde mais ne donnèrent aucun détail quant à la raison de leur expulsion. Ils s'intégrèrent bien à la colonie et l'aidèrent à se développer. Il y eut une vingtaine de groupes qui avaient été bannis eux aussi même si aucun d'eux ne donna d'information sur leur ancienne vie. Au final, il y avait bien 6 races différentes dans ce royaume car les groupes ammenaient des orques, des nains, des elfes, des vampires et j'en passe. Ce fut un bond dans l'avancé de ce nouveau royaume. Il se développa de plus en plus jusqu'à prendre une grande ampleur. Aujourd'hui, ce royaume étend sa juridiction sur un quart du continent sur lequel ils se trouvent. Vous êtes des citoyens de ce royaume et votre but va être de gravir les échelons dans cette société toute jeune. Et en cela, vous devrez faire vos preuves...\n ``` ```")
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
          .setDescription("``` ``` \n **Tu dois écrire l'histoire de ton personnage, 8 lignes minimum sur pc et 10 lignes sur téléphone.** \n  ``` ```")         
          .setFooter("Naenelis Bot");
          return message.channel.send(ficheembed);      
                    
      }
      if (message.content.includes ('!calîn')) {
        var hugembed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/696352364499566642/697413068950339624/giphy_2.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(hugembed);      
                    
      }
      if (message.content.includes ('!calin')) {
        var hugeembed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/696352364499566642/697413068950339624/giphy_2.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(hugeembed);

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
      let xpAdd = Math.floor(Math.random() * 7) + 8;
      console.log(xpAdd);
    
      if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1
        };
      }
    
    
      let curxp = xp[message.author.id].xp;
      let curlvl = xp[message.author.id].level;
      let nxtLvl = xp[message.author.id].level * 300;
      xp[message.author.id].xp =  curxp + xpAdd;
      if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor("#dc143c")
        .addField("New Level", curlvl + 1);
    
        message.channel.send(lvlup).then(msg => {msg.delete(5000)});
      }
      fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) {
          console.log(err)
          message.reply("MSKN")
        }
      });      
      if (message.content === "!menu"){
        var menuembed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .addField("<:3263_Blank:697073139099893780> ", "**Niveau : 1**", true)
          .addField("<:3263_Blank:697073139099893780> ", "**Guilde : Aucune**", true)
          .addField("<:3263_Blank:697073139099893780> ", "**Titre : Recrue**", true)     
          .addField("<:3263_Blank:697073139099893780>", "**📖 <a:3770_this_animated_right:697063197399711844> Ouvrir son grimmoire** ")      
          .addField("<:3263_Blank:697073139099893780>", "**🔍 <a:3770_this_animated_right:697063197399711844> Ouvrir le menu d'aide** ")    
          .addField("<:3263_Blank:697073139099893780>", "**⚙️ <a:3770_this_animated_right:697063197399711844> Ouvrir le menu Option** ")  
          .setFooter("Naenelis Bot")
          message.channel.send(menuembed)      
            .then(msg => msg.react('📖'))
            .then(mReaction => mReaction.message.react('🔍'))
            .then(mReaction => mReaction.message.react('⚙️'))
            .then(mReaction => {

              const collector = mReaction.message
                .createReactionCollector(reactionFilter, {
                  time: 15000
      });


           })       
      }       
      if (message.content === "send nudes") {
        message.reply("<a:8890_PikachuCool:697063725412384798> viens dm bb")
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
