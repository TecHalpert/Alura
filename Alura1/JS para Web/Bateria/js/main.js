function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play;
    } else {
        alert('Elemento não encontrado ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    // const tecla foi criada pra diminuir o código apenas.
    const tecla = listaDeTeclas[i];
    // pega a 2 class do elemento tecla pra ser usada no idAudio
    const instrumento = tecla.classList[1];
    // pega o elemento do instrumento e incrementa no som pra poder acontecer a mudança de som.
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' ||
            evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

