var gen = require('../src/generators/basic');
var _ = require('lodash');
var utils = require('../src/utils');
var expect = require('chai').expect;

describe('basic generators', () => {
    it('should generate byte between 0 and 255', () => {
        _.times(30, () => expect(gen.byte()).to.be.within(0, 255));
    });
    
    it('generate a random character', () => {
        _.times(30, () => {
            var char = gen.char();
            expect(char).to.be.a('string');
            expect(char).to.have.length(1);
        });
    });

    it('should generate a boolean value', () => {
        _.times(30, () => expect(gen.bool()).to.be.a('boolean'));
    });

    it('should generate random ascii character', () => {
        expect(utils.isAscii(gen.ascii())).to.be.true;
    });

    it('should generate a falsy value', () => {
        _.times(30, () => expect(gen.falsy()).to.not.be.true);
    });
});
