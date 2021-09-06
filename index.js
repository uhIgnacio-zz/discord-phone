const Discord = require("discord.js-selfbot-v11"); // Discord.js patched 4 selfbots
const chalk = require("chalk"); // Color
require("dotenv").config(); // .env

const client = new Discord.Client({
  ws: { properties: { $browser: "Discord iOS" } },
}); // yes.

client.on("ready", () => {
  console.clear();
  console.log(chalk.magentaBright`Detected user ${client.user.tag}`);
});

client.login(process.env.TOKEN);
