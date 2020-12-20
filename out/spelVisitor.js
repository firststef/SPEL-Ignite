"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spelVisitor = exports.SpelVisitor = void 0;
const spelParser_1 = require("./spelParser");
const BaseCstVisitor = spelParser_1.spelParser.getBaseCstVisitorConstructor();
class SpelVisitor extends BaseCstVisitor {
    constructor() {
        super();
        this.validateVisitor();
    }
    document(ctx) {
        if (ctx.block) {
            return 'start ' + this.visit(ctx.block);
        }
        else {
            return 'empty';
        }
    }
    block(ctx) {
        return 'program';
    }
}
exports.SpelVisitor = SpelVisitor;
const spelVisitor = new SpelVisitor();
exports.spelVisitor = spelVisitor;
//# sourceMappingURL=spelVisitor.js.map