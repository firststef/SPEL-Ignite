"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const spelLexer_1 = require("../src/spelLexer");
const spelParser_1 = require("../src/spelParser");
const spelVisitor_1 = require("../src/spelVisitor");
function run(text) {
    // 1. Tokenize the input.
    const lexResult = spelLexer_1.SpelLexer.tokenize(text);
    // 2. Parse the Tokens vector.
    spelParser_1.spelParser.input = lexResult.tokens;
    const cst = spelParser_1.spelParser.document();
    // 3. Perform semantics using a CstVisitor.
    // Note that separation of concerns between the syntactic analysis (parsing) and the semantics.
    const value = spelVisitor_1.spelVisitor.visit(cst);
    return {
        value: value,
        lexResult: lexResult,
        parseErrors: spelParser_1.spelParser.errors
    };
}
exports.run = run;
//# sourceMappingURL=index.js.map