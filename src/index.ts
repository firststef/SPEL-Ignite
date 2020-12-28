import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { spelLexer } from './antlr_generated/spelLexer';
import { spelParser } from './antlr_generated/spelParser';
import { 
    SpelGenerateSourceVisitor,
    SpelGenerateSourceVariant
} from './spelVisitor';
import { ErrorListener } from './errorListener';

function compile(s: string){
    // Create the lexer and parser
    let inputStream = CharStreams.fromString(s);
    let lexer = new spelLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new spelParser(tokenStream);
    parser.removeErrorListeners();

    const listener = new ErrorListener();
    parser.addErrorListener(listener);

    try{
        // Parse the input, where `compilationUnit` is whatever entry point you defined
        let tree = parser.document();

        const spelVisitor = new SpelGenerateSourceVisitor();
        return {
            status: 'ok',
            result: spelVisitor.visit(tree)
        };
    }
    catch(e){
        return{
            status: 'error',
            result: e.toString()
        }
    }
}

export{
    compile
};