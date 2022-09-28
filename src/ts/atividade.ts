type TipoBasico = string | number | boolean;
type Tipo = TipoBasico | object | null | undefined;


const imprimeTipo = (valor: Tipo | Tipo[]): void => {
    console.log(typeof valor);
}

/**
 * -------------------------------------------
 */
 enum Opcoes {
    OpcaoA,
    OpcaoB
}

const opcao: Opcoes = Opcoes.OpcaoA;
const tupla: [string, number] = ['tupla', 1];

const valores = [
    'texto',
    1,
    true,
    [],
    {},
    opcao,
    tupla,
    null,
    undefined
];

valores.forEach((valor: Tipo) => {
    imprimeTipo(valor);
});