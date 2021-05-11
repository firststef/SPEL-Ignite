import { 
    SpelASTNode,
    SpelVisitor,
    SpelError,
} from './spelVisitor';

function compile(code: string, program: boolean = false): {status:string, result?:SpelASTNode, errors?:SpelError[]}{
    return new SpelVisitor().compile(code, program);
}

let res = compile('charge fire mana. release from hand.');
console.log(res);

export{
    compile
};