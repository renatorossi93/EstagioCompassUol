import http from "k6/http";
import { check, sleep, group } from "k6";


export const options = {
    thresholds: {
        http_req_duration: ['p(90)<250'],
        'group_duration{group:::usuarios}': ['p(90)<250'],
        'group_duration{group:::usuarios::buscar id de usuario}': ['p(90)<250'],//definindo um threshold pra todo um grupo
    }
}


export default function () {

    group('usuarios', function (){//grupos, grupos são bons para organizar testes por fluxos e páginas
        let res = http.get('http://localhost:3000/usuarios');
        check(res, {'status code é 200': (r) => r.status === 200});
        
        http.get('http://localhost:3000/usuarios');

        //abaixo é um  grupo dentro de um grupo, ou seja, um subgrupo
        group('buscar id de usuario', function(){//mas não use groups pra cada requisição, para isso use tags
            http.get('http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1');
        });

    });
    
    group('produtos', function(){
        http.get('http://localhost:3000/produtos');
    });

    sleep(1);
}