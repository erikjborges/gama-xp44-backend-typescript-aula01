import { mensagem } from './mensagem';

function imprimeMensagem(texto: string): void {
    console.log(`Mensagem: ${texto}`);
}

imprimeMensagem(mensagem());

/**
 * Tipos basicos
 */

//string
const nome: string = "erik";
const sobrenome = "borges";

function nomeCompleto(nome: string, sobrenome: string) {
    return `${nome} ${sobrenome}`;
}

const nomeComp = nomeCompleto(nome, sobrenome);
console.log(`Tipo string: ${typeof nomeComp} ${nomeComp}`);

// number
const idade: number = 31;
const altura = 1.67;

function somaIdadeAltura(idade: number, altura: number): number {
    return idade + altura;
}

const idadeAltura = somaIdadeAltura(idade, altura);
console.log(`Tipo number: ${typeof idadeAltura} ${idadeAltura}`);

// boolean
const aprovado: boolean = true;
const reprovado = false;

const testaValores = (aprovado: boolean, reprovado: boolean): boolean => {
    return aprovado && reprovado;
}

const testeValores = testaValores(aprovado, reprovado);
console.log(`Tipo boolean: ${typeof testeValores} ${testeValores}`);

// any e void
let valor: any = 'teste';
//valor = 100;

const concatenaAny = (valor: any): void => {
    console.log(`Tipo any: ${typeof valor} ${valor}`);
}

//const concatAny = concatenaAny(valor);
//console.log(`Tipo any: ${concatAny}`);
concatenaAny(valor);

/**
 * Array
 */
const frutas: string[] = ['abacate', 'abacaxi', 'pitaia'];
const verduras = ['couve', 'alface', 'almerao', 123, true, [], {}];

function modificaLista(lista: string[]): string[] {
    let novaLista: string[] = [];
    for(let item of lista){
        novaLista.push(`${item} verde`);
    }
    return novaLista;
}

const listaModificada = modificaLista(frutas);
console.log(`Tipo array: ${typeof listaModificada} ${listaModificada}`);

/**
 * Tuplas
 */
const endereco1: [string, number, string] = ['Rua do forro', 123, 'Bairro da Limoeira'];
let endereco2 = ['Rua do reggae', 321, 'Bairo da Laranja']; // NÃO é tupla

console.log(`Tipo tuple: ${typeof endereco1} (${endereco1})`);
console.log(`Tipo tuple: ${typeof endereco2} (${endereco2})`);

const modificaEndereco = (endereco: [string, number, string]): [string, number, string] => {
    if(endereco[0] == 'Rua do forro') {
        endereco[0] = 'Rua do pisero';
    }
    
    return endereco;
}

const enderecoNovo = modificaEndereco(endereco1);
console.log(`Tipo tuple: ${typeof enderecoNovo} (${enderecoNovo})`);

/**
 * Object
 */
const cliente = {
    nome: 'João',
    "sobrenome": "Do pé de feijão"
};

const produto = {
    descricao: 'Camisa do Fluminense',
    preco: 1000.50,
    vendido: false
};

console.log(`Tipo object: ${typeof cliente} (${cliente})`);
console.log(`Tipo object: ${typeof produto} (${produto})`);
//console.log(cliente);
//console.log(produto);

const imprimeRetornaDadosCliente = (objeto: { nome: string, sobrenome: string }): { nome: string, sobrenome: string } => {
    console.log(objeto);
    return objeto;
}

const imprimeRetornaDadosProduto = (objeto: { descricao: string, preco: number, vendido: boolean }): { descricao: string, preco: number, vendido: boolean } => {
    console.log(objeto);
    return objeto;
}

imprimeRetornaDadosCliente(cliente);
imprimeRetornaDadosProduto(produto);

/**
 * Never
 */

// function lancaExcecao(): never {
//     throw new Error('Testando tipo never');
// }

// const nunca = lancaExcecao();
// console.log(`Tipo never: ${typeof nunca} (${nunca})`);

function verificaNumero(numero: number): boolean {
    if(typeof numero === "number"){
        return true;
    } else {
        return numero;
    }
}

const verNumero = verificaNumero(10);
console.log(`Tipo never: ${typeof verNumero} (${verNumero})`);

/**
 * Union Type
 */
const id: number | string = '1000';

const imprimeId = (codigo: number | string): number | string => {
    console.log(`Union Type: ${typeof codigo} (${codigo})`);
    return codigo;
}

imprimeId(id);

// narrowing

const imprimeCodigo = (codigo: number | string) => {
    if(typeof codigo === 'string'){
        console.log(`Union Type: ${typeof codigo} (${codigo.toUpperCase()})`);
    } else {
        console.log(`Union Type: ${typeof codigo} (${codigo})`);
    }    
}

imprimeCodigo('123aaa');

/**
 * Enum
 */

enum Status {
    Pendente = 'A',
    Processando = 'B',
    Processado = 'C'
};

const situacao1: Status = Status.Pendente;
const situacao2: Status = Status.Processando;

console.log(`Tipo Enum: ${typeof situacao1} (${situacao1})`);
console.log(`Tipo Enum: ${typeof situacao2} (${situacao2})`);

const mudaStatus = (preStatus: Status): Status => {
    let posStatus: Status;
    switch(preStatus) {
        case Status.Pendente:
            posStatus = Status.Processando;
            break;
        case Status.Processando:
            posStatus = Status.Processado;
            break;
        default:
            posStatus = Status.Pendente;
    }

    return posStatus;
}

const novoStatus = mudaStatus(situacao1);
console.log(`Tipo Enum: ${typeof novoStatus} (${novoStatus})`);

/**
 * Type Alias
 */
type Cliente = {
    nome: string
    sobrenome: string
}

type Produto = {
    descricao: string,
    preco: number,
    vendido: boolean
}

const cliente1: Cliente = {
    nome: 'João',
    "sobrenome": "Do pé de feijão"
};

const produto1: Produto = {
    descricao: 'Camisa do Fluminense',
    preco: 1000.50,
    vendido: false
};

console.log(`Tipo object: ${typeof cliente1} (${cliente1})`);
console.log(`Tipo object: ${typeof produto1} (${produto1})`);
//console.log(cliente);
//console.log(produto);

// const imprimeRetornaDadosCliente = (objeto: { nome: string, sobrenome: string }): { nome: string, sobrenome: string } => {
//     console.log(objeto);
//     return objeto;
// }

// const imprimeRetornaDadosProduto = (objeto: { descricao: string, preco: number, vendido: boolean }): { descricao: string, preco: number, vendido: boolean } => {
//     console.log(objeto);
//     return objeto;
// }

// imprimeRetornaDadosCliente(cliente);
// imprimeRetornaDadosProduto(produto);

const imprimeRetornaDados = (objeto: Cliente | Produto): Cliente | Produto => {
    console.log(objeto);
    return objeto;
}

imprimeRetornaDados(cliente1);
imprimeRetornaDados(produto1);

const clientes: Cliente[] = [cliente, cliente1];

/**
 * Nulos e Opcionais
 */
let idade1: number | null = 31;
// idade1 = null;

const maquinaDoTempo = (idade?: number | null): number => {
    if(idade){
        return idade - 10;
    } else {
        return 0;
    }
}

const idade2 = maquinaDoTempo(idade1);
const idade3 = maquinaDoTempo();

console.log(`Nulo/Opcional: ${typeof idade2} (${idade2})`);
console.log(`Nulo/Opcional: ${typeof idade3} (${idade3})`);