// function imprimeTexto(texto) {
//     console.log(texto);
// }

// imprimeTexto('oi');

// function soma() {
//     return 2 + 2;
// }
// return tem que ser a última coisa do código.
// console.log(soma());

function soma(n1, n2) {
    return n1 + n2;
}

// colocando =1 para caso eu esqueça algum paramentro na chamada de função n de erro.
function multi(n1 = 1, n2 = 1) {
    return n1 * n2;
}

console.log(multi(soma(5, 3), soma(3, 5)))
console.log(multi(soma(5, 3))) //NaN

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
cumprimentaPessoa(); //função q precisa de paramentro e ele n é dado acaba como undefined;



