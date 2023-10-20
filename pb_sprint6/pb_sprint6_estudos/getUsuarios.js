import http from "k6/http";
import { sleep } from "k6";
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export let usuariosDuration = new Trend('usuarios_duration');
export let usuariosFailRate = new Rate('usuarios_fail_rate');
export let usuariosSuccessRate = new Rate('usuarios_success_rate');
export let usuariosReqs = new Rate('usuarios_reqs');

export default function () {
    let res = http.get('http://localhost:3000/usuarios')

    usuariosDuration.add(res.status == 0 || res.status > 399);
    usuariosReqs.add(1);
    usuariosFailRate.add(res.status == 0 || res.status > 399);
    usuariosSuccessRate.add(res.status < 399);

    let durationMsg = 'Max Duration ${1000/1000}s'
    if(!check(res, {
        'max duration': (r) => r.timings.duration <1000,
    })){
        fail(durationMsg);
    }

    sleep(1);


}