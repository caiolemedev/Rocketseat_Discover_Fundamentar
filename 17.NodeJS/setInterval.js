//setInterval irá rodar uma função N vezes depois de X ms.

const timeOut = 1000
const checking = () => console.log('checking!')

setInterval(checking, timeOut)
