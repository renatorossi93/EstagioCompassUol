import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

//Adição
describe('Testes de soma da Calculadora', () => {
  it('Deve somar 4 e 5 resultando em 9', () => {
    let resultado = Calculadora.soma(4, 5)
    expect(resultado).to.be.equal(9)
  })
  it('Deve somar -4 e 5 resultando em 1', () => {
    let resultado = Calculadora.soma(-4, 5)
    expect(resultado).to.be.equal(1)
  })
});

// Subtração
describe('Testes de Subtração', () => {
  it('Deve subtrair 4 e 5 resultando em -1', () => {
    let resultado = Calculadora.sub(4, 5)
    expect(resultado).to.be.equal(-1)
  })
});

// Divisão
describe('Teste de divisão', () => {
  it('Deve dividir 25 por 5 resultando em 5',()  => {
    let resultado = Calculadora.div(25, 5)
    expect(resultado).to.be.equal(5)
  })
});

// Multiplicação
describe('Teste de multiplicação', () => {
  it('Deve multiplicar 5 por 5 resultando em 25', ()=> {
    let resultado = Calculadora.multi(5, 5)
    expect(resultado).to.be.equal(25)
  })
});

// Radiciação
describe('Teste de Radiciação',  ()=> {
  it('Deve calcular a raiz de 144 resultando em 12', ()=> {
    let resultado = Calculadora.raiz(144)
    expect(resultado).to.be.equal(12)
  })
});

// Média

describe('Teste de média',  ()=> {
  it('Deve calcular a média entre 5, 7 e 9 resultando em 7', ()=> {
    let resultado = Calculadora.media(5, 7, 9)
    expect(resultado).to.be.equal(7)
  })
});

/* AQUI FICAM OS PRIMEIROS TESTES DE MOCHA E CHAI

describe('Meu Primeiro teste', () => {
  it('Verificar a variável "aux"', () => {
    let aux = 2
   //  assert.strictEqual(aux, 2)
   expect(aux).to.be.equal(2).and.to.be.a('number')
  })
  it.('Verificar outra variável', () => {
    let aux = 'carro'
  //  assert.strictEqual(aux, 'carro')
  expect(aux).to.be.equal('carro').and.not.equal('charrete')
  })
})

describe('Meu Segundo teste', () => {
  it('Verificar uma desigualdade', () => {
    let aux = 2
  //  assert.notStrictEqual(aux, '2')
  })
  it('Verificar uma desigualdade', () => {
    let aux = 'carro'
  //  assert.notStrictEqual(aux, 'charrete')
  })
})
*/