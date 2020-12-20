import { SpelLexer } from '../src/spelLexer'
import { spelParser } from '../src/spelParser'
import { spelVisitor } from '../src/spelVisitor'

function run (text: string) {
    // 1. Tokenize the input.
    const lexResult = SpelLexer.tokenize(text)
  
    // 2. Parse the Tokens vector.
    spelParser.input = lexResult.tokens
    const cst = spelParser.document()
  
    // 3. Perform semantics using a CstVisitor.
    // Note that separation of concerns between the syntactic analysis (parsing) and the semantics.
    const value = spelVisitor.visit(cst)
  
    return {
      value: value,
      lexResult: lexResult,
      parseErrors: spelParser.errors
    }
}

export{
    run
};