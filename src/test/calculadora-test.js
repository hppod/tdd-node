const chai = require('chai');
const calculadora = require('../demo-1/calculadora');

const assert = chai.assert;

describe('TDD de Operações da Calculadora', () => {

    it('Teste: Deve somar 2 números', () => {
        assert.equal(calculadora.adicionar(5, 5), 10);
    });

    it('Teste: Deve subtrair 2 números', () => {
        assert.equal(calculadora.subtrair(10, 5), 5);
    });

    it('Teste: Deve multiplicar 2 números', () => {
        assert.equal(calculadora.multiplicar(10, 5), 50);
    });

    it('Teste: Deve dividir 2 números', () => {
        assert.equal(calculadora.dividir(18, 2), 9);
    });
});