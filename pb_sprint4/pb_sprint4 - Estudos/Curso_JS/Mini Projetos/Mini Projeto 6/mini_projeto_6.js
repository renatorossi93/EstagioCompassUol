/* Exercício: Criar um método para ler propriedades de um objeto
 e exibir somente as propriedades do tipo string que estão neste objeto:*/

 const filme = {
    titulo: 'Mad Max: Fury Road',
    ano: 2014,
    diretor: 'George Miller',
    personagem: 'Furiosa'
 }
 exibirPropriedades(filme);

 function exibirPropriedades(obj) {
    for(prop in obj)
     if(typeof obj[prop] === 'string')
      console.log(prop, obj[prop])
 }