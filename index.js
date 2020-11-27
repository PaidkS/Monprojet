const Discord = require("discord.js");
const bot = new Discord.Client();



bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('No Troll No Limit', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })

  bot.on("message", message => {
if(message.content.includes("sdqffqfqf")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}
       

if (message.content === "=aide"){
  var helpembed = new Discord.RichEmbed()
    .setAuthor("Bot de test", bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription("**Voici les commandes de base du bot :\nLe préfixe du bot est =**")
    .setColor("#dc143c")
    .addField("<:3263_Blank:697073139099893780>","Commandes :")
    .addField("``menu`` ``contexte`` ``fiche`` ``serverinfo`` ``map`` ``menu`` ``calîn`` ``bisous``","<:3263_Blank:697073139099893780>")     
    .setFooter("Bot en dev chakal");
    message.author.sendMessage(helpembed);
 
              
}
if (message.content === "=menu"){
  var menuembed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)       
    .setColor("#dc143c")
    .setTimestamp()  
    .addField("<:3263_Blank:697073139099893780>", "**📖 <a:3770_this_animated_right:697063197399711844> Ouvrir le menu rp** ")      
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
if(command === "!notroll"){

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peux pas fdp !");

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send("Mentionne ya zbi");
  let role = message.guild.roles.find(r => r.name === "No troll !");
  if(!role){
    try {
      role = await message.guild.createRole({
        name: "No troll",
        color:"#000000",
        permissions:[]
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack)
    }
  }

  if(toMute.roles.has(role.id)) return message.channel.send('Il est déjà No trollé !');

  await(toMute.addRole(role));
  message.channel.send("No troll fdp ");

  return;
}
                                                                                  
});
