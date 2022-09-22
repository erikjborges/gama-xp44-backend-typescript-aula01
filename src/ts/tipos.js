"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mensagem_1 = require("./mensagem");
function imprimeMensagem(texto) {
    console.log(`Mensagem: ${texto}`);
}
imprimeMensagem((0, mensagem_1.mensagem)());
/**
 * Tipos basicos
 */
//string
const nome = "erik";
const sobrenome = "borges";
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
const nomeComp = nomeCompleto(nome, sobrenome);
console.log(`Tipo string: ${typeof nomeComp} ${nomeComp}`);
// number
const idade = 31;
const altura = 1.67;
function somaIdadeAltura(idade, altura) {
    return idade + altura;
}
const idadeAltura = somaIdadeAltura(idade, altura);
console.log(`Tipo number: ${typeof idadeAltura} ${idadeAltura}`);
// boolean
const aprovado = true;
const reprovado = false;
const testaValores = (aprovado, reprovado) => {
    return aprovado && reprovado;
};
const testeValores = testaValores(aprovado, reprovado);
console.log(`Tipo boolean: ${typeof testeValores} ${testeValores}`);
// any e void
let valor = 'teste';
//valor = 100;
const concatenaAny = (valor) => {
    console.log(`Tipo any: ${typeof valor} ${valor}`);
};
//const concatAny = concatenaAny(valor);
//console.log(`Tipo any: ${concatAny}`);
concatenaAny(valor);
/**
 * Array
 */
const frutas = ['abacate', 'abacaxi', 'pitaia'];
const verduras = ['couve', 'alface', 'almerao'];
function modificaLista(lista) {
    let novaLista = [];
    for (let item of lista) {
        novaLista.push(`${item} verde`);
    }
    return novaLista;
}
const listaModificada = modificaLista(frutas);
console.log(`Tipo array: ${typeof listaModificada} ${listaModificada}`);
