exports.pickRandomQuote = () => {
	const quotes = ["a", "b", "c", "d"]
	const message = quotes[Math.round(Math.random() * quotes.length)]
	return message
}
