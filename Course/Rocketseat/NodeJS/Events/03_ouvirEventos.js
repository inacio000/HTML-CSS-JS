const { EventEmitter } =  require('events')

const ev = new EventEmitter()

ev.on('Saysomething', (messange) => {
    console.log('I can hear you: ', messange)
})

ev.emit('Saysomething', "Inacio")
ev.emit('Saysomething', "Inacio")
ev.emit('Saysomething', "Inacio")