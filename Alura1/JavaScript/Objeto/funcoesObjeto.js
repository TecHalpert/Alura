const client = {
    nome: "Jonatas",
    idade: 18,
    email: "jonatas3ds@gmail.com",
    telefone: ["92988123722", "92993168771"],
    saldo: 200,
    efetuaPagamento: (valor) => {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado. Saldo atual: ${this.saldo}`);
        }
    },
};

client.efetuaPagamento(100);

