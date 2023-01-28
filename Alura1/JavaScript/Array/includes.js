const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNomeENotas(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        const [alunos, medias] = listaDeAlunosEMedias;

        const i = alunos.indexOf(aluno);
        const mediaAluno = medias[i];

        console.log(`O aluno: ${aluno} está cadastrado!\nE tem a média ${mediaAluno}`);
    } else {
        console.log('Aluno não encontrado!')
    }
}

exibirNomeENotas("Juliana");