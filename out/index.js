"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const spelVisitor_1 = require("./spelVisitor");
function compile(code, program = false) {
    return new spelVisitor_1.SpelVisitor().compile(code, program);
}
exports.compile = compile;
let res = compile('cast fire.');
let x = 0;
//# sourceMappingURL=index.js.map