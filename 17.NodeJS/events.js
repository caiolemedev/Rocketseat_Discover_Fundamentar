const { EventEmitter } = require('events')
const ev = new EventEmitter() //cria a variável para o evento

ev.once('saySomething', message => {
  console.log('Estou te ouvindo!', message)
}) //ouvir o evento

ev.emit('saySomething', 'Caio') //emite um evento
ev.emit('saySomething', 'João') //emite outro evento
