const Livro = {
    nome: "Lenda de Ghanor",
    editora: "Jovem Nerd",
    paginas: "260",
    anunciar: function () {
        console.log(`A editora ${this.editora} está com o mais novo lançamento ${this.nome} que possui exatas ${this.paginas} paginas`);
    }
}

Livro.anunciar();
//_________________________________________________________________________________________________

const Livro2 = function (nome, editora, paginas) {
    gNome = nome,
        gEditora = editora,
        gPaginas = paginas

    this.getNome = function () {
        return gNome
    }
    this.getEditora = function () {
        return gEditora
    }
    this.getPaginas = function () {
        return gPaginas
    }
}

const Ghnor = new Livro2("Jovem Nerd", "Lenda de Ghanor", "500");
console.log(NerdCast.getNome())
console.log(NerdCast.getEditora())
console.log(NerdCast.getPaginas())

//_________________________________________________________________________________________________

class Livro3 {
    constructor(nome, editora, paginas) {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    anunciarTitulo() {
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} e um livro da editora ${this.editora} e ele possui ${this.paginas} pagians`);
    }
}

const NodeJS = new Livro3("Primeiros passos com NODEJS", "Casa do Código", "467");
NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();

class LivroColessao extends Livro3 {
    constructor(nome, podcast) {
        super(nome)
        this.podcast = podcast
    }

    descreverPodcast() {
        console.log(`O livro ${this.nome} faz parte do podcast ${this.podcast}`)
    }
}

const NerdCast = new LivroColessao("Ozob", "NerdCast");

NerdCast.descreverPodcast();

// erros:
// console.log(NerdCast);
// console.log(NerdCast.descreverPodcast);
// NerdCast.descreverPodcast


