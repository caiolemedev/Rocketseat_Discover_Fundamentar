const { inherits } = require('util') //trazendo a função de herança
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter) //a função que criamos herda as propriedades do EventEmitter

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')
