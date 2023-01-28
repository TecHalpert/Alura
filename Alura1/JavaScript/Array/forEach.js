const notas = [8, 6, 8, 10];
let soma = 0;

notas.forEach(function (nota, i) {
    soma += nota;
    console.log(i);
})

const media = soma / notas.length;

console.log(`A média do aluno foi ${media}`);


