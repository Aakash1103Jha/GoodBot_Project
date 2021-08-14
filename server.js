const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] })
require("dotenv/config")

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag} :)`)
})

client.on("messageCreate", (msg) => {
	if (msg.content === "Hello" || msg.content === "hello") {
		msg.reply(`Hey ${msg.author} !!`)
	}
	if (msg.content.includes("sad")) {
		msg.reply(`I'm sorry to hear that ${msg.author}... Hang in there..`)
	}
})

client.login(process.env.TOKEN)
