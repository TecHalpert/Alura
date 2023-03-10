"use strict"

import User from "./User.js";

class Admin extends User {
    constructor(nome, email, idade, role = 'Admin', ativo = true) {
        super(nome, email, idade, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado por ${this.nome}, possui ${vagas} vagas `
    }
}
//super é como chamamos a classe que está fornecendo os parametros e metodos para outra classe herdar.
//pode ser chamado como classe parent ou classe chield

const novoAdmin = new Admin('Jonatas', 'jonatas@gmail.com', 18);

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("ADS", "50"))

