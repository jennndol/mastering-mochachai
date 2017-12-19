const index = require('../index');
const numberToText = require('../bilang');
const assert = require('chai').assert;

// promise test
it('promise sum test', (done) => {
    index.sum(8, 9).then(result => {
        assert.equal(result, 17);
        assert.typeOf(result, 'number');
    }).then(done);
});

// callback test
it('callback multiply test', (done) => {
    index.multiply(8, 9, (result) => {
        assert.equal(result, 72);
        assert.typeOf(result, 'number');
    });
    done();
});

// promise test
it('promise min test', (done) => {
    index.min(4, 2).then(result => {
        assert.equal(result, 2);
        assert.typeOf(result, 'number');
    }).then(done);
});

// common function test
it('dua puluh satu', (done) => {
    let result = numberToText(21);
    assert.equal(result, 'dua puluh satu');
    assert.typeOf(result, 'string');
    done();
});

// common function test
it('sembilan ratus sembilan puluh sembilan', (done) => {
    let result = numberToText(999);
    assert.equal(result, 'sembilan ratus sembilan puluh sembilan');
    assert.typeOf(result, 'string');
    done();
});

// common function test
it('minus sembilan ratus sembilan puluh sembilan', (done) => {
    let result = numberToText(-999);
    assert.equal(result, 'minus sembilan ratus sembilan puluh sembilan');
    assert.typeOf(result, 'string');
    done();
});