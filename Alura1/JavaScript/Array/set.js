const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(`${nomesAtualizados}`)

//ou 

const nomesModificados = [...new Set(nomes)];

console.log(`${nomesAtualizados}`)
