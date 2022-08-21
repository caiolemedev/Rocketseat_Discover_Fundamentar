const element = document.getElementById('titulo')
console.log(element)

const element2 = document.getElementsByClassName('one')
console.log(element2)

const element3 = document.getElementsByTagName('h1')
console.log(element3)

const element4 = document.querySelector('.one')
console.log(element4)

const element5 = document.querySelectorAll('.one')
console.log(element5)

element5.forEach(el => console.log(el))
