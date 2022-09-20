const sayMyName = () => console.log('Caio')
const runFunction = fn => fn()

//função passada como parâmetro
runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
