import http from 'k6/http';
import { check, sleep} from 'k6';
import { SharedArray } from 'k6/data';
import { dynamicUser } from '../data/dynamic/faker.js';

export const options = {
  vus: 1, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '10s', // This can be shorter or just a few iterations
};



const data = new SharedArray('Users', function () {
  const jsonData = dynamicUser().users;
  return jsonData;
});


export default () => {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];

  const urlRes = http.post('http://localhost:3000/usuarios', user);
  
  check(urlRes, {
    'is status 200': (r) => r.status === 200,
  });
  
  sleep(1);

};
