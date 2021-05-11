"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorListener = void 0;
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
        //this.visitor.lv(new SpelError(new SourceRange(line, column), message));
    }
}
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=errorListener.js.map