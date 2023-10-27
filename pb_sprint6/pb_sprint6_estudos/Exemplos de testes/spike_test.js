import http from 'k6/http';//setando uma requisição http
import http from 'k6/http';//setando uma requisição http
import { sleep } from 'k6';// sleep é útil para controlar a quantidade de requisições

export const options = {
    stages:[ //stages serve para definirmos as opções de testes de um estágio, um estágio é mais do que só testar VUs, possui ramp-up e ramp-down por exemplo.
        {//ramp-up: por 2 minutos saindo do 0 para 3000 VUs
            duration: '2m',//setando a duração do teste
            target: 3000 //target é o VU das stages, aqui queremos que o teste sube os usuários gradualmente até 3000 usuários.
        },
        {//ramp-down: por 5 minutos saimos de 100 vu para 0
            duration: '45s',
            target:0
        }
    ]
}



export default function () {//essa função representa a iteração de cada VU, ou seja, o  fluxo de cada VU no teste
    http.get('https://test.k6.io');//setando a requisição http (como get nesse caso) e informando a url da requisição
    sleep(1);//setando o tempo [(1)segundo] entre cada requisição dentro da duração do teste.
    // Quando se está fazendo testes de pico, faz sentido testarmos só uma página, a página que faz mais sentido receber esse pico de usuários.
}
/*
POR SER UM TESTE COMPLICADO  E ARRISCADO, TESTES DE PICO PRECISAM SER FEITOS FORA DO FLUXO COMUM DE  TESTE
E DEVEM SER SETADOS PARA PARAREM QUANDO O SISTEMA COMEÇAR A SE SOBRECARREGAR OU ENTÃO SÓ PARAM QUANDO O SISTEMA QUEBRA.
OU SEJA, ESTE É UM TESTE EM QUE SE ESPERA QUE A APLICAÇÃO FALHE E QUE SE OBTENHA ERROS.
*/