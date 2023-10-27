import http from 'k6/http';//setando uma requisição http
import { sleep } from 'k6';// sleep é útil para controlar a quantidade de requisições

export const options = {
    vus: 1,//setando a quantidade de usuários para o teste
    duration: '30s'//setando a duração do teste | 30 segundos a 3 minutos é o ideal para smoke tests
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
POR SER UM TESTE DE VALIDAÇÃO DO FUNCIONAMENTO DO SCRIPT DE TESTE,
É RECOMENDÁVEL QUE O TESTE DE FUMAÇA SEJA O PRIMEIRO A SER FEITO.
*/