"use strict"

export default class User {
    constructor(nome, email, idade, cargo, ativo = true) {
        this.nome = nome
        this.email = email
        this.idade = idade
        this.cargo = cargo || 'estudante'
        this.ativo = ativo
    }
    exibirInfos() {
        return `${this.nome}, ${this.email} `
    }
}
