import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { spelLexer } from './antlr_generated/spelLexer';
import { spelParser } from './antlr_generated/spelParser';
import { SpelVisitor } from './spelVisitor';

function run(){
    // Create the lexer and parser
    let inputStream = CharStreams.fromString("The tale begins.");
    let lexer = new spelLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new spelParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.document();

    const spelVisitor = new SpelVisitor();
    spelVisitor.visit(tree);
}

export{
    run
};