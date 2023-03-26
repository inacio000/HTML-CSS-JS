names = [
    'Inacio',
    'Abouba',
    'Peterson',
    'Queta',
    'Eunilcia'
]

function getRandonTheme(num) {
    return Math.floor(Math.random() * num + 1)
}

// console.log(getRandonTheme(5))

for(let nameRandom of names) {
    console.log(`${nameRandom}: ${getRandonTheme(5)}`)
}