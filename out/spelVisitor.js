"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpelVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class SpelVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return;
    }
    visitDocument(ctx) {
        console.log('wow');
        return 0;
    }
    visitBlock(ctx) {
        return 0;
    }
}
exports.SpelVisitor = SpelVisitor;
//# sourceMappingURL=spelVisitor.js.map