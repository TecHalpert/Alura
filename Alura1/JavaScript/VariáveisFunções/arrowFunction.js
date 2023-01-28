const apresentar = nome => `meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

console.log(apresentar("Jonatas"));
console.log(soma(2, 3));

const somaNP = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return "somente número de 1 a 9"
    } else {
        return n1 + n2;
    }
}

console.log(somaNP(2, 4))