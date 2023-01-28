const pessoa = {
    nome: 'Ju',
    idade: 25,
}
const pessoaComTelefone = {
    ...pessoa,
    telefone: 12121212121,
}
console.log(pessoaComTelefone);

const { nome } = pessoa
const { idade } = pessoa
console.log(nome);
console.log(idade);

const imprimeDados = ({ nome, idade }) => {
    console.log(nome, idade);
}

imprimeDados(pessoa);