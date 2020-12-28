"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const antlr4ts_1 = require("antlr4ts");
const spelLexer_1 = require("./antlr_generated/spelLexer");
const spelParser_1 = require("./antlr_generated/spelParser");
const spelVisitor_1 = require("./spelVisitor");
const errorListener_1 = require("./errorListener");
function compile(s) {
    // Create the lexer and parser
    let inputStream = antlr4ts_1.CharStreams.fromString(s);
    let lexer = new spelLexer_1.spelLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new spelParser_1.spelParser(tokenStream);
    parser.removeErrorListeners();
    const listener = new errorListener_1.ErrorListener();
    parser.addErrorListener(listener);
    try {
        // Parse the input, where `compilationUnit` is whatever entry point you defined
        let tree = parser.document();
        const spelVisitor = new spelVisitor_1.SpelGenerateSourceVisitor();
        return {
            status: 'ok',
            result: spelVisitor.visit(tree)
        };
    }
    catch (e) {
        return {
            status: 'error',
            result: e.toString()
        };
    }
}
exports.compile = compile;
//# sourceMappingURL=index.js.map