// Exercício: Criar função para mostrar os números primos


//primos
//ex: 10, 11
// 10 (1 ou por ele mesmo) 10: 1, 2, 4, 6, 10
//11 (1 ou  por ele mesmo) 11: 1, 11
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);
    }
    
}

function numeroPrimo(numero) {
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                return false;
            }
        }
        return true;
}