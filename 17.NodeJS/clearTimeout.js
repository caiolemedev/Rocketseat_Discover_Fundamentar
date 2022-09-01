//clearTimeout cancela um Timeout.
const timeOut = 3000
const finished = () => console.log('Done!')

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
