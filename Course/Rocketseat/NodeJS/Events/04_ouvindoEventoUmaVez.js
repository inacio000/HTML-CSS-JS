const { EventEmitter } =  require('events')

const ev = new EventEmitter()

ev.once('Saysomething', (messange) => {
    console.log('I can hear you: ', messange)
})

ev.emit('Saysomething', "Inacio")
ev.emit('Saysomething', "Inacio")
ev.emit('Saysomething', "Inacio")