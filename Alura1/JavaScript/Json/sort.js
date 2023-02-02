const clientes = require("./clientes.json");

const ordenar = (lista, propriedade) => {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        else if (a[propriedade] > b[propriedade]) {
            return 1;
        } else {
            return 0;
        }
    })
    return resultado;
}

console.log(ordenar(clientes, "nome"));
//para mostrar do modo inverso
console.log(ordenar(clientes, "nome").reverse())