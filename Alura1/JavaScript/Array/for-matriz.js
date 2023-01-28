const nota1 = [8, 6, 8, 10];
const nota2 = [10, 6, 7, 8];
const nota3 = [10, 10, 9, 4];

let notas = [nota1, nota2, nota3];

let media = 0;

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        media += notas[i][j] / notas[i].length;
    }
}

media = media / notas.length
console.log(`A média é ${media}`);
