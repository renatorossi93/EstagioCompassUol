import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest , BaseChecks } from '../support/base/baseTest.js';

export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1s', // This can be shorter or just a few iterations
};

const base_uri = 'http://localhost:3000';
const baseRest = new BaseRest(base_uri);
const baseChecks = new  BaseChecks();

const data = new SharedArray('Users', function () {
  const jsonData = JSON.parse(open('../data/static/user.json'));
  return jsonData.users;
});

const payload = {
  "nome": "Fulano da Silva",
  "email": "fulano1@qa.com",
  "password": "teste",
  "administrador": "true"
}

export function setup() {
  const res = baseRest.post('/usuarios', payload)
  //console.log(res.json())
  baseChecks.checkStatusCode(res, 201)
  console.log('setup cadastrando usuário')

  return {responseData : res.json()}
}

export default (responseData) => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
  const userId = responseData.responseData._id;

  const urlRes = baseRest.post('/login', user);

  baseChecks.checkStatusCode(urlRes, 200)
  console.log('realizando login')
  sleep(1);


  
  const editRes = baseRest.put(`/usuarios/${userId}`, payload);

  baseChecks.checkStatusCode(editRes, 200)
  console.log('editando usuario')
};

export function teardown(responseData) {
  const userId = responseData.responseData._id
  const res = baseRest.del(`/usuarios/${userId}`)

  baseChecks.checkStatusCode(res, 200)
  console.log(`teardown deletando o usuário com ID ${userId}`)
  
  const listRes = baseRest.get(`/usuarios/${userId}`);

  baseChecks.checkStatusCode(listRes, 400)
  console.log('puxando id do usuário deletado para confirmar o delete')
}