const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = ['8', '7', '5', '6'];

const aprovados = alunos.filter((_, i) => medias[i] >= 7);
const reprovados = alunos.filter((_, i) => medias[i] < 7);

console.log(`Os alunos aprovados foram: ${aprovados} \nE os alunos reprovados foram: ${reprovados} `);