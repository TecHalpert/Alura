const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);

const objetoEmString = JSON.stringify(dados);
console.log(objetoEmString);
console.log(typeof objetoEmString);
console.log(objetoEmString.nome);

const stringEmObjeto = JSON.parse(objetoEmString);
console.log(stringEmObjeto);