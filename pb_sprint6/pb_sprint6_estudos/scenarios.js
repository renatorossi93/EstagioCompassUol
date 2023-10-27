import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import { Counter, counter } from 'k6/metrics';


export const options = {
    vus: 10,
    duration: '6s',
    thresholds: { //escrevendo threshholds (limites)
        http_req_duration: ['p(90)<100'],//duração de 90% das requisições devem ser menor que 100ms
        http_req_failed: ['rate<0.10'],// a  taxa de falha das requisições deve ser menor que 10%(0.10)
        http_reqs: ['count>20'],//isso é um método de agregação(count)
        http_reqs: ['rate>4'],// isso é um método de agregação(rate)
        vus: ['value>9'],// isso é um método de agregação (gauge, ao qual usamos value para vus)
        http_req_duration: ['max<2000'],// isso é um método de agregação (trend)
        checks: ['rate>=0.98'],//método de agregação que vai definir uma taxa de checks limite(threshold)
        my_counter: ['count>10']//se métricas customizadas não tiverem um threshold, o k6 pode não lê-las
    }
}

let myCounter = new Counter('my_counter');//criando métricas customizadas

// escrevendo asserções
export default function () {
    const res = http.get('http://localhost:3000');
    check(res, {
        'status é 200': (r) => r.status === 200,
        'primeira página': (r) => r.body.includes ('ServeRest'),
    });

    myCounter.add(1);//métricas customizadas precisam estar na função default
    //console.log(res.status, res.body);
    sleep(2);
}