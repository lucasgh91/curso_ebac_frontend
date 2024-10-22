function Volkswagen(modelo, cavalos, cor, anoModelo, anoFabricacao) {
  this.modelo = modelo
  this.cavalos = cavalos
  this.cor = cor
  this.anoModelo = anoModelo
  this.anoFabricacao = anoFabricacao

  this.acelerar = function() {
    console.log(`Volkswagen ${modelo} ${cor} com ${cavalos} cavalos acelerando!`)
  }
}

function Amarok(cor, anoModelo, anoFabricacao) {
  Volkswagen.call(this, "Amarok", 300, cor, anoModelo, anoFabricacao)

  this.acelerar = function() {
    console.log(`Amarok ${cor} com 300 cavalos acelerando!`)
  }
}

function Nivus(cor, anoModelo, anoFabricacao) {
  Volkswagen.call(this, "Nivus", 150, cor, anoModelo, anoFabricacao)

  this.acelerar = function() {
    console.log(`Nivus ${cor} com 150 cavalos acelerando!`)
  }
}

function Polo(cor, anoModelo, anoFabricacao) {
  Volkswagen.call(this, "Polo", 120, cor, anoModelo, anoFabricacao)

  this.acelerar = function() {
    console.log(`Polo ${cor} com 120 cavalos acelerando!`)
  }
}

const volks1 = new Volkswagen("Golf", 220, 'Cinza', 2020, 2019)
const volks2 = new Amarok('Preta', 2024, 2023)
const volks3 = new Nivus('Azul', 2023, 2022)
const volks4 = new Polo('Branco', 2018, 2017)

volks1.acelerar()
volks2.acelerar()
volks3.acelerar()
volks4.acelerar()