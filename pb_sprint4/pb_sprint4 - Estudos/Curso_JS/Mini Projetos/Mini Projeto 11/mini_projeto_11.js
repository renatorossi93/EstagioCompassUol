// Exercício: Javascript - Objeto Endereço

// Criar um Objeto endereço que contem: Rua, Cidade, CEP
// exibirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
     console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);