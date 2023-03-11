const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login (process.env.TOKEN);
bot.on("ready", () => {
bot.user.setActivity('Laitnouartonlaitbeze', { type: 'STREAMING', url:'https://www.twitch.tv/monstercat'})
  console.log("Bot [ON]")
  })
  bot.on("message", message => {
if(message.content.includes("AR!kelsairv")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}
    }
})
