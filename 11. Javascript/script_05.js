var name1
name1 = 'Caio'
console.log(name1)
console.log(typeof name1)

let age, isHuman
age = 30
isHuman = true

console.log(name1, age, isHuman)

console.log(name1 + ' tem ' + age + ' anos ') //concatenando
console.log(`${name1} tem ${age} anos`) //interpolando

const person = {
  name: 'Caio',
  age: 30,
  weight: 91.5,
  isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

const animals = [
  'Lion',
  'Monkey',
  'Cat',
  {
    name: 'Dog',
    age: 3
  }
]

console.log(animals[0])
console.log(animals.length)
console.log(animals[3])
console.log(animals[3].name)

//ex1:
var weight
//ex2:
console.log(typeof weight)

//ex3:
let name2 = 'João'
let age2 = 15
let stars = 3.5
isSubscribed = true

console.log(typeof name2)
console.log(typeof age2)
console.log(typeof stars)
console.log(typeof isSubscribed)

//ex4:
let student1 = {
  name: 'Marcos',
  age: 18,
  stars: 4.5,
  weight: 84.8,
  isSubscribed: false
}

console.log(typeof student1)
console.log(
  `O estudante ${student1.name} tem ${student1.age} e pesa ${student1.weight} kgs`
)

//ex5:
let students = []
console.log(typeof students)

//ex6:
students = [student1]
//ex7:
console.log(students[0])

//ex7:
const student2 = {
  name: 'Mario',
  age: 20,
  stars: 2.5,
  weight: 64.8,
  isSubscribed: true
}

students[1] = student2
console.log(students)

//ex9: O código informará undefined
console.log(aaa)
var aaa = 1
