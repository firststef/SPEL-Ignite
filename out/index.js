"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const antlr4ts_1 = require("antlr4ts");
const spelLexer_1 = require("./antlr_generated/spelLexer");
const spelParser_1 = require("./antlr_generated/spelParser");
const spelVisitor_1 = require("./spelVisitor");
function run() {
    // Create the lexer and parser
    let inputStream = antlr4ts_1.CharStreams.fromString("The tale begins.");
    let lexer = new spelLexer_1.spelLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new spelParser_1.spelParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.document();
    const spelVisitor = new spelVisitor_1.SpelVisitor();
    spelVisitor.visit(tree);
}
exports.run = run;
//# sourceMappingURL=index.js.map