const { inherits } = require('util') // inherited - vai herdar as funcionalidades do EventEmitter

const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')

chapolin.on('help', () => console.log(`I! ${chapolin.name} coloured!`))

console.log('So... And now, who will defend you?')
chapolin.emit('help')