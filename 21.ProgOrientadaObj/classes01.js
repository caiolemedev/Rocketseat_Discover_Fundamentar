//definir classe
class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }

  dizerNome() {
    console.log(this.nome)
  }
}

const pessoa = new Pessoa('Caio')
pessoa.dizerNome()
