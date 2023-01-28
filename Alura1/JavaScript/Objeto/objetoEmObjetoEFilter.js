const client = {
    nome: "Jonatas",
    idade: 18,
    email: "jonatas3ds@gmail.com",
    telefone: ["92988123722", "92993168771"],
};

client.enderecos = [{
    rua: "R. União",
    numero: 597,
    apartamento: true,
    complemento: "ap 903",
}]

client.enderecos.push({
    rua: "R. Bom Jesus",
    numero: 041,
    apartamento: false,
});

const apenasApartamento = client.enderecos.filter(
    (endereco) => endereco.apartamento === true
)


console.log(apenasApartamento);
