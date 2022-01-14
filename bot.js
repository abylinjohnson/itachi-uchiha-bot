require("dotenv").config();
const { Client, Intents, Message } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Hello Itachi") {
    msg.reply("Hello nice to meet you!");
  }
  if (msg.content === "spam everyone!") {
    if (msg.author.id === "763773932817743883") {
      msg.channel.send("@everyone");
      msg.channel.send("@everyone");
      msg.channel.send("@everyone");
      msg.channel.send("@everyone");
      msg.channel.send("@everyone");
      msg.channel.send("@everyone");
    } else {
      msg.reply("You cant do that!!!");
    }
  }
  if (msg.author.id === "763773932817743883") {
    msg.react("❤️");
  }
});

client.login(process.env.BOT_TOKEN);

//bot id
