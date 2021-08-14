const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] })
require("dotenv/config")

const { pickRandomQuote } = require("./quotes")

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag} :)`)
})

client.on("messageCreate", async (msg) => {
	if (msg.content.includes("Hello") || msg.content.includes("hello")) {
		msg.reply(`Hey ${msg.author} !! Hope you're doing great today.`)
	}
	if (msg.content.includes("sad")) {
		msg.reply(`I'm sorry to hear that ${msg.author}... Hang in there.. ${pickRandomQuote()}`)
		// msg.reply(`${pickRandomQuote()}`)
	}
})

client.login(process.env.TOKEN)
