import { describe, it } from 'mocha';
import { assert } from 'chai';
import { compile } from '../src/index';

describe('compile tests', () => {
    it('should compile simple test', function shouldCompileSimpleTo() {
        let testStr = `
        The tale begins.
        craft artifact points basic_attack bestow 3.`;

        assert.equal('', compile(testStr).source);
    });
});