const chai = require('chai');
const calculadora = require('../demo-1/calculadora');

const assert = chai.assert;

describe('TDD de Operações da Calculadora', ()=> {

    it('Teste: Deve somar 2 números', () => {
        assert.equal(calculadora.adicionar(5,5),10);
    });

    
})