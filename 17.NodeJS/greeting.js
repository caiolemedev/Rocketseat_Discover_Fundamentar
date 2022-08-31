const getFlag = require('./getFlag.js')

console.log(`Olá, meu nome é ${getFlag('--name')}. ${getFlag('--greeting')}`)
