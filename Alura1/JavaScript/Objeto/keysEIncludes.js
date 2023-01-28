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

const chaves = Object.keys(client);

//o ! no inicio do if é para negar a expressão 
if (!chaves.includes("cleison")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}
