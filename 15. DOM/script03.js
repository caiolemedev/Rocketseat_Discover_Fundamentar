const element = document.querySelector('p')

element.textContent += 'Olá Devs!'

console.log(element.textContent)

const element2 = document.querySelector('.ex2')

element2.innerText = 'Olá Devs!'

const element3 = document.querySelector('.ex3')

element3.innerHTML =
  'Olá <small>Devs</small>! Só essa propriedade aceita parâmetros HTML para alterar o código da página.'

const element4 = document.querySelector('input')

console.log(element4.value)
element4.value = 'Valor qualquer!'

const h1 = document.querySelector('h1')
h1.setAttribute('id', 'titulo')

const h1_ID = document.querySelector('#titulo')
console.log(h1_ID.getAttribute('id'))

h1.removeAttribute('id')
