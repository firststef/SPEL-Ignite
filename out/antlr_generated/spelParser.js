"use strict";
// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Named_expressionContext = exports.Field_expressionContext = exports.Paren_expressionContext = exports.Minus_expressionContext = exports.Basic_type_expressionContext = exports.List_expressionsContext = exports.ExpressionContext = exports.ModificationContext = exports.List_typed_identifiersContext = exports.CallContext = exports.AssignmentContext = exports.Class_definitionContext = exports.Function_definitionContext = exports.Variable_declarationContext = exports.List_of_declarationsContext = exports.DeclarationContext = exports.List_of_statementsContext = exports.None_statementContext = exports.Import_statementContext = exports.StatementContext = exports.Block_itemContext = exports.BlockContext = exports.Headless_documentContext = exports.DocumentContext = exports.spelParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class spelParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(spelParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return spelParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "spel.g4"; }
    // @Override
    get ruleNames() { return spelParser.ruleNames; }
    // @Override
    get serializedATN() { return spelParser._serializedATN; }
    // @RuleVersion(0)
    document() {
        let _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, spelParser.RULE_document);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.BGND) {
                    {
                        this.state = 48;
                        this.match(spelParser.BGND);
                        this.state = 49;
                        _localctx._declr_block = this.block(0);
                    }
                }
                this.state = 52;
                this.match(spelParser.BGNP);
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spelParser.T__3) | (1 << spelParser.T__7) | (1 << spelParser.BGNC) | (1 << spelParser.IMP) | (1 << spelParser.CRAFT) | (1 << spelParser.ENCHANT) | (1 << spelParser.CAST))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (spelParser.DOT - 34)) | (1 << (spelParser.NUMBER - 34)) | (1 << (spelParser.IDENTIFIER - 34)) | (1 << (spelParser.STRING - 34)))) !== 0)) {
                    {
                        this.state = 53;
                        _localctx._program = this.block(0);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    headless_document() {
        let _localctx = new Headless_documentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, spelParser.RULE_headless_document);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.block(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new BlockContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 4;
        this.enterRecursionRule(_localctx, 4, spelParser.RULE_block, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 59;
                    _localctx._sole = this.block_item();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 65;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BlockContext(_parentctx, _parentState);
                                _localctx._current = _prevctx;
                                this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_block);
                                this.state = 61;
                                if (!(this.precpred(this._ctx, 2))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                }
                                this.state = 62;
                                _localctx._next = this.block_item();
                            }
                        }
                    }
                    this.state = 67;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block_item() {
        let _localctx = new Block_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, spelParser.RULE_block_item);
        try {
            this.state = 70;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 68;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this.declaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, spelParser.RULE_statement);
        try {
            this.state = 76;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 72;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 73;
                        this.call();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 74;
                        this.import_statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 75;
                        this.none_statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    import_statement() {
        let _localctx = new Import_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, spelParser.RULE_import_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.match(spelParser.IMP);
                this.state = 79;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 80;
                this.match(spelParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    none_statement() {
        let _localctx = new None_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, spelParser.RULE_none_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(spelParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_of_statements() {
        let _localctx = new List_of_statementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, spelParser.RULE_list_of_statements);
        try {
            this.state = 88;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 84;
                        this.statement();
                        this.state = 85;
                        _localctx._next = this.list_of_statements();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 87;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, spelParser.RULE_declaration);
        try {
            this.state = 93;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.CRAFT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 90;
                        this.variable_declaration();
                    }
                    break;
                case spelParser.BGNC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 91;
                        this.class_definition();
                    }
                    break;
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 92;
                        this.function_definition();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_of_declarations() {
        let _localctx = new List_of_declarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, spelParser.RULE_list_of_declarations);
        try {
            this.state = 99;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 95;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 96;
                        this.declaration();
                        this.state = 97;
                        _localctx._next = this.list_of_declarations();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_declaration() {
        let _localctx = new Variable_declarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, spelParser.RULE_variable_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(spelParser.CRAFT);
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.ARTIFACT) {
                    {
                        this.state = 102;
                        this.match(spelParser.ARTIFACT);
                    }
                }
                this.state = 105;
                _localctx._arg_type = this.match(spelParser.IDENTIFIER);
                this.state = 106;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.BESTOW) {
                    {
                        this.state = 107;
                        this.match(spelParser.BESTOW);
                        this.state = 108;
                        _localctx._value = this.expression(0);
                    }
                }
                this.state = 111;
                this.match(spelParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_definition() {
        let _localctx = new Function_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, spelParser.RULE_function_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                _localctx._func_type = this.match(spelParser.IDENTIFIER);
                this.state = 114;
                this.match(spelParser.SPELL);
                this.state = 115;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 116;
                this.match(spelParser.SACRIFICE);
                this.state = 117;
                _localctx._params = this.list_typed_identifiers();
                this.state = 118;
                this.match(spelParser.T__0);
                this.state = 119;
                _localctx._statements = this.list_of_statements();
                this.state = 120;
                this.match(spelParser.TERMINUS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    class_definition() {
        let _localctx = new Class_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, spelParser.RULE_class_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(spelParser.BGNC);
                this.state = 123;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 124;
                _localctx._declarations = this.list_of_declarations();
                this.state = 125;
                this.match(spelParser.ENC);
                this.state = 126;
                this.match(spelParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, spelParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                _localctx._expr = this.expression(0);
                this.state = 129;
                this.match(spelParser.BECOMES);
                this.state = 130;
                _localctx._value = this.expression(0);
                this.state = 131;
                this.match(spelParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    call() {
        let _localctx = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, spelParser.RULE_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(spelParser.CAST);
                this.state = 134;
                _localctx._expr = this.expression(0);
                this.state = 137;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 135;
                            this.match(spelParser.SACRIFICE);
                            this.state = 136;
                            _localctx._params = this.list_expressions();
                        }
                        break;
                }
                this.state = 140;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 139;
                            this.match(spelParser.DOT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_typed_identifiers() {
        let _localctx = new List_typed_identifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, spelParser.RULE_list_typed_identifiers);
        try {
            this.state = 148;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 142;
                        _localctx._type = this.match(spelParser.IDENTIFIER);
                        this.state = 143;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 144;
                        this.match(spelParser.T__1);
                        this.state = 145;
                        _localctx._next = this.list_typed_identifiers();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 146;
                        _localctx._type = this.match(spelParser.IDENTIFIER);
                        this.state = 147;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modification() {
        let _localctx = new ModificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, spelParser.RULE_modification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this.match(spelParser.ENCHANT);
                this.state = 151;
                _localctx._expr = this.expression(0);
                this.state = 152;
                this.match(spelParser.WITH);
                this.state = 153;
                _localctx._value = this.expression(0);
                this.state = 155;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 154;
                            this.match(spelParser.DOT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 34;
        this.enterRecursionRule(_localctx, 34, spelParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 158;
                            _localctx._basic_type_t = this.basic_type_expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 159;
                            _localctx._named_expression_t = this.named_expression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 160;
                            _localctx._minus_expression_t = this.minus_expression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 161;
                            _localctx._paren_expression_t = this.paren_expression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 162;
                            _localctx._field_expression_t = this.field_expression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 163;
                            _localctx._modifaction_expression_t = this.modification();
                        }
                        break;
                    case 7:
                        {
                            this.state = 164;
                            _localctx._call_expression_t = this.call();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 184;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 182;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 167;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 168;
                                        _localctx._sign = this.match(spelParser.T__2);
                                        this.state = 169;
                                        _localctx._rexpr = this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 170;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 171;
                                        _localctx._sign = this.match(spelParser.T__3);
                                        this.state = 172;
                                        _localctx._rexpr = this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 173;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 174;
                                        _localctx._sign = this.match(spelParser.T__4);
                                        this.state = 175;
                                        _localctx._rexpr = this.expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 176;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 177;
                                        _localctx._sign = this.match(spelParser.T__5);
                                        this.state = 178;
                                        _localctx._rexpr = this.expression(3);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 179;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 180;
                                        _localctx._sign = this.match(spelParser.T__6);
                                        this.state = 181;
                                        _localctx._rexpr = this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 186;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_expressions() {
        let _localctx = new List_expressionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, spelParser.RULE_list_expressions);
        try {
            this.state = 192;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        this.expression(0);
                        this.state = 188;
                        this.match(spelParser.T__1);
                        this.state = 189;
                        _localctx._next = this.list_expressions();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.expression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    basic_type_expression() {
        let _localctx = new Basic_type_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, spelParser.RULE_basic_type_expression);
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 194;
                        _localctx._number_type = this.match(spelParser.NUMBER);
                    }
                    break;
                case spelParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 195;
                        _localctx._string_type = this.match(spelParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    minus_expression() {
        let _localctx = new Minus_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, spelParser.RULE_minus_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(spelParser.T__3);
                this.state = 199;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paren_expression() {
        let _localctx = new Paren_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, spelParser.RULE_paren_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.match(spelParser.T__7);
                this.state = 202;
                this.expression(0);
                this.state = 203;
                this.match(spelParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    field_expression() {
        let _localctx = new Field_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, spelParser.RULE_field_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this.match(spelParser.IDENTIFIER);
                this.state = 206;
                this.match(spelParser.OF);
                this.state = 207;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    named_expression() {
        let _localctx = new Named_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, spelParser.RULE_named_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this.match(spelParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.block_sempred(_localctx, predIndex);
            case 17:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    block_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 5);
            case 2:
                return this.precpred(this._ctx, 4);
            case 3:
                return this.precpred(this._ctx, 3);
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!spelParser.__ATN) {
            spelParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(spelParser._serializedATN));
        }
        return spelParser.__ATN;
    }
}
exports.spelParser = spelParser;
spelParser.T__0 = 1;
spelParser.T__1 = 2;
spelParser.T__2 = 3;
spelParser.T__3 = 4;
spelParser.T__4 = 5;
spelParser.T__5 = 6;
spelParser.T__6 = 7;
spelParser.T__7 = 8;
spelParser.T__8 = 9;
spelParser.COMMENT = 10;
spelParser.WHITESPACE = 11;
spelParser.BGND = 12;
spelParser.BGNP = 13;
spelParser.BGNC = 14;
spelParser.ENC = 15;
spelParser.IMP = 16;
spelParser.CRAFT = 17;
spelParser.ARTIFACT = 18;
spelParser.BESTOW = 19;
spelParser.SPELL = 20;
spelParser.SACRIFICE = 21;
spelParser.TERMINUS = 22;
spelParser.POINTS = 23;
spelParser.PRECISE = 24;
spelParser.RUNE = 25;
spelParser.ABSOLUTE = 26;
spelParser.TOME = 27;
spelParser.ENCHANT = 28;
spelParser.WITH = 29;
spelParser.OF = 30;
spelParser.CAST = 31;
spelParser.TRANSMUTE = 32;
spelParser.BECOMES = 33;
spelParser.DOT = 34;
spelParser.NUMBER = 35;
spelParser.IDENTIFIER = 36;
spelParser.STRING = 37;
spelParser.RULE_document = 0;
spelParser.RULE_headless_document = 1;
spelParser.RULE_block = 2;
spelParser.RULE_block_item = 3;
spelParser.RULE_statement = 4;
spelParser.RULE_import_statement = 5;
spelParser.RULE_none_statement = 6;
spelParser.RULE_list_of_statements = 7;
spelParser.RULE_declaration = 8;
spelParser.RULE_list_of_declarations = 9;
spelParser.RULE_variable_declaration = 10;
spelParser.RULE_function_definition = 11;
spelParser.RULE_class_definition = 12;
spelParser.RULE_assignment = 13;
spelParser.RULE_call = 14;
spelParser.RULE_list_typed_identifiers = 15;
spelParser.RULE_modification = 16;
spelParser.RULE_expression = 17;
spelParser.RULE_list_expressions = 18;
spelParser.RULE_basic_type_expression = 19;
spelParser.RULE_minus_expression = 20;
spelParser.RULE_paren_expression = 21;
spelParser.RULE_field_expression = 22;
spelParser.RULE_named_expression = 23;
// tslint:disable:no-trailing-whitespace
spelParser.ruleNames = [
    "document", "headless_document", "block", "block_item", "statement", "import_statement",
    "none_statement", "list_of_statements", "declaration", "list_of_declarations",
    "variable_declaration", "function_definition", "class_definition", "assignment",
    "call", "list_typed_identifiers", "modification", "expression", "list_expressions",
    "basic_type_expression", "minus_expression", "paren_expression", "field_expression",
    "named_expression",
];
spelParser._LITERAL_NAMES = [
    undefined, "':'", "','", "'+'", "'-'", "'/'", "'*'", "'^'", "'('", "')'",
    undefined, undefined, "'In the beginning...'", "'The tale begins.'", "'I summon thy name'",
    "'and thy brethren.'", "'Legend tells of'", "'craft'", "'artifact'", "'bestow'",
    "'spell'", "'sacrifice'", "'terminus'", "'points'", "'precise'", "'rune'",
    "'absolute'", "'tome'", "'enchant'", "'with'", "'of'", "'cast'", "'transmute'",
    "'becomes'", "'.'",
];
spelParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "COMMENT", "WHITESPACE", "BGND", "BGNP",
    "BGNC", "ENC", "IMP", "CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE",
    "TERMINUS", "POINTS", "PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT",
    "WITH", "OF", "CAST", "TRANSMUTE", "BECOMES", "DOT", "NUMBER", "IDENTIFIER",
    "STRING",
];
spelParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(spelParser._LITERAL_NAMES, spelParser._SYMBOLIC_NAMES, []);
spelParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xD6\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x05\x025\n\x02\x03\x02\x03\x02" +
    "\x05\x029\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x07\x04B\n\x04\f\x04\x0E\x04E\v\x04\x03\x05\x03\x05\x05\x05I\n\x05\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x05\x06O\n\x06\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t[\n\t\x03\n\x03\n\x03\n" +
    "\x05\n`\n\n\x03\v\x03\v\x03\v\x03\v\x05\vf\n\v\x03\f\x03\f\x05\fj\n\f" +
    "\x03\f\x03\f\x03\f\x03\f\x05\fp\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x05\x10\x8C\n\x10\x03\x10\x05\x10\x8F\n\x10\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x11\x05\x11\x97\n\x11\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x05\x12\x9E\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x05\x13\xA8\n\x13\x03\x13\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x07\x13\xB9\n\x13\f\x13\x0E\x13\xBC\v\x13\x03" +
    "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xC3\n\x14\x03\x15\x03\x15" +
    "\x05\x15\xC7\n\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
    "\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x02\x02\x04" +
    "\x06$\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x02\x02\x02\x02\xDB\x024\x03\x02\x02\x02\x04" +
    ":\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bH\x03\x02\x02\x02\nN\x03\x02\x02" +
    "\x02\fP\x03\x02\x02\x02\x0ET\x03\x02\x02\x02\x10Z\x03\x02\x02\x02\x12" +
    "_\x03\x02\x02\x02\x14e\x03\x02\x02\x02\x16g\x03\x02\x02\x02\x18s\x03\x02" +
    "\x02\x02\x1A|\x03\x02\x02\x02\x1C\x82\x03\x02\x02\x02\x1E\x87\x03\x02" +
    "\x02\x02 \x96\x03\x02\x02\x02\"\x98\x03\x02\x02\x02$\xA7\x03\x02\x02\x02" +
    "&\xC2\x03\x02\x02\x02(\xC6\x03\x02\x02\x02*\xC8\x03\x02\x02\x02,\xCB\x03" +
    "\x02\x02\x02.\xCF\x03\x02\x02\x020\xD3\x03\x02\x02\x0223\x07\x0E\x02\x02" +
    "35\x05\x06\x04\x0242\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x02" +
    "68\x07\x0F\x02\x0279\x05\x06\x04\x0287\x03\x02\x02\x0289\x03\x02\x02\x02" +
    "9\x03\x03\x02\x02\x02:;\x05\x06\x04\x02;\x05\x03\x02\x02\x02<=\b\x04\x01" +
    "\x02=>\x05\b\x05\x02>C\x03\x02\x02\x02?@\f\x04\x02\x02@B\x05\b\x05\x02" +
    "A?\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02" +
    "D\x07\x03\x02\x02\x02EC\x03\x02\x02\x02FI\x05\n\x06\x02GI\x05\x12\n\x02" +
    "HF\x03\x02\x02\x02HG\x03\x02\x02\x02I\t\x03\x02\x02\x02JO\x05\x1C\x0F" +
    "\x02KO\x05\x1E\x10\x02LO\x05\f\x07\x02MO\x05\x0E\b\x02NJ\x03\x02\x02\x02" +
    "NK\x03\x02\x02\x02NL\x03\x02\x02\x02NM\x03\x02\x02\x02O\v\x03\x02\x02" +
    "\x02PQ\x07\x12\x02\x02QR\x07&\x02\x02RS\x07$\x02\x02S\r\x03\x02\x02\x02" +
    "TU\x07$\x02\x02U\x0F\x03\x02\x02\x02VW\x05\n\x06\x02WX\x05\x10\t\x02X" +
    "[\x03\x02\x02\x02Y[\x05\n\x06\x02ZV\x03\x02\x02\x02ZY\x03\x02\x02\x02" +
    "[\x11\x03\x02\x02\x02\\`\x05\x16\f\x02]`\x05\x1A\x0E\x02^`\x05\x18\r\x02" +
    "_\\\x03\x02\x02\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`\x13\x03\x02\x02" +
    "\x02af\x05\x12\n\x02bc\x05\x12\n\x02cd\x05\x14\v\x02df\x03\x02\x02\x02" +
    "ea\x03\x02\x02\x02eb\x03\x02\x02\x02f\x15\x03\x02\x02\x02gi\x07\x13\x02" +
    "\x02hj\x07\x14\x02\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02" +
    "\x02kl\x07&\x02\x02lo\x07&\x02\x02mn\x07\x15\x02\x02np\x05$\x13\x02om" +
    "\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x07$\x02\x02r\x17" +
    "\x03\x02\x02\x02st\x07&\x02\x02tu\x07\x16\x02\x02uv\x07&\x02\x02vw\x07" +
    "\x17\x02\x02wx\x05 \x11\x02xy\x07\x03\x02\x02yz\x05\x10\t\x02z{\x07\x18" +
    "\x02\x02{\x19\x03\x02\x02\x02|}\x07\x10\x02\x02}~\x07&\x02\x02~\x7F\x05" +
    "\x14\v\x02\x7F\x80\x07\x11\x02\x02\x80\x81\x07$\x02\x02\x81\x1B\x03\x02" +
    "\x02\x02\x82\x83\x05$\x13\x02\x83\x84\x07#\x02\x02\x84\x85\x05$\x13\x02" +
    "\x85\x86\x07$\x02\x02\x86\x1D\x03\x02\x02\x02\x87\x88\x07!\x02\x02\x88" +
    "\x8B\x05$\x13\x02\x89\x8A\x07\x17\x02\x02\x8A\x8C\x05&\x14\x02\x8B\x89" +
    "\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F" +
    "\x07$\x02\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x1F" +
    "\x03\x02\x02\x02\x90\x91\x07&\x02\x02\x91\x92\x07&\x02\x02\x92\x93\x07" +
    "\x04\x02\x02\x93\x97\x05 \x11\x02\x94\x95\x07&\x02\x02\x95\x97\x07&\x02" +
    "\x02\x96\x90\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97!\x03\x02\x02" +
    "\x02\x98\x99\x07\x1E\x02\x02\x99\x9A\x05$\x13\x02\x9A\x9B\x07\x1F\x02" +
    "\x02\x9B\x9D\x05$\x13\x02\x9C\x9E\x07$\x02\x02\x9D\x9C\x03\x02\x02\x02" +
    "\x9D\x9E\x03\x02\x02\x02\x9E#\x03\x02\x02\x02\x9F\xA0\b\x13\x01\x02\xA0" +
    "\xA8\x05(\x15\x02\xA1\xA8\x050\x19\x02\xA2\xA8\x05*\x16\x02\xA3\xA8\x05" +
    ",\x17\x02\xA4\xA8\x05.\x18\x02\xA5\xA8\x05\"\x12\x02\xA6\xA8\x05\x1E\x10" +
    "\x02\xA7\x9F\x03\x02\x02\x02\xA7\xA1\x03\x02\x02\x02\xA7\xA2\x03\x02\x02" +
    "\x02\xA7\xA3\x03\x02\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02" +
    "\x02\xA7\xA6\x03\x02\x02\x02\xA8\xBA\x03\x02\x02\x02\xA9\xAA\f\x07\x02" +
    "\x02\xAA\xAB\x07\x05\x02\x02\xAB\xB9\x05$\x13\b\xAC\xAD\f\x06\x02\x02" +
    "\xAD\xAE\x07\x06\x02\x02\xAE\xB9\x05$\x13\x07\xAF\xB0\f\x05\x02\x02\xB0" +
    "\xB1\x07\x07\x02\x02\xB1\xB9\x05$\x13\x06\xB2\xB3\f\x04\x02\x02\xB3\xB4" +
    "\x07\b\x02\x02\xB4\xB9\x05$\x13\x05\xB5\xB6\f\x03\x02\x02\xB6\xB7\x07" +
    "\t\x02\x02\xB7\xB9\x05$\x13\x04\xB8\xA9\x03\x02\x02\x02\xB8\xAC\x03\x02" +
    "\x02\x02\xB8\xAF\x03\x02\x02\x02\xB8\xB2\x03\x02\x02\x02\xB8\xB5\x03\x02" +
    "\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
    "\x02\x02\xBB%\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x05$\x13" +
    "\x02\xBE\xBF\x07\x04\x02\x02\xBF\xC0\x05&\x14\x02\xC0\xC3\x03\x02\x02" +
    "\x02\xC1\xC3\x05$\x13\x02\xC2\xBD\x03\x02\x02\x02\xC2\xC1\x03\x02\x02" +
    "\x02\xC3\'\x03\x02\x02\x02\xC4\xC7\x07%\x02\x02\xC5\xC7\x07\'\x02\x02" +
    "\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7)\x03\x02\x02\x02" +
    "\xC8\xC9\x07\x06\x02\x02\xC9\xCA\x05$\x13\x02\xCA+\x03\x02\x02\x02\xCB" +
    "\xCC\x07\n\x02\x02\xCC\xCD\x05$\x13\x02\xCD\xCE\x07\v\x02\x02\xCE-\x03" +
    "\x02\x02\x02\xCF\xD0\x07&\x02\x02\xD0\xD1\x07 \x02\x02\xD1\xD2\x05$\x13" +
    "\x02\xD2/\x03\x02\x02\x02\xD3\xD4\x07&\x02\x02\xD41\x03\x02\x02\x02\x15" +
    "48CHNZ_eio\x8B\x8E\x96\x9D\xA7\xB8\xBA\xC2\xC6";
class DocumentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BGNP() { return this.getToken(spelParser.BGNP, 0); }
    BGND() { return this.tryGetToken(spelParser.BGND, 0); }
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        else {
            return this.getRuleContext(i, BlockContext);
        }
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_document; }
    // @Override
    enterRule(listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DocumentContext = DocumentContext;
class Headless_documentContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_headless_document; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeadless_document) {
            listener.enterHeadless_document(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeadless_document) {
            listener.exitHeadless_document(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHeadless_document) {
            return visitor.visitHeadless_document(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Headless_documentContext = Headless_documentContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    block_item() {
        return this.getRuleContext(0, Block_itemContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class Block_itemContext extends ParserRuleContext_1.ParserRuleContext {
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_block_item; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock_item) {
            listener.enterBlock_item(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock_item) {
            listener.exitBlock_item(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock_item) {
            return visitor.visitBlock_item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Block_itemContext = Block_itemContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    call() {
        return this.tryGetRuleContext(0, CallContext);
    }
    import_statement() {
        return this.tryGetRuleContext(0, Import_statementContext);
    }
    none_statement() {
        return this.tryGetRuleContext(0, None_statementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class Import_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMP() { return this.getToken(spelParser.IMP, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_import_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterImport_statement) {
            listener.enterImport_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImport_statement) {
            listener.exitImport_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImport_statement) {
            return visitor.visitImport_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Import_statementContext = Import_statementContext;
class None_statementContext extends ParserRuleContext_1.ParserRuleContext {
    DOT() { return this.getToken(spelParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_none_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterNone_statement) {
            listener.enterNone_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNone_statement) {
            listener.exitNone_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNone_statement) {
            return visitor.visitNone_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.None_statementContext = None_statementContext;
class List_of_statementsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    list_of_statements() {
        return this.tryGetRuleContext(0, List_of_statementsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_of_statements; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_of_statements) {
            listener.enterList_of_statements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_of_statements) {
            listener.exitList_of_statements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_of_statements) {
            return visitor.visitList_of_statements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_of_statementsContext = List_of_statementsContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    variable_declaration() {
        return this.tryGetRuleContext(0, Variable_declarationContext);
    }
    class_definition() {
        return this.tryGetRuleContext(0, Class_definitionContext);
    }
    function_definition() {
        return this.tryGetRuleContext(0, Function_definitionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class List_of_declarationsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    list_of_declarations() {
        return this.tryGetRuleContext(0, List_of_declarationsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_of_declarations; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_of_declarations) {
            listener.enterList_of_declarations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_of_declarations) {
            listener.exitList_of_declarations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_of_declarations) {
            return visitor.visitList_of_declarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_of_declarationsContext = List_of_declarationsContext;
class Variable_declarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CRAFT() { return this.getToken(spelParser.CRAFT, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    ARTIFACT() { return this.tryGetToken(spelParser.ARTIFACT, 0); }
    BESTOW() { return this.tryGetToken(spelParser.BESTOW, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_variable_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_declaration) {
            listener.enterVariable_declaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_declaration) {
            listener.exitVariable_declaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable_declaration) {
            return visitor.visitVariable_declaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variable_declarationContext = Variable_declarationContext;
class Function_definitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPELL() { return this.getToken(spelParser.SPELL, 0); }
    SACRIFICE() { return this.getToken(spelParser.SACRIFICE, 0); }
    TERMINUS() { return this.getToken(spelParser.TERMINUS, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    list_typed_identifiers() {
        return this.getRuleContext(0, List_typed_identifiersContext);
    }
    list_of_statements() {
        return this.getRuleContext(0, List_of_statementsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_function_definition; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_definition) {
            listener.enterFunction_definition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_definition) {
            listener.exitFunction_definition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction_definition) {
            return visitor.visitFunction_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Function_definitionContext = Function_definitionContext;
class Class_definitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BGNC() { return this.getToken(spelParser.BGNC, 0); }
    ENC() { return this.getToken(spelParser.ENC, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    list_of_declarations() {
        return this.getRuleContext(0, List_of_declarationsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_class_definition; }
    // @Override
    enterRule(listener) {
        if (listener.enterClass_definition) {
            listener.enterClass_definition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClass_definition) {
            listener.exitClass_definition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClass_definition) {
            return visitor.visitClass_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Class_definitionContext = Class_definitionContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BECOMES() { return this.getToken(spelParser.BECOMES, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class CallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CAST() { return this.getToken(spelParser.CAST, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    SACRIFICE() { return this.tryGetToken(spelParser.SACRIFICE, 0); }
    DOT() { return this.tryGetToken(spelParser.DOT, 0); }
    list_expressions() {
        return this.tryGetRuleContext(0, List_expressionsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_call; }
    // @Override
    enterRule(listener) {
        if (listener.enterCall) {
            listener.enterCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCall) {
            listener.exitCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallContext = CallContext;
class List_typed_identifiersContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    list_typed_identifiers() {
        return this.tryGetRuleContext(0, List_typed_identifiersContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_typed_identifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_typed_identifiers) {
            listener.enterList_typed_identifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_typed_identifiers) {
            listener.exitList_typed_identifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_typed_identifiers) {
            return visitor.visitList_typed_identifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_typed_identifiersContext = List_typed_identifiersContext;
class ModificationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ENCHANT() { return this.getToken(spelParser.ENCHANT, 0); }
    WITH() { return this.getToken(spelParser.WITH, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DOT() { return this.tryGetToken(spelParser.DOT, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_modification; }
    // @Override
    enterRule(listener) {
        if (listener.enterModification) {
            listener.enterModification(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModification) {
            listener.exitModification(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModification) {
            return visitor.visitModification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModificationContext = ModificationContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basic_type_expression() {
        return this.tryGetRuleContext(0, Basic_type_expressionContext);
    }
    named_expression() {
        return this.tryGetRuleContext(0, Named_expressionContext);
    }
    minus_expression() {
        return this.tryGetRuleContext(0, Minus_expressionContext);
    }
    paren_expression() {
        return this.tryGetRuleContext(0, Paren_expressionContext);
    }
    field_expression() {
        return this.tryGetRuleContext(0, Field_expressionContext);
    }
    modification() {
        return this.tryGetRuleContext(0, ModificationContext);
    }
    call() {
        return this.tryGetRuleContext(0, CallContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class List_expressionsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    list_expressions() {
        return this.tryGetRuleContext(0, List_expressionsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_list_expressions; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_expressions) {
            listener.enterList_expressions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_expressions) {
            listener.exitList_expressions(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_expressions) {
            return visitor.visitList_expressions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_expressionsContext = List_expressionsContext;
class Basic_type_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMBER() { return this.tryGetToken(spelParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(spelParser.STRING, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_basic_type_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterBasic_type_expression) {
            listener.enterBasic_type_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBasic_type_expression) {
            listener.exitBasic_type_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasic_type_expression) {
            return visitor.visitBasic_type_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Basic_type_expressionContext = Basic_type_expressionContext;
class Minus_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_minus_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterMinus_expression) {
            listener.enterMinus_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMinus_expression) {
            listener.exitMinus_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMinus_expression) {
            return visitor.visitMinus_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Minus_expressionContext = Minus_expressionContext;
class Paren_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_paren_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterParen_expression) {
            listener.enterParen_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParen_expression) {
            listener.exitParen_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParen_expression) {
            return visitor.visitParen_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Paren_expressionContext = Paren_expressionContext;
class Field_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    OF() { return this.getToken(spelParser.OF, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_field_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterField_expression) {
            listener.enterField_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitField_expression) {
            listener.exitField_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitField_expression) {
            return visitor.visitField_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Field_expressionContext = Field_expressionContext;
class Named_expressionContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_named_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterNamed_expression) {
            listener.enterNamed_expression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNamed_expression) {
            listener.exitNamed_expression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNamed_expression) {
            return visitor.visitNamed_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Named_expressionContext = Named_expressionContext;
//# sourceMappingURL=spelParser.js.map