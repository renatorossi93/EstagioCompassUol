import http from 'k6/http';
import { check, sleep} from 'k6';
import { SharedArray } from 'k6/data';
import { BaseRest } from '../services/baseRest.js';

export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1s', // This can be shorter or just a few iterations
};

const base_uri = 'http://localhost:3000'
const baseRest = new BaseRest(base_uri)

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
  check(res, {
    'status shold be 201' : (r) => r.status === 201
  })
  console.log('setup cadastrando usuário')
  return {responseData : res.json()}
}

export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];

  const urlRes = baseRest.post('/login', user);
  
  check(urlRes, {
    'status should be 200': (r) => r.status === 200,
  });
  console.log('realizando login')
  sleep(1);

};

export function teardown(responseData) {
  const userId = responseData.responseData._id
  const res = baseRest.del(`/usuarios/${userId}`)
  check(res, {
    'status shold be 200' : (r) => r.status === 200
  })
  console.log(`teardown deletando o usuário com ID ${userId}`)
}
