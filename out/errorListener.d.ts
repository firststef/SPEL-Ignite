declare const antlr4: any;
/**
 * Custom Error Listener
 *
 * @returns {object}
 */
declare class ErrorListener extends antlr4.error.ErrorListener {
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
    syntaxError(recognizer: any, symbol: any, line: any, column: any, message: any, payload: any): void;
}
export { ErrorListener };
