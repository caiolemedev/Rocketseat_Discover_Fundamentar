var clima = 'Quente'
console.log(clima)
clima = 'Frio'
console.log(clima)
const clima2 = 'Quente'
console.log(clima2)

var tipo = true
console.log(typeof tipo)

//iniciando um bloco

let y = 1
{
  //console.log(z) aqui temos erro "cannot access"
  var x = 0
  y = 2 //entra na variável y declarada anteriormente
  const z = 5
  console.log(x)
  console.log(y)
  console.log(z)
}
console.log(x)
console.log(y)
//console.log(z) aqui temos erro "is not defined"
