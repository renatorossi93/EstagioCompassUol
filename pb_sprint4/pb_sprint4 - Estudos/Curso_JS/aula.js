// Aprendendo a declarar variáveis

let idade = 30;
console.log(idade);
let altura = 170;
console.log(altura);
/*let é uma variável. 
Uma variável nunca começa com números, ex:1idade e nem se usa espaços, ex: al tura.
um bom padrão para se nomear variáveis é o camelCase, ex: nomeCompleto ou usuarioAltura.*/

/*console.log() console é um objeto e log() é um métoddo deste objeto. 
O objetivo deste objeto e método é a impressão das variáveis para visualização*/

//Exercício: Imprima 3 variáveis diferentes na tela:
let marca = 'Xiaomi';
let modelo = 'Redmi note 11';
let preço = 1500;
console.log(marca, modelo, preço);

const valorIngressoAdulto = 20;
/* valorIngressoAdulto = 30;    Esse comando causa erro no código
pois uma variável const(constante) não se pode alterar os valores.*/ 
console.log(valorIngressoAdulto);
//O padrão é que se use sempre a variável const e só use let em variáveis que você sabe que terá de alterar os valores.

// Aprendendo sobre Tipagem Dinâmica

let nome = 'Renato'; // String literal
let anoNascimento = 1993; // number literal
let estaAprovado = true; // boolean
let sobrenome = undefined; // Undefined
let corSelecionado = null; // Redefinir um valor

// Aprendendo sobre Objetos

let pessoa = { //pessoa é um objeto.
    nome:'Renato', //nome, idade, estaAprovado e sobrenome se tornam agora propriedades deste objeto.
    idade:30,
    estaAprovado:true,
    sobrenome:'Rossi'
};
console.log(pessoa);

//Exercício: imprima 3 propriedades de um objeto:

let aparelho = {
    marca:'Xiaomi',
    modelo:'Redmi note 11',
    preço:1500
};
console.log(aparelho);

// Aprendendo sobre Arrays

//Array é um conjunto de dados que pode ser acessado por um índice.
//índice é nada mais nada menos do que a posição exata de onde se encontra uma informação nesse conjunto de informações.

let familia = [30, 29, 55, 3]; // aqui familia é um array (um conjutnto de idades nesse caso).
console.log(familia[3]); //o cochetes é um índice, o que está sendo puxado dentro dele é a ordem das informações do array família, ou seja, a idade que está na terceira posição contando a partir do 0, neste caso é a idade 3(anos).

// Aprendendo sobre Funções 

//Funções são a base de todo software pois elas controlam o fluxo de execução do mesmo, então toda entrada e saída de dados precisa de uma função, no javascript, para realizar isto.
//Para nomear uma função você deve colocar um Verbo + Substantivo, ex: resetaCor.
let corSite  = 'azul';
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade; //adicionando ' ' entre o + significa que estou adicionando espaço entre a cor e a tonalidade no console.log.
};

console.log(corSite);
resetaCor('Vermelho', 'escuro');
console.log(corSite);

//Exercício: monte uma função que altere algo:

let preçoAparelho = 1500;
function alteraPreço(preço){
    preçoAparelho = preço;
};

console.log(preçoAparelho);
alteraPreço(1299);
console.log(preçoAparelho);

// Aprendendo os tipos de Funções

//Basicamente temos dois tipos de funções:
// A Função que realiza uma tarefa e não devolve nada:
function dizerNome(){
    console.log('Renato');
};
dizerNome();

// A Função que faz um calculo ou operação e retorna algo:
function multiplicarPorDois(valor){
    return valor*2;
};
let resultado = multiplicarPorDois(5);
console.log(resultado);

// Aprendendo sobre Operadores

//No JS nós temos alguns operadores, são eles: Aritiméticos(matemáticos), atribuição, comparação, lógicos e bitwise.

//Operadores Aritméticos:
let salario = 2500;
//as operações aritiméticas que podemos usar no JS são: +, -, *, /, **
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

