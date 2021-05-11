"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const spelVisitor_1 = require("./spelVisitor");
function compile(code, program = false) {
    return new spelVisitor_1.SpelVisitor().compile(code, program);
}
exports.compile = compile;
let res = compile('charge fire mana. release from hand.');
console.log(res);
//# sourceMappingURL=index.js.map