class Atleta {
  peso
  categoria

  constructor(peso) {
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'infantil'
    } else if (this.peso <= 65) {
      this.categoria = 'juvenil'
    } else {
      this.categoria = 'adulto'
    }
  }
}

class Lutador extends Atleta {
  //herda característica do atleta
  constructor(peso) {
    super(peso) //Herda o conceito de peso do atleta
  }

  definirCategoria() {
    if (this.peso <= 54) {
      this.categoria = 'pluma'
    } else if (this.peso <= 60) {
      this.categoria = 'leve'
    } else if (this.peso <= 75) {
      this.categoria = 'meio-leve'
    } else {
      this.categoria = 'pesado'
    }
  }
}

const atleta = new Atleta(47)
console.log(atleta.categoria) //definição de categoria não está funcionando

const lutador = new Lutador(59)
console.log(lutador.definirCategoria()) //definição de categoria não está funcionando
