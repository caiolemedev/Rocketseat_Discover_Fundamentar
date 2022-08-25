function print() {
  console.log('Executada a função print!')
}

const input = document.querySelector('input')

input.onkeydown = function rodar() {
  console.log('Função rodada!')
}

const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

h1.onclick = print

h1.onclick = function f1() {
  console.log('Função f1!')
}

h1.addEventListener('click', function () {
  console.log('Outro momento!')
})

input.onkeypress = function (event) {
  console.log(event.currentTarget.value)
}
