const Discord = require("discord.js");
const bot = new Discord.Client();
var userTickets = new Map();

bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Protecting 758 guilds', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })

bot.on("message", message => {
    if(message.author.bot) {
        if(message.embeds.length === 1 && message.embeds[0].description.startsWith('React')) {
            message.react(':ticketreact:625925895013662721')
            .then(msgReaction => console.log('Reacted.'))
            .catch(err => console.log(err));
        }
        if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket Support') {
            message.react(':checkreact:625938016510410772')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
    };
    /**
     * This was just used to send an initial embed message.
     * I copied the ID of the embed message sent and used that to check if reactions were
     * added to that. Check the 'raw' event.
     */
    if(message.content.toLowerCase() === '?sendmsg') {
        const embed = new discord.RichEmbed();
        embed.setAuthor(client.user.username, client.user.displayAvatarURL);
        embed.setDescription('React to this message to open a support ticket');
        embed.setColor('#F39237')
        message.channel.send(embed);
    }
});

/**
 * PLEASE NOTE: ticketreact and checkreact are my OWN custom emojis.
 * You need to modify it to match your own emojis.
 */
client.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') { // Check if the event name is MESSAGE_REACTION_ADD
        if(payload.d.emoji.name === 'ticketreact') // If the emoji is ticketreact
        {
            if(payload.d.message_id === '625926893954400266') { // Here we check if the id of the message is the ID of the embed that we had the bot send using the ?sendmsg command.
                let channel = client.channels.get(payload.d.channel_id) // Get the proper channel object.
                if(channel.messages.has(payload.d.message_id)) { // Check if the channel has the message in the cache.
                    return;
                }
                else { // Fetch the message and then get the reaction & user objects and emit the messageReactionAdd event manually.
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('ticketreact:625925895013662721');
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    })
                    .catch(err => console.log(err));
                }
            }
        }
        // Check if the emoji is checkreact, meaning we're deleting the channel.
        // This will only be significant if our bot crashes/restarts and there are additional ticket channels that have not been closed.
        else if(payload.d.emoji.name === 'checkreact') {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
            else {
                channel.fetchMessage(payload.d.message_id)
                .then(msg => {
                    let reaction = msg.reactions.get('checkreact:625938016510410772');
                    let user = client.users.get(payload.d.user_id);
                    client.emit('messageReactionAdd', reaction, user);
                })
                // Additional code that I did not need, but leaving it here for future purposes.
                /*
                .then(msg => msg.embeds.length === 1 && msg.embeds[0].title === 'Ticket Support' ? Promise.resolve(msg.channel) : Promise.reject('Incorrect Msg')
                ).then(ch => ch.delete('closing ticket'))
                .then(guildChannel => console.log("Deleted " + guildChannel.name))
                .catch(err => console.log(err)); */

            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === 'ticketreact') { // If the emoji name is ticketreact, we will create the ticket channel.
        /**
         * Here we need to check the map to see if the user's id is in there, indicating they have a ticket.
         * We also need to check if there are any other guild channels with their name concatenated with 's-ticket'. We need to 
         * check this case because the bot may have crashed or restarted, and their ID won't be stored in the map.
         */
        if(userTickets.has(user.id) || reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            user.send("You already have a ticket!"); // Send user msg indicating they have a ticket.
        }
        else {
            let guild = reaction.message.guild;
            // Create channel based on permissions. Note, you need to modify the permissionsOverwrites array to fit your needs for permissions.
            guild.createChannel(`${user.username}s-ticket`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },
                    {
                        allow: 'VIEW_CHANNEL',
                        id: '625907626303160354'
                    }
                ]
            }).then(ch => {
                userTickets.set(user.id, ch.id); // Once ticket is created, set the user's id as a key mapping to the channel id.
                let embed = new discord.RichEmbed();
                embed.setTitle('Ticket Support');
                embed.setDescription('Please briefly explain your problem here and a staff member will get back to you shortly.');
                embed.setColor('#40BCD8');
                ch.send(embed) // Send a message to user.
            }).catch(err => console.log(err));
        }
    }
    else if(reaction.emoji.name === 'checkreact') {
        // If emoji is checkreact, they are trying to close the ticket.
        if(userTickets.has(user.id)) {
            if(reaction.message.channel.id === userTickets.get(user.id)) {
                let embed = new discord.RichEmbed();
                embed.setDescription("Ticket will be closed in 5 seconds.")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('closing ticket')
                    .then(channel => {
                        console.log("Deleted " + channel.name);
                    })
                    .catch(err => console.log(err));
                }, 5000);
            }
        }
        // This case is really for handling tickets that were not closed by the bot due to the bot possibly crashing.
        // In order for this to actually work, the user needs to have a ticket opened already.
        else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            let embed = new discord.RichEmbed();
            embed.setDescription("Ticket will be closed in 5 seconds.");
            reaction.message.channel.send(embed);
            setTimeout(() => {
                reaction.message.guild.channels.forEach(channel => {
                    if(channel.name.toLowerCase() === user.username + 's-ticket') {
                        channel.delete().then(ch => console.log('Deleted Channel ' + ch.id))
                    }
                });
            }, 5000);
        }
    }
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
          .addField("├ **!aide Caractère | Physique :**  ")
          .addField("└┉╴┐ 『                ۞۞۞۞۞                』 ┌╴┉┘");
          return message.channel.send(ficheembed);      
                    
      }
      if (message.content.includes('!map')) {
        message.reply(" ``` ```Voici une carte non-exhaustive de ce à quoi ressemble le monde pour vous donner une idée. Les points noirs représentent les capitales.   https://cdn.discordapp.com/attachments/695728674846015545/695729234148327455/Map_serv.png ``` ```")
      }
      
      if (message.content.includes('!contexte')) {
        message.reply(" ``` ```  **Autrefois, il y a une guerre de commerce.Cette guerre s'est d'abord présentée sous forme de taxes sur les marchandises qui circulaientPlus les tensions montaient, plus cette guerre qui était déjà préssentie par la plupart s'approchaitSi ces tensions ont commencé à monter, c'est parce que le roi de l'Ouest, un nom, a prétendu détenir un précieux remède pour la maladie de la peste. Mais, avide de richesses, il a promis de le commercialiser pour des prix exhorbitants. Etant les seuls détenteurs de ce remède et de sa fabrication, les commercants du royaume avaient un monopole total dessus et pouvaient donc le vendre au prix qui leur chantaitLes gens suivirent et achetèrent le remède à n'importe quel prix, sauf qu'il s'est avéré qu'une semaine plus tard après sa mise en vente, un espion du Nord a appris que c'était un faux et que l'Ouest n'avait pas trouvé ce remède miracle.Tout le monde s'était fait berner en beauté et c'est là que les tensions commerciales ont commencé à monterIl y eut beaucoup d'autres cas plus minimes de ce genre qui favorisèrent ce cercle vicieuxLes royaumes qui travaillaient autrefois main dans la main se préparaient et s'armaient en vue d'une guerre qui parraissait de plus en plus inévitableLeur haine était telle qu'on assassina le roi de l'Est. Cela fut l'élément déclencheur de cette guerre.Donc la guerre dura pendant 1 an.Et les dragons dans tout ça, ils observaient les humains depuis les cieux. Dépités de voir leur stupidité décidèrent de séparer le royaume de l'Ouest des autres continentsCe fut une des rares fois dans l'histoire où le dragon géant ancestral qui supporte leur royaume s'est posé sur les terres du centre.Cela s'est passé il y a 4 ans et depuis, le commerce entre les différents royaumes redémarre même si il reste des haines et des tensions.Certains veulent la guerre, d'autres la paix. C'est à vous de décider du destin des royaumes** ``` ```")
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

