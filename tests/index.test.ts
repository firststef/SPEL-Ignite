import { assert, expect } from 'chai';
import { Suite } from 'mocha';
import { run } from '../src/index';

describe('single-run test', () => {
    it('test', () => {
        let res = run('The tale begins.');
        assert(res.value == 'empty');
        res = run('The tale begins. cast');
        assert(res.value == 'start program');
    });
})