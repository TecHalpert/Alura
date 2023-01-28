function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

var meucarro = new Carro("Eagle", "Talon TSi", 1993);
var carroDeKen = new Carro("Nissan", "300ZX", 1992);
var carroDeVPG = new Carro("Mazda", "Miata", 1990);

console.log(meucarro);
console.log(carroDeKen);
console.log(carroDeVPG);

