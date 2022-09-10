class Parafuso {
  //Superclasse - Abstrata
  constructor() {
    if (this.constructor === Parafuso) {
      console.error('Classe abstrata não pode ser instanciada') //verificar como usar throw new Error
    }
  }
  get tipo() {
    console.error('Método "get tipo()" precisa ser implementado') //verificar como usar throw new Error
  }
}

class Fenda extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return 'philips'
  }
}

class Allen extends Parafuso {}

//criar e usar

const parafuso = new Parafuso() //imprime o erro na tela mas não impede a criação do objeto
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(parafuso.tipo) //exibe erro do tipo get não implementado, mas o objeto existe
console.log(fenda.tipo, philips.tipo) //funcionam normalmente
console.log(allen.tipo) //criado mas o método get não existe
