
const usuario = {
    nome: "Jonatas",
    idade: "18",
    cpf: "70552013226",
}

console.log(usuario)
console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e os 4 primeiros dígitos do cpf são ${usuario.cpf.substring(0, 4)}`);
console.log(`O usuário ${usuario["nome"]} tem ${usuario["idade"]} anos e os 4 primeiros dígitos do cpf são ${usuario["cpf"].substring(0, 4)}`);

