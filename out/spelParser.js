"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spelParser = exports.SpelParser = void 0;
const chevrotain_1 = require("chevrotain");
const spelLexer_1 = require("./spelLexer");
class SpelParser extends chevrotain_1.CstParser {
    constructor() {
        super(spelLexer_1.allTokens);
        const $ = this;
        $.RULE("block", () => {
            $.CONSUME(spelLexer_1.CAST);
        });
        $.RULE("document", () => {
            $.OR([
                { ALT: () => {
                        $.CONSUME(spelLexer_1.BGNP);
                        $.SUBRULE($.block);
                    } },
                { ALT: () => $.CONSUME2(spelLexer_1.BGNP) }
            ]);
        });
        this.performSelfAnalysis();
    }
}
exports.SpelParser = SpelParser;
const spelParser = new SpelParser();
exports.spelParser = spelParser;
//# sourceMappingURL=spelParser.js.map