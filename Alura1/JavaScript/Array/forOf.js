const notas = [8, 6, 8, 10];

let soma = 0;

for (let nota of notas) {
    soma += nota;
}

const media = soma / notas.length;

console.log(`A média das notas é ${media}`);