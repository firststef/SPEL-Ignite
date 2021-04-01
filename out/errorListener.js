"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorListener = void 0;
const spelVisitor_1 = require("./spelVisitor");
const antlr4 = require('antlr4');
const path = require('path');
const { SyntaxGenericError } = require('./error/helper');
/**
 * Custom Error Listener
 *
 * @returns {object}
 */
class ErrorListener extends antlr4.error.ErrorListener {
    /**
     * Checks syntax error
     *
     * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
     * @param {object} symbol Offending symbol
     * @param {int} line Line of offending symbol
     * @param {int} column Position in line of offending symbol
     * @param {string} message Error message
     * @param {string} payload Stack trace
     */
    constructor(visitor) {
        super();
        this.visitor = visitor;
    }
    syntaxError(recognizer, symbol, line, column, message, payload) {
        this.visitor.lv(new spelVisitor_1.SpelError(new spelVisitor_1.SourceRange(line, column), message));
        throw "";
    }
}
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=errorListener.js.map