const question = [
    "What I learned today?",
    "what made me upset? And What could I do to improve?",
    "What made me happy today?",
    "How many people did I help today?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + question[index] + " > ");
}

ask()

const answers = []

process.stdin.on('data', data => {
    answers.push( data.toString().trim() + '\n') // trim - remove whitespace
    if (answers.length < question.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Today you learned:
        ${answers[0]}

        ${answers[1]} made you upset and you could to improve

        ${answers[2]} made you happy

        You help ${answers[3]}

        See you!
    `)
})