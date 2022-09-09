const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0]) //indexação do array pelo index
console.log(pilotos[3]) //outro exemplo

console.log(pilotos.length) //acessar o tamanho do array

//um array é iterável e pode ser usado em um for of
for (let piloto of pilotos) {
  console.log(piloto)
}

pilotos.push('Alonso') //adiciona um elemento no final do array
console.log(pilotos)

const senna = pilotos.find(piloto => piloto === 'Senna') //procura uma informação dentro do array
console.log(senna)

pilotos.splice(1, 1) //retira uma quantidade de valores a partir de um determinado index
console.log(pilotos) //consome processamento pois realoca todos os demais valores do array

