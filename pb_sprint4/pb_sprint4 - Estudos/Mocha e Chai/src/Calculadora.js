
export default class Calculadora {

    static soma(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static div(a, b) {
        return a / b
    }

    static raiz(a)  {
        return Math.sqrt(a)
    }

    static multi(a, b) {
        return a * b
    }
    
    static media(a, b, c) {
        return (a + b + c) / 3
    }
}