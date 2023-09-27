//Exercício: Objeto Postagem de Blog:

/*
Crie um objeto de postagem de blog que vai conter as seguintas propriedades:

Postagem (
titulo
mensagem
autor
vizualicações
comentarios
     (autor,mensagem)
estaAoVivo
)
*/

let postagem = {
    titulo: 'Primeira Postagem',
    mensagem: 'Esta é a mensagem da minha primeira postagem',
    autor: 'Renato Rossi',
    vizualizacoes: 589,
    comentarios : [
        {autor: 'Rogerinho', mensagem: 'uau! Que bela postagem! :D'},
        {autor: 'Heitorzinho', mensagem: 'Nossa! Eu não gostei disso! D:'}
    ],
    estaAoVivo: true
}
console.log(postagem);