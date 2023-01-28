const client = {
    nome: "Jonatas",
    idade: 18,
    email: "jonatas3ds@gmail.com",
    telefone: ["92988123722", "92993168771"],
};

client.enderecos = [
    {
        rua: "R. União",
        numero: 597,
        apartamento: true,
        complemento: "ap 903",
    }
];

for (let chave in client) {
    let tipo = typeof client[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} possui a propriedade ${client[chave]}`);
    }
}



