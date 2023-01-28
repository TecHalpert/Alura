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

const ligaParaClient = (telefoneComercial, telefoneResidencial) => {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaClient(...client.telefone);

const encomenda = {
    destinatario: client.nome,
    ...client.enderecos[0],
}

console.log(encomenda);