import { check } from "k6";

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200) {
        check(response, {
            'Status Code Check': (r) => r.status === expectedStatus,
        })
    }
}