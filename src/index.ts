import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { spelLexer } from './antlr_generated/spelLexer';
import { spelParser } from './antlr_generated/spelParser';
import { SpelVisitor } from './spelVisitor';
import { ErrorListener } from './errorListener';

function run(){
    // Create the lexer and parser

    let testStr = `
    The tale begins.

    craft artifact points basic_attack bestow 3.
    `;

    let inputStream = CharStreams.fromString(testStr);
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
    run
};