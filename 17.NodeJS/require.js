//Módulos nativos
const path = require('path')
console.log(path.basename(__filename))
//Módulos criados
const myModlue = require('./exports.js')
console.log(myModlue)
