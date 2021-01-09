import { describe, it } from 'mocha';
import { assert } from 'chai';
import { compile } from '../src/index';

describe('compile tests', () => {
    it('should compile simple test', function shouldCompileSimpleTo() {
        let testStr = `
        The tale begins.
        craft artifact points basic_attack bestow 3.`;
        
        let res = compile(testStr).result.source;
        assert.equal('Genesis();\nlet basic_attack = 3;', res);
    });

    it('should compile simple class test', function shouldCompileSimpleTo() {
        let testStr = `
        The tale begins.

        I summon thy name Player
            craft points mana bestow 1.
        and thy brethren.`;
        
        let res = compile(testStr).result.source;
        assert.equal('Genesis();\nclass Player { mana = 1;}', res);
    });
});