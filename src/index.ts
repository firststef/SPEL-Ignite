import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { spelLexer } from './antlr_generated/spelLexer';
import { spelParser } from './antlr_generated/spelParser';
import { SpelVisitor } from './spelVisitor';
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

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.document();

    const spelVisitor = new SpelVisitor();
    return spelVisitor.visit(tree);
}

export{
    compile
};