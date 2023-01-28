const notas = [7, 5, 7, 3];

function alterarArray(array, n) {
    array.push(n);

    console.log(`array do parâmetro é ${array}`);
    console.log(`arrayOriginal é ${notas}`);
}

alterarArray([...notas], 5);

