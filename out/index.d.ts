import { SpelASTNode, SpelError } from './spelVisitor';
declare function compile(code: string, program?: boolean): {
    status: string;
    result?: SpelASTNode;
    errors?: SpelError[];
};
export { compile };
