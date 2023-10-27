import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomString, randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const options = {
  stages: [ // TESTE DE ESTRESSE (STRESS TEST)
    { duration: '10s', target: 800 }, // Ramp-up
    { duration: '1m', target: 800 }, // Constante
    { duration: '10s', target: 0 },  // Ramp-down
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
  // Listar produtos
  const listaProdutoRes = http.get('http://localhost:3000/produtos');
  check(listaProdutoRes, {
    '[GET] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);

  // Cadastrar produto com campos aleatórios
  const novoProduto = {
    nome: randomString(8),
    preco: randomIntBetween(100, 10000),
    descricao: 'Novo Iphone',
  };
  const criarProdutoRes = http.post('http://localhost:3000/produtos', JSON.stringify(novoProduto));
  check(criarProdutoRes, {
    '[POST] Status Code é 201': (r) => r.status = 201,
  });
  sleep(2);

  // Buscar produto por ID
  const produtoId = randomString(8);
  const produtoIdRes = http.get(`http://localhost:3000/produtos/${produtoId}`);
  check(produtoIdRes, {
    '[GET ID] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);

  // Editar produto
  const editarProduto = {
    preco: randomIntBetween(100, 10000),
  };
  const editarProdutoRes = http.put(`http://localhost:3000/produtos/${produtoId}`, JSON.stringify(editarProduto));
  check(editarProdutoRes, {
    '[PUT] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);

  // Deletar produto
  const deletarProdutoRes = http.del(`http://localhost:3000/produtos/${produtoId}`);
  check(deletarProdutoRes, {
    '[DELETE] Status Code é 200': (r) => r.status = 200,
  });
  sleep(2);
}
