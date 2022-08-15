//estrutura for
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i)
}

let y = 9312840389
while (y > 10) {
  console.log(y)
  y /= 35
}

let name1 = 'Caio'
let names = ['Joao', 'Paulo', 'Pedro']

for (let char of name1) {
  console.log(char)
}

for (let name2 of names) {
  console.log(name2)
}

let person = {
  name: 'Caio',
  age: 30,
  weight: 92.3
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}
