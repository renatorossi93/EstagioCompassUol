//Exercícios: Aprendendo exercícios comuns em entrevistas de emprego:

// Se temos um valor divisível por 3 => Fizz
//Se temos um valor divisível por 5 => Buzz
//Se temos um valor tanto divisível por 3 e por 5 => FizzBuzz
//Se não temos um valor divisível nem por 3 e nem por 5 => o mesmo valor
//Se temos um valor que não é numero => mensagem dizendo que não é numero
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
     return 'O valor não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
     return 'FizzBuzz';
    if (entrada % 3 === 0)
     return 'Fizz';
    if (entrada % 5 === 0)
     return 'Buzz';
    else return entrada;
}