"use strict";
// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minus_expressionContext = exports.List_expressionsContext = exports.ExpressionContext = exports.List_typed_identifiersContext = exports.TypeContext = exports.CallContext = exports.AssignmentContext = exports.Class_definitionContext = exports.Function_definitionContext = exports.Variable_declarationContext = exports.List_of_declarationsContext = exports.DeclarationContext = exports.List_of_statementsContext = exports.StatementContext = exports.Block_itemContext = exports.BlockContext = exports.Headless_documentContext = exports.DocumentContext = exports.spelParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
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
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 36;
                        this.match(spelParser.BGNP);
                        this.state = 37;
                        this.block(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 38;
                        this.match(spelParser.BGNP);
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
    headless_document() {
        let _localctx = new Headless_documentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, spelParser.RULE_headless_document);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
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
                    this.state = 44;
                    this.block_item();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 50;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BlockContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_block);
                                this.state = 46;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 47;
                                _localctx._next = this.block_item();
                            }
                        }
                    }
                    this.state = 52;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
            this.state = 55;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.ENCHANT:
                case spelParser.IMP:
                case spelParser.CAST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 53;
                        this.statement();
                    }
                    break;
                case spelParser.BGNC:
                case spelParser.CRAFT:
                case spelParser.POINTS:
                case spelParser.PRECISE:
                case spelParser.RUNE:
                case spelParser.ABSOLUTE:
                case spelParser.TOME:
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 54;
                        this.declaration();
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
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, spelParser.RULE_statement);
        try {
            this.state = 62;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 57;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 58;
                        this.call();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 59;
                        this.match(spelParser.IMP);
                        this.state = 60;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 61;
                        this.match(spelParser.T__0);
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
    list_of_statements() {
        let _localctx = new List_of_statementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, spelParser.RULE_list_of_statements);
        try {
            this.state = 68;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 64;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 65;
                        this.statement();
                        this.state = 66;
                        _localctx._next = this.list_of_statements();
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
        this.enterRule(_localctx, 12, spelParser.RULE_declaration);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.CRAFT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 70;
                        this.variable_declaration();
                    }
                    break;
                case spelParser.BGNC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 71;
                        this.class_definition();
                    }
                    break;
                case spelParser.POINTS:
                case spelParser.PRECISE:
                case spelParser.RUNE:
                case spelParser.ABSOLUTE:
                case spelParser.TOME:
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 72;
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
        this.enterRule(_localctx, 14, spelParser.RULE_list_of_declarations);
        try {
            this.state = 79;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 75;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 76;
                        this.declaration();
                        this.state = 77;
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
        this.enterRule(_localctx, 16, spelParser.RULE_variable_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 81;
                this.match(spelParser.CRAFT);
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.ARTIFACT) {
                    {
                        this.state = 82;
                        this.match(spelParser.ARTIFACT);
                    }
                }
                this.state = 85;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 86;
                this.match(spelParser.BESTOW);
                this.state = 87;
                _localctx._value = this.expression(0);
                this.state = 88;
                this.match(spelParser.T__0);
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
        this.enterRule(_localctx, 18, spelParser.RULE_function_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                _localctx._func_type = this.type();
                this.state = 91;
                this.match(spelParser.SPELL);
                this.state = 92;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 93;
                this.match(spelParser.SACRIFICE);
                this.state = 94;
                _localctx._params = this.list_typed_identifiers();
                this.state = 95;
                this.match(spelParser.T__1);
                this.state = 96;
                _localctx._statements = this.list_of_statements();
                this.state = 97;
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
        this.enterRule(_localctx, 20, spelParser.RULE_class_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(spelParser.BGNC);
                this.state = 100;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 101;
                _localctx._statements = this.list_of_declarations();
                this.state = 102;
                this.match(spelParser.ENC);
                this.state = 103;
                this.match(spelParser.T__0);
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
        this.enterRule(_localctx, 22, spelParser.RULE_assignment);
        try {
            this.state = 119;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 105;
                        this.match(spelParser.ENCHANT);
                        this.state = 106;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 107;
                        this.match(spelParser.WITH);
                        this.state = 108;
                        _localctx._value = this.expression(0);
                        this.state = 109;
                        this.match(spelParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 111;
                        this.match(spelParser.ENCHANT);
                        this.state = 112;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 113;
                        this.match(spelParser.OF);
                        this.state = 114;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 115;
                        this.match(spelParser.WITH);
                        this.state = 116;
                        _localctx._value = this.expression(0);
                        this.state = 117;
                        this.match(spelParser.T__0);
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
    call() {
        let _localctx = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, spelParser.RULE_call);
        try {
            this.state = 135;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.CAST:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 121;
                        this.match(spelParser.CAST);
                        this.state = 122;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 123;
                        this.match(spelParser.SACRIFICE);
                        this.state = 124;
                        _localctx._params = this.list_expressions();
                        this.state = 125;
                        this.match(spelParser.T__0);
                    }
                    break;
                case spelParser.ENCHANT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 127;
                        this.match(spelParser.ENCHANT);
                        this.state = 128;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 129;
                        this.match(spelParser.OF);
                        this.state = 130;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 131;
                        this.match(spelParser.SACRIFICE);
                        this.state = 132;
                        _localctx._params = this.list_expressions();
                        this.state = 133;
                        this.match(spelParser.T__0);
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
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, spelParser.RULE_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                _la = this._input.LA(1);
                if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (spelParser.POINTS - 20)) | (1 << (spelParser.PRECISE - 20)) | (1 << (spelParser.RUNE - 20)) | (1 << (spelParser.ABSOLUTE - 20)) | (1 << (spelParser.TOME - 20)) | (1 << (spelParser.IDENTIFIER - 20)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
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
        this.enterRule(_localctx, 28, spelParser.RULE_list_typed_identifiers);
        try {
            this.state = 147;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 139;
                        this.type();
                        this.state = 140;
                        this.match(spelParser.IDENTIFIER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 142;
                        this.type();
                        this.state = 143;
                        this.match(spelParser.IDENTIFIER);
                        this.state = 144;
                        this.match(spelParser.T__2);
                        this.state = 145;
                        _localctx._next = this.list_typed_identifiers();
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
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 30;
        this.enterRecursionRule(_localctx, 30, spelParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case spelParser.NUMBER:
                        {
                            this.state = 150;
                            _localctx._number_type = this.match(spelParser.NUMBER);
                        }
                        break;
                    case spelParser.STRING:
                        {
                            this.state = 151;
                            _localctx._string_type = this.match(spelParser.STRING);
                        }
                        break;
                    case spelParser.T__4:
                        {
                            this.state = 152;
                            _localctx._minus_expression_type = this.minus_expression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 172;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 170;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 155;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 156;
                                        _localctx._plus = this.match(spelParser.T__3);
                                        this.state = 157;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 158;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 159;
                                        _localctx._plus = this.match(spelParser.T__4);
                                        this.state = 160;
                                        this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 161;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 162;
                                        _localctx._plus = this.match(spelParser.T__5);
                                        this.state = 163;
                                        this.expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 164;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 165;
                                        _localctx._plus = this.match(spelParser.T__6);
                                        this.state = 166;
                                        this.expression(3);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 167;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 168;
                                        _localctx._plus = this.match(spelParser.T__7);
                                        this.state = 169;
                                        this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 174;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
        this.enterRule(_localctx, 32, spelParser.RULE_list_expressions);
        try {
            this.state = 180;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 175;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 176;
                        this.expression(0);
                        this.state = 177;
                        this.match(spelParser.T__2);
                        this.state = 178;
                        _localctx._next = this.list_expressions();
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
    minus_expression() {
        let _localctx = new Minus_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, spelParser.RULE_minus_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.match(spelParser.T__4);
                this.state = 183;
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
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.block_sempred(_localctx, predIndex);
            case 15:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    block_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
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
spelParser.COMMENT = 9;
spelParser.WHITESPACE = 10;
spelParser.BGNP = 11;
spelParser.BGNC = 12;
spelParser.ENC = 13;
spelParser.CRAFT = 14;
spelParser.ARTIFACT = 15;
spelParser.BESTOW = 16;
spelParser.SPELL = 17;
spelParser.SACRIFICE = 18;
spelParser.TERMINUS = 19;
spelParser.POINTS = 20;
spelParser.PRECISE = 21;
spelParser.RUNE = 22;
spelParser.ABSOLUTE = 23;
spelParser.TOME = 24;
spelParser.ENCHANT = 25;
spelParser.WITH = 26;
spelParser.OF = 27;
spelParser.IMP = 28;
spelParser.CAST = 29;
spelParser.CHARACTER = 30;
spelParser.NUMBER = 31;
spelParser.IDENTIFIER = 32;
spelParser.STRING = 33;
spelParser.RULE_document = 0;
spelParser.RULE_headless_document = 1;
spelParser.RULE_block = 2;
spelParser.RULE_block_item = 3;
spelParser.RULE_statement = 4;
spelParser.RULE_list_of_statements = 5;
spelParser.RULE_declaration = 6;
spelParser.RULE_list_of_declarations = 7;
spelParser.RULE_variable_declaration = 8;
spelParser.RULE_function_definition = 9;
spelParser.RULE_class_definition = 10;
spelParser.RULE_assignment = 11;
spelParser.RULE_call = 12;
spelParser.RULE_type = 13;
spelParser.RULE_list_typed_identifiers = 14;
spelParser.RULE_expression = 15;
spelParser.RULE_list_expressions = 16;
spelParser.RULE_minus_expression = 17;
// tslint:disable:no-trailing-whitespace
spelParser.ruleNames = [
    "document", "headless_document", "block", "block_item", "statement", "list_of_statements",
    "declaration", "list_of_declarations", "variable_declaration", "function_definition",
    "class_definition", "assignment", "call", "type", "list_typed_identifiers",
    "expression", "list_expressions", "minus_expression",
];
spelParser._LITERAL_NAMES = [
    undefined, "'.'", "':'", "','", "'+'", "'-'", "'/'", "'*'", "'^'", undefined,
    undefined, "'The tale begins.'", "'I summon thy name'", "'and thy brethren'",
    "'craft'", "'artifact'", "'bestow'", "'spell'", "'sacrifice'", "'terminus'",
    "'points'", "'precise'", "'rune'", "'absolute'", "'tome'", "'enchant'",
    "'with'", "'of'", "'Legend tells of'", "'cast'",
];
spelParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "COMMENT", "WHITESPACE", "BGNP", "BGNC", "ENC",
    "CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE", "TERMINUS", "POINTS",
    "PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT", "WITH", "OF", "IMP",
    "CAST", "CHARACTER", "NUMBER", "IDENTIFIER", "STRING",
];
spelParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(spelParser._LITERAL_NAMES, spelParser._SYMBOLIC_NAMES, []);
spelParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xBC\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x03\x02\x03\x02\x03\x02\x05\x02*\n\x02\x03\x03\x03\x03\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x043\n\x04\f\x04\x0E\x046\v\x04" +
    "\x03\x05\x03\x05\x05\x05:\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x05\x06A\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07G\n\x07\x03\b\x03" +
    "\b\x03\b\x05\bL\n\b\x03\t\x03\t\x03\t\x03\t\x05\tR\n\t\x03\n\x03\n\x05" +
    "\nV\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
    "\rz\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x8A\n\x0E\x03" +
    "\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x05\x10\x96\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x9C\n\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xAD\n\x11\f\x11" +
    "\x0E\x11\xB0\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB7" +
    "\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x02\x02\x04\x06 \x14\x02\x02\x04" +
    "\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
    "\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x03\x04\x02\x16\x1A" +
    "\"\"\x02\xBE\x02)\x03\x02\x02\x02\x04+\x03\x02\x02\x02\x06-\x03\x02\x02" +
    "\x02\b9\x03\x02\x02\x02\n@\x03\x02\x02\x02\fF\x03\x02\x02\x02\x0EK\x03" +
    "\x02\x02\x02\x10Q\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14\\\x03\x02\x02" +
    "\x02\x16e\x03\x02\x02\x02\x18y\x03\x02\x02\x02\x1A\x89\x03\x02\x02\x02" +
    "\x1C\x8B\x03\x02\x02\x02\x1E\x95\x03\x02\x02\x02 \x9B\x03\x02\x02\x02" +
    "\"\xB6\x03\x02\x02\x02$\xB8\x03\x02\x02\x02&\'\x07\r\x02\x02\'*\x05\x06" +
    "\x04\x02(*\x07\r\x02\x02)&\x03\x02\x02\x02)(\x03\x02\x02\x02*\x03\x03" +
    "\x02\x02\x02+,\x05\x06\x04\x02,\x05\x03\x02\x02\x02-.\b\x04\x01\x02./" +
    "\x05\b\x05\x02/4\x03\x02\x02\x0201\f\x03\x02\x0213\x05\b\x05\x0220\x03" +
    "\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\x07" +
    "\x03\x02\x02\x0264\x03\x02\x02\x027:\x05\n\x06\x028:\x05\x0E\b\x0297\x03" +
    "\x02\x02\x0298\x03\x02\x02\x02:\t\x03\x02\x02\x02;A\x05\x18\r\x02<A\x05" +
    "\x1A\x0E\x02=>\x07\x1E\x02\x02>?\x07\"\x02\x02?A\x07\x03\x02\x02@;\x03" +
    "\x02\x02\x02@<\x03\x02\x02\x02@=\x03\x02\x02\x02A\v\x03\x02\x02\x02BG" +
    "\x05\n\x06\x02CD\x05\n\x06\x02DE\x05\f\x07\x02EG\x03\x02\x02\x02FB\x03" +
    "\x02\x02\x02FC\x03\x02\x02\x02G\r\x03\x02\x02\x02HL\x05\x12\n\x02IL\x05" +
    "\x16\f\x02JL\x05\x14\v\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02" +
    "\x02\x02L\x0F\x03\x02\x02\x02MR\x05\x0E\b\x02NO\x05\x0E\b\x02OP\x05\x10" +
    "\t\x02PR\x03\x02\x02\x02QM\x03\x02\x02\x02QN\x03\x02\x02\x02R\x11\x03" +
    "\x02\x02\x02SU\x07\x10\x02\x02TV\x07\x11\x02\x02UT\x03\x02\x02\x02UV\x03" +
    "\x02\x02\x02VW\x03\x02\x02\x02WX\x07\"\x02\x02XY\x07\x12\x02\x02YZ\x05" +
    " \x11\x02Z[\x07\x03\x02\x02[\x13\x03\x02\x02\x02\\]\x05\x1C\x0F\x02]^" +
    "\x07\x13\x02\x02^_\x07\"\x02\x02_`\x07\x14\x02\x02`a\x05\x1E\x10\x02a" +
    "b\x07\x04\x02\x02bc\x05\f\x07\x02cd\x07\x15\x02\x02d\x15\x03\x02\x02\x02" +
    "ef\x07\x0E\x02\x02fg\x07\"\x02\x02gh\x05\x10\t\x02hi\x07\x0F\x02\x02i" +
    "j\x07\x03\x02\x02j\x17\x03\x02\x02\x02kl\x07\x1B\x02\x02lm\x07\"\x02\x02" +
    "mn\x07\x1C\x02\x02no\x05 \x11\x02op\x07\x03\x02\x02pz\x03\x02\x02\x02" +
    "qr\x07\x1B\x02\x02rs\x07\"\x02\x02st\x07\x1D\x02\x02tu\x07\"\x02\x02u" +
    "v\x07\x1C\x02\x02vw\x05 \x11\x02wx\x07\x03\x02\x02xz\x03\x02\x02\x02y" +
    "k\x03\x02\x02\x02yq\x03\x02\x02\x02z\x19\x03\x02\x02\x02{|\x07\x1F\x02" +
    "\x02|}\x07\"\x02\x02}~\x07\x14\x02\x02~\x7F\x05\"\x12\x02\x7F\x80\x07" +
    "\x03\x02\x02\x80\x8A\x03\x02\x02\x02\x81\x82\x07\x1B\x02\x02\x82\x83\x07" +
    "\"\x02\x02\x83\x84\x07\x1D\x02\x02\x84\x85\x07\"\x02\x02\x85\x86\x07\x14" +
    "\x02\x02\x86\x87\x05\"\x12\x02\x87\x88\x07\x03\x02\x02\x88\x8A\x03\x02" +
    "\x02\x02\x89{\x03\x02\x02\x02\x89\x81\x03\x02\x02\x02\x8A\x1B\x03\x02" +
    "\x02\x02\x8B\x8C\t\x02\x02\x02\x8C\x1D\x03\x02\x02\x02\x8D\x8E\x05\x1C" +
    "\x0F\x02\x8E\x8F\x07\"\x02\x02\x8F\x96\x03\x02\x02\x02\x90\x91\x05\x1C" +
    "\x0F\x02\x91\x92\x07\"\x02\x02\x92\x93\x07\x05\x02\x02\x93\x94\x05\x1E" +
    "\x10\x02\x94\x96\x03\x02\x02\x02\x95\x8D\x03\x02\x02\x02\x95\x90\x03\x02" +
    "\x02\x02\x96\x1F\x03\x02\x02\x02\x97\x98\b\x11\x01\x02\x98\x9C\x07!\x02" +
    "\x02\x99\x9C\x07#\x02\x02\x9A\x9C\x05$\x13\x02\x9B\x97\x03\x02\x02\x02" +
    "\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\xAE\x03\x02\x02\x02" +
    "\x9D\x9E\f\x07\x02\x02\x9E\x9F\x07\x06\x02\x02\x9F\xAD\x05 \x11\b\xA0" +
    "\xA1\f\x06\x02\x02\xA1\xA2\x07\x07\x02\x02\xA2\xAD\x05 \x11\x07\xA3\xA4" +
    "\f\x05\x02\x02\xA4\xA5\x07\b\x02\x02\xA5\xAD\x05 \x11\x06\xA6\xA7\f\x04" +
    "\x02\x02\xA7\xA8\x07\t\x02\x02\xA8\xAD\x05 \x11\x05\xA9\xAA\f\x03\x02" +
    "\x02\xAA\xAB\x07\n\x02\x02\xAB\xAD\x05 \x11\x04\xAC\x9D\x03\x02\x02\x02" +
    "\xAC\xA0\x03\x02\x02\x02\xAC\xA3\x03\x02\x02\x02\xAC\xA6\x03\x02\x02\x02" +
    "\xAC\xA9\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02" +
    "\xAE\xAF\x03\x02\x02\x02\xAF!\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02" +
    "\xB1\xB7\x05 \x11\x02\xB2\xB3\x05 \x11\x02\xB3\xB4\x07\x05\x02\x02\xB4" +
    "\xB5\x05\"\x12\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB1\x03\x02\x02\x02\xB6" +
    "\xB2\x03\x02\x02\x02\xB7#\x03\x02\x02\x02\xB8\xB9\x07\x07\x02\x02\xB9" +
    "\xBA\x05 \x11\x02\xBA%\x03\x02\x02\x02\x11)49@FKQUy\x89\x95\x9B\xAC\xAE" +
    "\xB6";
class DocumentContext extends ParserRuleContext_1.ParserRuleContext {
    BGNP() { return this.getToken(spelParser.BGNP, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
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
    block_item() {
        return this.getRuleContext(0, Block_itemContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    call() {
        return this.tryGetRuleContext(0, CallContext);
    }
    IMP() { return this.tryGetToken(spelParser.IMP, 0); }
    IDENTIFIER() { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
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
    BESTOW() { return this.getToken(spelParser.BESTOW, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    ARTIFACT() { return this.tryGetToken(spelParser.ARTIFACT, 0); }
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
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
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
    ENCHANT() { return this.getToken(spelParser.ENCHANT, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    WITH() { return this.getToken(spelParser.WITH, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    OF() { return this.tryGetToken(spelParser.OF, 0); }
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
    CAST() { return this.tryGetToken(spelParser.CAST, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    SACRIFICE() { return this.getToken(spelParser.SACRIFICE, 0); }
    list_expressions() {
        return this.getRuleContext(0, List_expressionsContext);
    }
    ENCHANT() { return this.tryGetToken(spelParser.ENCHANT, 0); }
    OF() { return this.tryGetToken(spelParser.OF, 0); }
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
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    POINTS() { return this.tryGetToken(spelParser.POINTS, 0); }
    PRECISE() { return this.tryGetToken(spelParser.PRECISE, 0); }
    RUNE() { return this.tryGetToken(spelParser.RUNE, 0); }
    ABSOLUTE() { return this.tryGetToken(spelParser.ABSOLUTE, 0); }
    TOME() { return this.tryGetToken(spelParser.TOME, 0); }
    IDENTIFIER() { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class List_typed_identifiersContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
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
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMBER() { return this.tryGetToken(spelParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(spelParser.STRING, 0); }
    minus_expression() {
        return this.tryGetRuleContext(0, Minus_expressionContext);
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
//# sourceMappingURL=spelParser.js.map