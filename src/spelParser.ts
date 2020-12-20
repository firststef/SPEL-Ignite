import { CstParser } from "chevrotain";
import { allTokens, BGNP, CAST } from "./spelLexer";

class SpelParser extends CstParser{
    document: any;
    block: any;

    constructor() {
        super(allTokens);
        const $ = this;

        $.RULE("block", ()=>{
            $.CONSUME(CAST);
        });
        $.RULE("document", ()=>{
            $.OR([
                {ALT: () => {
                    $.CONSUME(BGNP);
                    $.SUBRULE($.block);
                }},
                {ALT: () => $.CONSUME2(BGNP) }
            ]);
        });

        this.performSelfAnalysis();
    }
}

const spelParser = new SpelParser();

export {
    SpelParser,
    spelParser
};