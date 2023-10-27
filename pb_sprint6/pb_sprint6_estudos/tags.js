import http from "k6/http";

export const options ={
    thresholds: {
        http_req_duration: ['p(90)<300'],
        'http_req_duration{status:200}': ['p(90)<250'],//isso é uma tag
    }
}

export default function () {//tags servem para realizarmos testes em mais de um endpoint ao mesmo tempo e visualizá-los individualmente
    http.get('http://localhost:3000/usuarios');
    http.get('http://localhost:3000/produtos');
}