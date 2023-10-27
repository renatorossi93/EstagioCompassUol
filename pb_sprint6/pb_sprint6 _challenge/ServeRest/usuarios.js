import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomString } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

let userId; // Variável pra randomizar o ID

export const options = {
  stages: [ // TESTE DE CARGA MÉDIA (LOAD TEST)
    { duration: '5s', target: 500 }, // Ramp-up
    { duration: '30s', target: 500 }, // Constante
    { duration: '5s', target: 0 },  // Ramp-down
  ],
  thresholds: {
    'http_req_duration{method:GET}': ['avg<=200', 'max<=350'],
    'http_req_duration{method:POST}': ['avg<=200', 'max<=350'],
    'http_req_duration{method:PUT}': ['avg<=200', 'max<=350'],
    'http_req_duration{method:DELETE}': ['avg<=200', 'max<=350'],
    'http_req_duration{method:GET}': ['p(90)<=350'],
  },
};

export function setup() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export default function () {
  // Listar usuários
 /* const listaUserRes = http.get('http://localhost:3000/usuarios');
  check(listaUserRes, {
    '[GET] Status Code é 200': (r) => r.status === 200,
  });
  sleep(2);*/

  // Cadastrar usuário com campos randomizados
  const novoUser = {
    /*nome: 'Fulano ' + randomString(8),
    email: `${randomString(8)}@teste.com`,
    password: 'senha' + randomString(8),
    administrador: true,*/
    "nome": "Fulano da Silva",
    "email": "fulano@qa.com",
    "password": "teste",
    "administrador": "true"

  };
  const novoUserRes = http.post('http://localhost:3000/usuarios', JSON.stringify(novoUser));
  check(novoUserRes, {
    '[POST] Status Code é 201': (r) => r.status === 201,
  });
  
  // Pegar e armazenar a Id
  const responseJson = JSON.parse(novoUserRes.body);
  userId = responseJson.id;
  
  sleep(2);

  // Buscar usuário por id
  const buscarUserRes = http.get(`http://localhost:3000/usuarios/${userId}`);
  check(buscarUserRes, {
    '[GET/ID] Status Code é 200': (r) => r.status === 200,
  });
  sleep(2);

  // Editar usuário
  /*const editarUser = {
    nome: 'Renato'+randomString(8),
  };
  const editarUserRes = http.put(`http://localhost:3000/usuarios/${userId}`, JSON.stringify(editarUser));
  check(editarUserRes, {
    '[PUT] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);

  // Deletar usuário
  const deletarUserRes = http.del(`http://localhost:3000/usuarios/${userId}`);
  check(deletarUserRes, {
    '[DELETE] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);*/
}
