const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

let xp = require("./xp.json");
console.log("start")
bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Greed Island', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('695647284477558885').send(" *Bienvenue **" + member.user.username + " ** Sur le serveur Rp Greed Island.");
});

bot.on("message", message => {
  
  if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() ===  '=kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.sendMessage("Ptdr t ki ? ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.sendMessage("Mentionne un mec là !!!")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.sendMessage("tu t'es pris pour qui, tu peux pas le kick")
        member.kick()
        message.channel.sendMessage("**"+member.user.username + '** à été exclu !')
    }


    if (args[0].toLocaleLowerCase() === "=roll" && args.length === 2){     
      var rproll = Math.floor(Math.random() *args[1].valueOf()) + 1; 
      var rollembed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Puissance  **"+ rproll + "**" )                         
          return message.channel.send(rollembed);      
      //message.reply('Ton roll est de '+ rproll );               
    }                                    

    if (message.content === "=aide"){
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
      
      if (message.content === "=aide fiche"){
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
      if (message.content === "=map"){
        var mapembed = new Discord.RichEmbed()
          .setTitle()
          .setAuthor()
          .setTimestamp()
          .setDescription("")
          .setColor("#dc143c")
          .setImage('https://cdn.discordapp.com/attachments/701809662567252012/701809978452738129/c43crorjf6.png')
          .setFooter("Naenelis Bot");
          return message.channel.send(mapembed);
      
      }  
      if (message.content === "="){
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
      if (message.content === "!quetes"){
        var quetesembed = new Discord.RichEmbed()
          .setAuthor("Quêtes disponibles :", bot.user.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setDescription("Voici les quêtes actuellement disponibles :")
          .addField("<:3263_Blank:697073139099893780>", " 1: En Cours | rang requi: [D] \n 2: En Cours | rang requi: [D]\n 3: En Cours | rang requi: [D]\n 4: En Cours | rang requi: [D]")         
          .setFooter("Naenelis Bot");
          return message.channel.send(quetesembed);      
                    
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
      if (message.content.includes ('!kiss')) {
        var kissembed = new Discord.RichEmbed()
          .setAuthor("Bisou !!!!!", message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/492009468767502346/697880045028376626/giphys.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(kissembed);      
                    
      }
      if (message.content.includes ('!baka')) {
        var bakaembed = new Discord.RichEmbed()
          .setAuthor("Baka !!!!!", message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/492009468767502346/697883333467832380/206263500001202.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(bakaembed);      
                    
      }
      if (message.content.includes ('!punch')) {
        var punchembed = new Discord.RichEmbed()
          .setAuthor("Coup de poing !", message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/492009468767502346/697881575185973266/tenor_1.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(punchembed);      
                    
      }
      if (message.content.includes ('!bang')) {
        var bangembed = new Discord.RichEmbed()
          .setAuthor("Bang !", message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/492009468767502346/697882081371619448/EKpw8eo.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(bangembed);      
                    
      }
      if (message.content.includes ('!taz')) {
        var tazembed = new Discord.RichEmbed()
          .setAuthor("Taz Taz !", message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()
          .setImage('https://cdn.discordapp.com/attachments/492009468767502346/697882549736964126/taz.gif')         
          .setFooter("Naenelis Bot");
          return message.channel.send(tazembed);      
                    
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
      if (message.content === ("!Whis_P")) {
        message.reply('**crache par terre')


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
      if (message.content === "!rank") {
        if(!xp[message.author.id]){
          xp[message.author.id] = {
            xp: 0,
            level: 1
         };
       }
         let curxp = xp[message.author.id].xp;
         let curlvl = xp[message.author.id].level;
         let nxtLvlXp = curlvl * 300;
         let difference = nxtLvlXp - curxp;
       
         let lvlEmbed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setColor("#dc143c")
         .addField("Level", curlvl, true)
         .addField("XP", curxp, true)
         .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
       
         message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});       
      }
      if (message.content === "!top") {
        for (let cpt = 0; cpt < xp.length -1; cpt++) {
         let curxp = xp[message.author.id].xp;
         let curlvl = xp[message.author.id].level;
         let nxtLvlXp = curlvl * 300;
         let difference = nxtLvlXp - curxp;
       
         let lvlEmbed = new Discord.RichEmbed()
         .setAuthor(message.author.username)
         .setColor("#dc143c")
         .addField("Level", curlvl, true)
         .addField("XP", curxp, true)
         .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
       
         message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});  
        }     
      }
      if (message.content === "=book"){
        var menuembed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL)       
          .setColor("#dc143c")
          .setTimestamp()  
          .addField("<:3263_Blank:697073139099893780>", "**📖 <a:3770_this_animated_right:697063197399711844> Voir les emplacements prédéfinis** ")      
          .addField("<:3263_Blank:697073139099893780>", "**🔍 <a:3770_this_animated_right:697063197399711844> Ouvrir le menu d'aide** ")    
          .addField("<:3263_Blank:697073139099893780>", "**⚙️ <a:3770_this_animated_right:697063197399711844> Ouvrir le menu Option** ")  
          .setFooter("")
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
bot.on('message', message => {
  if(message.content.startsWith('alldm')){
 let cont = message.content.slice(1).split(" ")
         let args = cont.slice(1)
         let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
       message.guild.members.forEach((player) => {
        var enzoembed = new Discord.RichEmbed()
        .setTitle("Informations du serveur")
        .setDescription(`Bonjour je suis désolé de te mp comme ça mais je viens de me lancer à plein temps dans le maquinat sur instagram et j'ai comme rêve de devenir un grand influenceur. \n Bien que je sois différent des autres les origines ne comptent pas et je compte bien casser les codes de ce réseau social.`)
        .setColor("#15f153")
        .setThumbnail(sicon)
        .setFooter("Naenelis Bot");
           message.guild.member(player).send(enzoembed);
 });
     }
 })
