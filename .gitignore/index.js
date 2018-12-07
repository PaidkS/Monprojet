const Discord = require('discord.js');
const bot = new Discord.Client();
//const low = require('lowdb');
//const FileSync = require ('lowdb/adapters/fileSync')
const client = new Discord.Client();

//const adapter = new FileSync('database.json');
//const db = low(adapter);

//db.defaults({histoires: [], xp: []}).write() 
var prefix = ("s!")

bot.on('ready', function() {
    bot.user.setGame("vec FoliiiFolki");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === "s!combat"){
        message.reply("Le système de combat peut paraître compliqué au première abord mais en réalité il est très simple à prendre en mains.


        Tout d'abord avant d'effectuer une action quelle quel soit. (comme attaquer un boss ennemi par exemple) le joueur se verra dans l'obligation de faire un ^^roll.
        Si le nombre obtenue et supérieur a 50 alors l'attaque contre le boss est réussi est dans ce cas la vous devez faire un ^^roll +500. 
        si au contraire le résultat en question et inférieur a 50 dans ce cas vous ratez votre attaque et le boss vous met un coup. dans ce cas vous devez faire ^^roll -500 

        À noté que la valeur des ^^roll + et - change en fonction des paliers

        Exemple 

        Palier de 1 à 5 vous devez faire ^^roll +250/^^roll -250

        Palier de 5 à 10 vous devez faire ^^roll +500/^^roll -500

        maintenant que vous connaissez les commandes de base je vais vous expliquer comment calculer les degats reçu ou au contraire les dégâts que vous infliger a l'ennemie.


        Pour cet exemple nous allons imaginer que vous soyer un combattant niveau 12 il y a 3 statistique qui vont influencer un combat RP et qui sont en rapport avec votre personnage 


        [PV] Tout d'abord, nous avons les PV qui est votre jauge de vie, lorsque vos PV tombent a zéro vous mourez (merci capitaine obvious) :wesmart: 

        [ATK] Ensuite, nous avons l'attaque [ATK] est le pourcentage de dégâts en plus que vous infligerai à un ennemi après avoir réussi un ^^roll +500. Imaginons que koya vous sorte "you rolled 392". Vous devez additionner le résultats de Koya + votre pourcentage d'attaque qui est afficher dans vos stats selon votre niveau, pour cette exemple nous avons pris un combattant niveau 12. au lvl 12 vous aurait un bonus de 9,5 % d'attaque[ATK] il vous suffira de faire 392+9,5% = 429.(modifié)

        Vous allez donc infliger 429 de dégâts a votre ennemie au lieu de 392.(modifié)
        [DEF]= il s'agit de la réduction des dégâts brut. c'est comme pour [ATK] sauf que la il vous suffira de soustraire les dégâts reçu lors d'une attaque ennemie. Exemple, votre combattant niveau 12 possède 98 de défense [DEF] vous faite un ^^roll -500 et Koya vous sort "you rolled -459. vous allez devoir faire 459 - 98 = 364. 

        Vous allez donc recevoir 364 de dégât au lieu de 459");
   
    }
    
    if (message.content === "s!paidks"){
        message.reply("It's my dady");
    }
    
    if (message.content === prefix + "help"){ 
        var embed = new Discord.RichEmbed() 
            .setTitle("Help") 
            .setDescription("Les commandes du bot son") 
            .addField("s!help","Page d'aide", true) 
            .addField("s!solus","Informations sur le jeux", true)
            .addField("s!beta","Informations sur la bêta", true)
            .addField("folki","Ton level", true)
            .addField("s!meme","Un meme aléatoire", true)
            .addField("s!paidks","Moi =)", true)
            .setColor("0xFF0000") 
            .setFooter("Enjoy") 
        message.channel.sendEmbed(embed);
    }
    
}); 
           
