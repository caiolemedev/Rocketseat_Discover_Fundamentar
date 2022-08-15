console.log('a')
console.log('b')

let temp = 38.3
let highTemp = temp >= 37.5
let midTemp = temp < 37.5 && temp >= 37

if (highTemp) {
  console.log('Está com febre alta!')
} else if (midTemp) {
  console.log('Está com febre moderada!')
} else {
  console.log('Não está com febre!')
}

let expression = 'a'

switch (expression) {
  case 'a':
    console.log('Código para case a')
    break
  case 'b':
    console.log('Código para case b')
    break
  default:
    console.log('Default')
    break
}

function calculate(num1, operator, num2) {
  let result = 0

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(4, '*', 8))

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log(name)
}

try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('Após o throw, try e catch')

sayMyName()

console.log('Sem o ttc o erro trava a aplicação')
