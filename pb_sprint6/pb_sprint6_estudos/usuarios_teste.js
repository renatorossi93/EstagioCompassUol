import http from 'k6/http';
import { check } from 'k6';



export default function() {
    let res = http.get('http://localhost:3000/usuarios');

    res = http.get('http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1');

    console.log(res.json().nome);

    check(res, {
        'status é 200': (r) => r.status === 200,
        'usuário é Fulano da Silva': (r) => r.json().nome === 'Fulano da Silva'
    });

}