// 1. init code
import { sleep } from "k6";

// inicializa variaveis, define options (vus, duration, thresholds)
let counter = 1

export function setup() {
    // 2. setup code executa apenas 1 vez antes da função principal
    console.log(`SETUP ${counter}`)
  }
  
  export default function () {
    // 3. VU code ponto de entrada dos VUs, onde realizam os testes/chamadas na API
    console.log(`FUNÇÃO PRINCIPAL - ${counter} VU - ${__VU} ITER-${__ITER}`)
    counter = counter + 1
    sleep(1)
  }
  
  export function teardown() {
    // 4. teardown code executa apenas 1 vez APÓS a execução da função principal
    console.log(`TEARDOWN - ${counter}`)
  }
  