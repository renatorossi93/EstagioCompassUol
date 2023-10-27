import http from 'k6/http';//setando uma requisição http
import http from 'k6/http';//setando uma requisição http
import { sleep } from 'k6';// sleep é útil para controlar a quantidade de requisições

export const options = {
    stages:[ //stages serve para definirmos as opções de testes de um estágio, um estágio é mais do que só testar VUs, possui ramp-up e ramp-down por exemplo.
        {//Testes de breakpoint não possuem ramp-up e ramp-down
            duration: '2h',//setando a duração do teste | Breakpoint tests geralmente não possuem realmente uma duração para terminar pois o objetivo é chegar a ponto de quebrar a aplicação.
            target: 10000 //target é o VU das stages, aqui queremos que o teste sube os usuários gradualmente até 10000 usuários. A ideia é que a aplicação quebre antes de chegar a esse número
        }
    ]
}


export default function () {//essa função representa a iteração de cada VU, ou seja, o  fluxo de cada VU no teste
    http.get('https://test.k6.io');//setando a requisição http (como get nesse caso) e informando a url da requisição
    sleep(1);//setando o tempo [(1)segundo] entre cada requisição dentro da duração do teste.
}

/*
TESTES DE BREAKPOINT SÃO TESTES LONGOS QUE SERVEM PARA DESCOBRIRMOS O PONTO EM QUE A APLICAÇÃO OU O SISTEMA IRÁ QUEBRAR
ENTÃO OS TESTES DE BREAKPOINTS NÃO POSSUEM HORA PRA ACABAR E A IDEIA É QUE SE PERCEBA QUANDO O TESTE IRÁ QUEBRAR PARA
QUE ENTÃO POSSAMOS PARAR O TESTE MANUALMENTE E ANOTARMOS EM QUE PONTO A APLICAÇÃO QUEBROU.
*/