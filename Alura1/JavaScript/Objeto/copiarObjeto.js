const personagem = {
    nome: "Jim Halpert",
    profissao: "vendedor",
    status: "solteiro",
}

const personagem2 = { ...personagem };

personagem2.nome = "Dwight Schrute";

console.log(personagem);
console.log(personagem2);
