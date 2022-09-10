//Maneira estrutural - alteração pode gerar muitos danos na aplicação
let altura1 = 50
let largura1 = 60

function calcularArea1() {
  return altura1 * largura1
}

let area1 = calcularArea1()
console.log(area1)

//Com orentação a objetos
//criando a classe
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

//criando um objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)
