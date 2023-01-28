const notas = [10, 6, 8, 6];

let somaDeNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDeNotas += notas[i];
}

const media = somaDeNotas / notas.length;

console.log(`A média das notas é ${media}`);