// Exercício: Nota escolar. Obter média a partir de um array

// 0 - 59 = F
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 99 = A
// 100 = S

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media =  calcularMedia(notas);

    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    if (media < 99) return 'A';
    return 'S'
}

function calcularMedia (array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}