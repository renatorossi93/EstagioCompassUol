import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma da Calculadora', () => {
  it('Deve somar 4 e 5 resultando em 9', () => {
    let resultado = Calculadora.soma(4, 5)
    expect(resultado).to.be.equal(9)
  })
  it('Deve somar -4 e 5 resultando em 1', () => {
    let resultado = Calculadora.soma(-4, 5)
    expect(resultado).to.be.equal(1)
  })
})

describe('Testes de Subtração', () => {
  it('Deve subtrair 4 e 5 resultando em -1', () => {
    let resultado = Calculadora.sub(4, 5)
    expect(resultado).to.be.equal(-1)
  })
})

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