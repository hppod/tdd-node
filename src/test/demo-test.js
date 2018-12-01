const assert = require('chai').assert;
const demo = require('../demo-2/demo');

describe('Diferentes tipos de testes com Mocha & Chai: ', () => {
    it('Teste: Deve retornar a frase: "Mocha & Chai são legais!"', () => {
        assert.equal(demo(), 'Mocha & Chai são legais!');
    });
});