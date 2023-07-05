const texto1 = "Olá,mundo!";
const texto2 = "Olá,mundo!";
const senha = "senhaSuperSegura456!";
const stringDeNumero = "234567";

const citacao = 'O André disse "Oi"';
console.log(citacao);

// concatenação (+), podemos usar para juntar número e textos

const texto3 = "André tem " + 5 + " maçãs";

const A = "Adoro";
const B = "você!";

const concatenacao = A + B;
console.log(concatenacao);

// template string ou template literal

var a = 5;
var b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world "
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Bazinga!";
}

tag`Hello ${a + b} world ${a * b}`;
// "Bazinga!"
