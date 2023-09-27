// Exercícios: Faixa de preço:

//Crie um array de objetos de faixa de preço para ser usado em um site como o Mercado Livre

//faixasDePreco: tooltip, minimo, maximo

//Primeira Opção
let faixasDePreco = [
    {tooltip: 'até R$ 500', minimo: 0, maximo: 500},
    {tooltip: 'de R$ 500 a R$ 1000', minimo: 500, maximo: 1000},
    {tooltip: 'acima de R$ 1000', minimo: 1000, maximo: 999999}
];

//Segunda opção (Factory Function)
function criaFaixasDePreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixasDePreco2 = [
    criaFaixasDePreco('até R$ 500', 0, 500),
    criaFaixasDePreco('de R$ 500 a R$ 1000', 500, 1000),
    criaFaixasDePreco('acima de R$ 1000', 1000, 999999),
];
console.log(faixasDePreco);
console.log(faixasDePreco2);

//Terceira opcao (Constructor Function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixasDePreco3 =[
    new FaixaPreco(' até R$ 50', 0, 50),
    new FaixaPreco('de R$ 50 A R$ 100', 50, 100),
    new FaixaPreco('acima de R$ 100', 100, 999999),
];
console.log(faixasDePreco3);