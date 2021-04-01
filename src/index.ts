import { 
    SpelASTNode,
    SpelVisitor,
    SpelError,
} from './spelVisitor';

function compile(code: string, program: boolean = false): {status:string, result?:SpelASTNode, errors?:SpelError[]}{
    return new SpelVisitor().compile(code, program);
}

let res = compile('cast enchant fire with spelfire..');
let x = 0;

export{
    compile
};