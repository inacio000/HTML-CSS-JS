const question = [
    "What I learned today?",
    "what made me upset? And What could I do to improve?",
    "What could I do to improve?",
    "What made me happy today?",
    "How many people did I help today?"
]

const ask = (index = 0) => {
    process.stdout.write(question[index] + "\n");
}

ask()

process.stdin.on('data', data => {
    process.stdout.write( data.toString().trim() + '\n') // trim - remove whitespace
    process.exit()
})