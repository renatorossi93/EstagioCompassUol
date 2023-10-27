import http from 'k6/http';//setando uma requisição http
import { sleep } from 'k6';// sleep é útil para controlar a quantidade de requisições

export const options = {
    stages:[ //stages serve para definirmos as opções de testes de um estágio, um estágio é mais do que só testar VUs, possui ramp-up e ramp-down por exemplo.
        {//ramp-up: por 5 minutos saimos de 0 vu para 1000
            duration: '5m',
            target: 1000 //target é o VU das stages, aqui queremos que o teste sube os usuários gradualmente até 100 usuários.
        },
        {//constante: por 30 minutos permanecemos com  100 vu
            duration: '12h',//setando a duração do teste | Soak tests devem durar muitas horas, talvez até dias. 
            target:1000
        },
        {//ramp-down: por 5 minutos saimos de 100 vu para 0
            duration: '5m',
            target:0
        }
    ]
}



export default function () {//essa função representa a iteração de cada VU, ou seja, o  fluxo de cada VU no teste
    http.get('https://test.k6.io');//setando a requisição http (como get nesse caso) e informando a url da requisição
    sleep(1);//setando o tempo [(1)segundo] entre cada requisição dentro da duração do teste
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

/*
SOAK TESTES OU TESTES DE IMERSÃO SERVEM PARA TEXTAR O FLUXO DE USUARIOS EM UMA APLICAÇÃO
QUE SIMULE UM FLUXO DE MUITAS HORAS OU DIAS, PARA VER COMO A APLICAÇÃO SE COMPORTA POR UM LONGO PERÍODO.
PARA VER SE A APLICAÇÃO IRÁ APRESENTAR PROBLEMAS A LONGO PRAZO.
*/