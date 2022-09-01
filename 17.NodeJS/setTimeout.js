//setTimeout irá rodar uma função depois de x ms.
const timeOut = 3000
const finished = () => console.log('Done!')

setTimeout(finished, timeOut)
console.log('Mostrar!')
