const clientes = require("./clientes.json");

const filtrarApSemCompl = clientes => {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtro = filtrarApSemCompl(clientes);
console.log(filtro);