//temos também o ++ e o -- que são operações de incremento e decremento.
console.log(++salario); //aqui o ++ está incrementando 1 ao valor do salário, note que ele vem antes pois primeiro ele incrementa ao valor.

let idadePessoa = 29;
console.log(--idadePessoa);

//Operadores de Atribuição:

// basicamente são os operadores que vinham sendo usados no início.
let valorMouseGamer = 100;
valorMouseGamer += valorMouseGamer; //o que está sendo feito aqui é basicamente: valorMouseGamer = valorMouseGamer + valorMouseGamer
console.log(valorMouseGamer);

//Operadores de Igualdade:

//no JS nós temos basicamente dois tipos de operadores de igualdade:

//igualdade estrita:
console.log(1 === 1); //o que está sendo feito entre () é comparar os números, ou seja, os tipos dos valores.

//igualdade solta:
console.log(1 == 1); //o que está sendo feito entre () aqui é retornar os valores em si.

//OBS: Use sempre que possível a comparação com 3 iguais (===) e não a com dois iguais (==) para evitar erros e confusões.

//Operadores Ternários:

//operadores ternários são sempre úteis para quando se quer fazer comparações sem usar if o tempo inteiro.

//imagine que você tem um cliente que tenha mais do que 100 pontos, então ele seria um cliente premium, caso contrário ele será do tipo comum.
let pontos = 101;
let tipoCliente = pontos > 100 ? 'premium' : 'comum';
console.log(tipoCliente);

//Operadores Lógicos

//operadores lógicos são usados para se tomar decisões baseadas em condições multiplas.
//existem três tipos de operadores lógicos no JS, são eles:

//operador lógico and [que significa e] (&&):
//ele retorna true se os dois operandos forem true.
console.log(true && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

//operador lógico or [que significa ou] (||):
//ele retorna true se um dos operandos forem true, só precisa que um deles seja true.
let maiorDeIdade2 = true;
let possuiCarteiraDeTrabalho2 = false;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
console.log(podeAplicar2);

//operador lógico NOT [que significa não] (!) 
//serve para negação.
let candidatoRecusado= !podeAplicar;
console.log(candidatoRecusado);

//comparação de operadores lógicos com valores não boleanos (ou seja, sem usar somente true e false):
//no JS existe o conceito de Truthy e Falsy.
// Falsy
//Falsy é basicamente todos os  valores que são Undefined, Null, 0, False, '' ou NaN (Not a Number).
//Truthy
//Truthy são valores que não são nenhum destes acima.
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
//perceba que o console irá retornar a cor Azul pois a corPersonalizada é um valor Falsy e a corPadrao  é um valor Truthy.

// Operadores Condicionais

//no JS nós temos dois tipos de operadores condicionais: If .. Else e o Switch .. Case.

//IF.. Else:
/*ex: se a hora estiver entre as 6:00 até 12:00 = Bom dia! 
se estiver entre 12:00 até 18:00 = Boa Tarde!
caso contrário = Boa noite!*/

let hora = 21;
if (hora > 6 && hora < 12){
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18){
    console.log('Boa tarde!');
}
else {
    console.log('Boa noite!');
}

//Switch .. Case:

let permissao; //usuario comum, gerente, diretor.
permissao = 'gerente';
switch (permissao){
    case 'comum':
        console.log('Usuário Comum');
        break;
    case 'gerente':
        console.log('Usuário Gerente');
        break; 
    case 'diretor':
        console.log('Usuário Diretor');
        break;
    default:
        console.log('Usuário não reconhecido');
}

// Aprendendo a repetir ações:

//para não termos que repetir os mesmos códigos, podemos usar laços ou, em inglês, loops.

//no JS nós temos 5 loops: For, While, Do while, For In e For of.

//For:
for(let i = 1; i <= 5; i++){
    if(i % 2 !==0){
    console.log(i);
    }
}

//While:
let i = 5;
while(i >= 1){
    if(i % 2 !==0){
        console.log(i);
        }
}

//Do While:

let z = 0;
do {
    console.log('digitando...');
    z++;
} while (z < 10)