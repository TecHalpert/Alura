"use strict"
import User from "./User.js";

class Docente extends User {
    constructor(nome, email, idade, role = 'Admin', ativo = true) {
        super(nome, email, idade, role, ativo)
    }

    aprovaEstudando(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}`;
    }

}

const novoDocente = new Docente('Jonatas', 'jonatas@gmail.com', '18');

console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudando("Jonatas", "Sistema de Informações"))