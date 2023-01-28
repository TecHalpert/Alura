const nomes = ["Ray", "Kylo", "Han"];
const notas = [8, 7, 5, 7]
let soma = 0;

// metodo 1
nomes.forEach(function (nome) {
    console.log(nome);
})

// metodo 2 - arrow function 
nomes.forEach((nome) => {
    console.log(nome);
})

notas.forEach((nota) => soma += nota);
const media = soma / notas.length;
console.log(`A média é ${media}`)

// metodo 3
function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome);