console.log(Number('9') + 5)

let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

let word = 'Paralelepipedo'
console.log(word.length)

let num1 = 1234
console.log(String(num1).length)

let num2 = 214532.5336563454
console.log(num2)
console.log(num2.toFixed(2))
console.log(typeof num2.toFixed(2))
console.log(Number(num2.toFixed(2).replace('.', ',')))

let word2 = 'Programar é muito bacana!'
console.log(word2)
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

let phrase = 'Eu quero viver o amor!'
console.log(phrase.includes('amor'))

let phrase2 = 'Eu quero viver o amor!'
let myArray = phrase2.split(' ')
console.log(myArray)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLowerCase())

let myArray2 = new Array(5)
console.log(myArray2)

let myArray3 = [
  'a',
  { type: 'array' },
  function () {
    return 'alo'
  }
]
console.log(myArray3.length)
console.log(myArray3[1].type)
console.log(myArray3[2]())

let word3 = 'manipulação'
console.log(Array.from(word3))

let techs = ['html', 'css', 'js']
techs.push('nodejs') //add elemento no final
techs.unshift('sql') //add elemento no começo
techs.pop() //remove o ultimo elemento
techs.shift() //remove o primeiro elemento
console.log(techs.slice(1, 3)) //começa a contar no 0 sempre
let index = techs.indexOf('css') //descobrir a posição de um elemento do array
console.log(index)
techs.splice(index, 1) //primeiro numero é a referência e depois quantos elementos quero remover

console.log(techs)
