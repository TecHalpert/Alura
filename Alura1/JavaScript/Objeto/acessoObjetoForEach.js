const usuario = {
    nome: "Jonatas",
    idade: "18",
    cpf: "70552013226",
    email: "jonatas3ds@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${usuario[chave]} `)
})

//const chaves = Object.keys(usuario);

// for (i in chaves) {
//     console.log(`Testando ${chaves[i]}`);
// }