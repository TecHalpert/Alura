const notas = [10, 9, 5, 5];
// tem que criar outra variável pois o metodo map não altera o array original.
const notasAtt = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtt);


//map string 
const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesAtualizados)

