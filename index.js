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
