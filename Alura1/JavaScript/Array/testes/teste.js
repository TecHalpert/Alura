const nomes = ["Jonatas", "Fernanda"];
const notas = [9, 5];

const ambos = [nomes, notas];

ambos[0].push("Roberto");
ambos[1].push("7");


for (var i = 0; i < notas.length; i++) {
    console.log(`O aluno(a): ${ambos[0][i]} teve a média ${ambos[1][i]} `);
    console.log(ambos[1][i] >= 6 ? "Vc foi aprovado" : "Vc foi reprovado");
}

