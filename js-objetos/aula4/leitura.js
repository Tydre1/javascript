const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

JSON.parse(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);