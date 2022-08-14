//app de frases motivacionais

//declaration / statement
function createPhrases() {
  console.log('Estudar é muito bom!')
  console.log('Paciência e persistência!')
  console.log('Revisão é a mãe do aprendizado!')
}

//rodar a função
createPhrases()

//colocando parâmetros na função
const sum = function (num1, num2) {
  let tot = num1 + num2
  return tot
}

//enviando argumentos
sum(2, 3)
sum(54, 0.345)

//console.log(num1) erro pois o parâmetro só existe dentro da função

//usando variáveis como argumentos e retornando valores
let num3 = 23
let num4 = 9.432
sum(num3, num4)

console.log(`O primeiro número é ${num3}`)
console.log(`O segundo número é ${num4}`)
console.log(`A soma é ${sum(num3, num4)}`)
//console.log(tot) erro pois só existe dentro da função agora

//function scope
let subject = 'create video'

function createThink() {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)

//function hoisting + arrow function

const sayMyName = name1 => {
  console.log(name1)
}

let name1 = 'Caio'
sayMyName(name1)

//callback function
function sayMyName2(name2) {
  console.log('antes de executar a função')
  name2()
  console.log('depois de executar a função')
}

sayMyName2(() => {
  console.log('estou em um callback')
})

//function() constructor

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}
const Caio = new Person('Caio')
const Joao = new Person('Joao')
console.log(Caio)
console.log(Joao)
console.log(Caio.walk())
console.log(Joao.walk())
