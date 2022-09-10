class Veiculo {
  rodas = 4;

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo{ //indica qual será o pai via o comando extends
  constructor(){
    super() //puxar atributos e métodos do pai
    this.rodas = 2
  }
}

const moto = new Moto()
console.log(moto)