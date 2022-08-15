let num1 = 1

;(function () {
  console.log('Oi!')
})()

console.log(num1 + 1)
console.log(++num1)
console.log(--num1)
console.log(false ? 'alo' : 'nada') //unico operador ternário do js

let name1 = new String('Caio')
name1.surName = 'Leme'
let num2 = new Number(30)
let date1 = new Date('2022-08-15')
console.log(name1, num2)
console.log(date1)

console.log(typeof name1)
delete name1.surName
console.log(name1)

console.log(5 * 3.3) //multiplicação
console.log(34.2 / 3) //divisão
console.log(43.76 + 32.54) //soma
console.log(212.2 - 32.5) //subtração
console.log(13.5 % 3) //resto (reminder)

let num3 = 0
num3++

console.log(++num3) //incremento
console.log(--num3) //decremento
console.log(num3--)
console.log(num3)

console.log(3 ** 3) //exponencial

let num4 = (2 + 3) * 5
console.log(num4)

let one = 1
let two = 2

//comparativo igual a
console.log(two == 1)
console.log(one == '1')

//comparativo diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != '1')

//comparativo estritamente igual
console.log(one === 1)
console.log(one === '1')

//comparativo estritamente diferente de
console.log(two !== 2)
console.log(two !== '2')

//comparativo maior que
console.log(one > two)

//comparativo maior igual
console.log(one >= 1)
console.log(two >= 1)

//comparativo menor que
console.log(one < two)

//comparativo menor igual que
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

let num5 = 1
num5 += 2
console.log(num5)
num5 -= 1
console.log(num5)
num5 *= 2
console.log(num5)
num5 /= 2
console.log(num5)
num5 %= 2
console.log(num5)

let pao = true
let queijo = false
// AND &&
console.log(pao && queijo)
// OR ||
console.log(pao || queijo)
// NOT !
console.log(!queijo)

//operador ternário
const niceBreakfast = pao && queijo ? 'Cafe top' : 'Cafe ruim'
console.log(niceBreakfast)

let age = 30
const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)

//operador de string
console.log('a' == 'b')
console.log('a' == 'a')
let alpha = 'alpha'
console.log(alpha + ' a ' + alpha)
alpha += 'beth'
console.log(alpha)

//falsy
console.log(false ? 'verdadeiro' : 'false')
console.log(0 ? 'verdadeiro' : 'false')
console.log(-0 ? 'verdadeiro' : 'false')
console.log('' ? 'verdadeiro' : 'false')
console.log(null ? 'verdadeiro' : 'false')
console.log(undefined ? 'verdadeiro' : 'false')
console.log(NaN ? 'verdadeiro' : 'false')

//falsy
console.log(true ? 'verdadeiro' : 'false')
console.log({} ? 'verdadeiro' : 'false')
console.log([] ? 'verdadeiro' : 'false')
console.log(1 ? 'verdadeiro' : 'false')
console.log(38.8 ? 'verdadeiro' : 'false')
console.log('0' ? 'verdadeiro' : 'false')
console.log('false' ? 'verdadeiro' : 'false')
console.log(-1 ? 'verdadeiro' : 'false')
console.log(Infinity ? 'verdadeiro' : 'false')
console.log(-Infinity ? 'verdadeiro' : 'false')