import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomString, randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

let userId;
let authToken; // token de autorização

export const options = {
    stages: [
      { duration: '6s', target: 1 }, // Ramp-up (Smoke Test)
      { duration: '18s', target: 3 }, // Load Test 
      { duration: '32s', target: 7 },  // Stress Test
      { duration: '9s', target: 20}, // Spike Test
      { duration: '3s', target: 0} // Ramp-down
    ],
    thresholds: {
      'http_req_duration{method:GET}': ['avg<=200', 'max<=350'],
      'http_req_duration{method:POST}': ['avg<=200', 'max<=350'],
      'http_req_duration{method:PUT}': ['avg<=200', 'max<=350'],
      'http_req_duration{method:DELETE}': ['avg<=200', 'max<=350'],
    },
  };
  
  export function setup() {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

export default function () {
  // CADASTRO DE USUÁRIO
  const novoUser = {
    nome: 'Fulano' + randomString(8),
    email: `${randomString(8)}@teste.com`,
    password: 'senha' + randomString(8),
    administrador: true,
  };
  const novoUserRes = http.post('http://localhost:3000/usuarios', JSON.stringify(novoUser));
  check(novoUserRes, {
    '[POST CADASTRO] Status Code é 201': (r) => r.status === 201,
  });

  sleep(2);

  // Pegar e armazenar a Id
  const respostaJson = JSON.parse(novoUserRes.body);
  userId = respostaJson.id;

  // LOGIN
  const loginData = {
    email: novoUser.email,
    password: novoUser.password,
  };
  const loginRes = http.post('http://localhost:3000/Login', JSON.stringify(loginData));
  check(loginRes, {
    '[POST LOGIN] Status Code 200': (r) => r.status === 200,
  });

  // Pegar bearer token
  authToken = loginRes.json('token');

  sleep(2);

  // CADASTRAR PRODUTO
  const novoProduto = {
    nome: randomString(8),
    preco: randomIntBetween(100, 10000),
    descricao: 'Novo Iphone',
  };
  const criarProdutoRes = http.post('http://localhost:3000/produtos', JSON.stringify(novoProduto));
  check(criarProdutoRes, {
    '[POST PRODUTOS] Status Code 201': (r) => r.status === 201,
  });

  sleep(2);

  // Buscar produto por ID
  const produtoId = randomString(8);
  const produtoIdRes = http.get(`http://localhost:3000/produtos/${produtoId}`);
  check(produtoIdRes, {
    '[GET ID] Status Code é 200': (r) => r.status === 200,
  });

  sleep(2);

  // Editar produto
  const editarProduto = {
    preco: randomIntBetween(100, 10000),
  };
  const editarProdutoRes = http.put(`http://localhost:3000/produtos/${produtoId}`, JSON.stringify(editarProduto));
  check(editarProdutoRes, {
    '[PUT] Status Code é 200': (r) => r.status === 200,
  });

  sleep(2);

  // Deletar produto
  const deletarProdutoRes = http.del('http://localhost:3000/produtos/0uxuPY0cbmQhpEz1');
  check(deletarProdutoRes, {
    '[DELETE] Status Code é 200': (r) => r.status === 200,
  });
  console.log(deletarProdutoRes.json);
  sleep(2);
}
