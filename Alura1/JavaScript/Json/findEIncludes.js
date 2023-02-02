const clientes = require("./clientes.json");

const encontrar = (lista, chave, valor) => {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "4733865848")


console.log(encontrado);
console.log(encontrado2);

