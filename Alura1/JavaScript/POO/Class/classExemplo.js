class User {
    constructor(nome, email, idade, cargo, ativo = true) {
        this.nome = nome
        this.email = email
        this.idade = idade
        this.cargo = cargo || 'estudante'
        this.ativo = ativo
    }
    exibirInfos() {
        return `${this.nome}, ${this.email} `
    }
}

const novoUser = new User('Jonatas', 'jonatas@gmail.com', 18);
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser));
