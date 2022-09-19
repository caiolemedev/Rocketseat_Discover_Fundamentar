//Exemplo JS
const cart = {
  quantity: 2,
  total: 200
}

cart.quantity = 3 //isso é ruim, não recomendado

const newCart = { ...cart, quantity: 3 } //maneira correta, recomendado

//Exemplo em ReactJS
const [amount, setAmout] = useState(0)

amount = 2 //ruim, não recomendado

setAmout(2) //bom, recomendado
