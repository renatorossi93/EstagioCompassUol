// login.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    // TESTE DE FUMAÇA (SMOKE TEST)
    vus: 2,
    duration: '6s',
  thresholds: {
    'http_req_duration{method:POST}': ['avg<=200', 'max<=350'],
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
  // Login com Id específica
  const login = {
      email: 'fulano@qa.com',
      password: 'teste',
    };
    let loginRes = http.post('http://localhost:3000/login', JSON.stringify(login));
    check(loginRes, {
      '[POST] Status Code é 200': (r) => r.status === 200,
    });
  };

  sleep(2);
