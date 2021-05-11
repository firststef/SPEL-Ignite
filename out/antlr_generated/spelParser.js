"use strict";
// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Named_expressionContext = exports.Field_expressionContext = exports.Paren_expressionContext = exports.Minus_expressionContext = exports.Basic_type_expressionContext = exports.List_expressionsContext = exports.ExpressionContext = exports.ModificationContext = exports.List_typed_identifiersContext = exports.Any_statementContext = exports.HolderContext = exports.Create_statementContext = exports.Charge_statementContext = exports.Throw_statementContext = exports.CallContext = exports.AssignmentContext = exports.Class_definitionContext = exports.Function_definitionContext = exports.Variable_declarationContext = exports.List_of_declarationsContext = exports.DeclarationContext = exports.List_of_statementsContext = exports.Print_statementContext = exports.While_statementContext = exports.None_statementContext = exports.Import_statementContext = exports.StatementContext = exports.Block_itemContext = exports.BlockContext = exports.Headless_documentContext = exports.DocumentContext = exports.spelParser = void 0;
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
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.BGND) {
                    {
                        this.state = 62;
                        this.match(spelParser.BGND);
                        this.state = 63;
                        _localctx._declr_block = this.block();
                    }
                }
                this.state = 66;
                this.match(spelParser.BGNP);
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spelParser.T__2) | (1 << spelParser.T__6) | (1 << spelParser.BGNC) | (1 << spelParser.IMP) | (1 << spelParser.CRAFT) | (1 << spelParser.ENCHANT) | (1 << spelParser.CAST))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (spelParser.DOT - 33)) | (1 << (spelParser.WHILE - 33)) | (1 << (spelParser.THROW - 33)) | (1 << (spelParser.CHARGE - 33)) | (1 << (spelParser.CREATE - 33)) | (1 << (spelParser.SAY - 33)) | (1 << (spelParser.CHANT - 33)) | (1 << (spelParser.NUMBER - 33)) | (1 << (spelParser.IDENTIFIER - 33)) | (1 << (spelParser.STRING - 33)))) !== 0)) {
                    {
                        this.state = 67;
                        _localctx._program = this.block();
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
                this.state = 70;
                this.block();
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
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, spelParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 72;
                            _localctx._items = this.block_item();
                        }
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spelParser.T__2) | (1 << spelParser.T__6) | (1 << spelParser.BGNC) | (1 << spelParser.IMP) | (1 << spelParser.CRAFT) | (1 << spelParser.ENCHANT) | (1 << spelParser.CAST))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (spelParser.DOT - 33)) | (1 << (spelParser.WHILE - 33)) | (1 << (spelParser.THROW - 33)) | (1 << (spelParser.CHARGE - 33)) | (1 << (spelParser.CREATE - 33)) | (1 << (spelParser.SAY - 33)) | (1 << (spelParser.CHANT - 33)) | (1 << (spelParser.NUMBER - 33)) | (1 << (spelParser.IDENTIFIER - 33)) | (1 << (spelParser.STRING - 33)))) !== 0));
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
    block_item() {
        let _localctx = new Block_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, spelParser.RULE_block_item);
        try {
            this.state = 79;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 77;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
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
            this.state = 91;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 81;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 82;
                        this.call();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 83;
                        this.import_statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 84;
                        this.while_statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 85;
                        this.print_statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 86;
                        this.throw_statement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 87;
                        this.charge_statement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 88;
                        this.create_statement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 89;
                        this.none_statement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 90;
                        this.any_statement();
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
                this.state = 93;
                this.match(spelParser.IMP);
                this.state = 94;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 95;
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
                this.state = 97;
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
    while_statement() {
        let _localctx = new While_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, spelParser.RULE_while_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 99;
                this.match(spelParser.WHILE);
                this.state = 100;
                _localctx._expr = this.expression(0);
                this.state = 101;
                this.match(spelParser.COLON);
                this.state = 102;
                _localctx._stmts = this.list_of_statements();
                this.state = 103;
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
    print_statement() {
        let _localctx = new Print_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, spelParser.RULE_print_statement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                _localctx._tone = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(_la === spelParser.SAY || _la === spelParser.CHANT)) {
                    _localctx._tone = this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 106;
                _localctx._msg = this.match(spelParser.STRING);
                this.state = 107;
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
        this.enterRule(_localctx, 18, spelParser.RULE_list_of_statements);
        try {
            this.state = 113;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 109;
                        this.statement();
                        this.state = 110;
                        _localctx._next = this.list_of_statements();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 112;
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
        this.enterRule(_localctx, 20, spelParser.RULE_declaration);
        try {
            this.state = 118;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.CRAFT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 115;
                        this.variable_declaration();
                    }
                    break;
                case spelParser.BGNC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 116;
                        this.class_definition();
                    }
                    break;
                case spelParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 117;
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
        this.enterRule(_localctx, 22, spelParser.RULE_list_of_declarations);
        try {
            this.state = 124;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 120;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 121;
                        this.declaration();
                        this.state = 122;
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
        this.enterRule(_localctx, 24, spelParser.RULE_variable_declaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.match(spelParser.CRAFT);
                this.state = 128;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.ARTIFACT) {
                    {
                        this.state = 127;
                        this.match(spelParser.ARTIFACT);
                    }
                }
                this.state = 130;
                _localctx._arg_type = this.match(spelParser.IDENTIFIER);
                this.state = 131;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === spelParser.BESTOW) {
                    {
                        this.state = 132;
                        this.match(spelParser.BESTOW);
                        this.state = 133;
                        _localctx._value = this.expression(0);
                    }
                }
                this.state = 136;
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
        this.enterRule(_localctx, 26, spelParser.RULE_function_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                _localctx._func_type = this.match(spelParser.IDENTIFIER);
                this.state = 139;
                this.match(spelParser.SPELL);
                this.state = 140;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 141;
                this.match(spelParser.SACRIFICE);
                this.state = 142;
                _localctx._params = this.list_typed_identifiers();
                this.state = 143;
                this.match(spelParser.COLON);
                this.state = 144;
                _localctx._statements = this.list_of_statements();
                this.state = 145;
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
        this.enterRule(_localctx, 28, spelParser.RULE_class_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(spelParser.BGNC);
                this.state = 148;
                _localctx._name = this.match(spelParser.IDENTIFIER);
                this.state = 149;
                _localctx._declarations = this.list_of_declarations();
                this.state = 150;
                this.match(spelParser.ENC);
                this.state = 151;
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
        this.enterRule(_localctx, 30, spelParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                _localctx._expr = this.expression(0);
                this.state = 154;
                this.match(spelParser.BECOMES);
                this.state = 155;
                _localctx._value = this.expression(0);
                this.state = 156;
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
        this.enterRule(_localctx, 32, spelParser.RULE_call);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(spelParser.CAST);
                this.state = 159;
                _localctx._expr = this.expression(0);
                this.state = 162;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 160;
                            this.match(spelParser.SACRIFICE);
                            this.state = 161;
                            _localctx._params = this.list_expressions();
                        }
                        break;
                }
                this.state = 165;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 164;
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
    throw_statement() {
        let _localctx = new Throw_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, spelParser.RULE_throw_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(spelParser.THROW);
                this.state = 168;
                _localctx._object = this.match(spelParser.IDENTIFIER);
                this.state = 169;
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
    charge_statement() {
        let _localctx = new Charge_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, spelParser.RULE_charge_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(spelParser.CHARGE);
                this.state = 172;
                _localctx._el = this.match(spelParser.IDENTIFIER);
                this.state = 173;
                this.match(spelParser.MANA);
                this.state = 174;
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
    create_statement() {
        let _localctx = new Create_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, spelParser.RULE_create_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(spelParser.CREATE);
                this.state = 177;
                _localctx._object = this.match(spelParser.IDENTIFIER);
                this.state = 178;
                this.match(spelParser.IN);
                this.state = 179;
                _localctx._where = this.holder();
                this.state = 180;
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
    holder() {
        let _localctx = new HolderContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, spelParser.RULE_holder);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 182;
                            this.match(spelParser.IDENTIFIER);
                        }
                    }
                    this.state = 185;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === spelParser.IDENTIFIER);
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
    any_statement() {
        let _localctx = new Any_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, spelParser.RULE_any_statement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 187;
                            _localctx._words = this.match(spelParser.IDENTIFIER);
                        }
                    }
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === spelParser.IDENTIFIER);
                this.state = 192;
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
    list_typed_identifiers() {
        let _localctx = new List_typed_identifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, spelParser.RULE_list_typed_identifiers);
        try {
            this.state = 200;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 194;
                        _localctx._type = this.match(spelParser.IDENTIFIER);
                        this.state = 195;
                        _localctx._name = this.match(spelParser.IDENTIFIER);
                        this.state = 196;
                        this.match(spelParser.T__0);
                        this.state = 197;
                        _localctx._next = this.list_typed_identifiers();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 198;
                        _localctx._type = this.match(spelParser.IDENTIFIER);
                        this.state = 199;
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
        this.enterRule(_localctx, 46, spelParser.RULE_modification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(spelParser.ENCHANT);
                this.state = 203;
                _localctx._expr = this.expression(0);
                this.state = 204;
                this.match(spelParser.WITH);
                this.state = 205;
                _localctx._value = this.expression(0);
                this.state = 207;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 206;
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
        let _startState = 48;
        this.enterRecursionRule(_localctx, 48, spelParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 210;
                            _localctx._basic_type_t = this.basic_type_expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 211;
                            _localctx._named_expression_t = this.named_expression();
                        }
                        break;
                    case 3:
                        {
                            this.state = 212;
                            _localctx._minus_expression_t = this.minus_expression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 213;
                            _localctx._paren_expression_t = this.paren_expression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 214;
                            _localctx._field_expression_t = this.field_expression();
                        }
                        break;
                    case 6:
                        {
                            this.state = 215;
                            _localctx._modifaction_expression_t = this.modification();
                        }
                        break;
                    case 7:
                        {
                            this.state = 216;
                            _localctx._call_expression_t = this.call();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 236;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 234;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 219;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 220;
                                        _localctx._sign = this.match(spelParser.T__1);
                                        this.state = 221;
                                        _localctx._rexpr = this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 222;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 223;
                                        _localctx._sign = this.match(spelParser.T__2);
                                        this.state = 224;
                                        _localctx._rexpr = this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 225;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 226;
                                        _localctx._sign = this.match(spelParser.T__3);
                                        this.state = 227;
                                        _localctx._rexpr = this.expression(4);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 228;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 229;
                                        _localctx._sign = this.match(spelParser.T__4);
                                        this.state = 230;
                                        _localctx._rexpr = this.expression(3);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        _localctx._lexpr = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
                                        this.state = 231;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 232;
                                        _localctx._sign = this.match(spelParser.T__5);
                                        this.state = 233;
                                        _localctx._rexpr = this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 238;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
        this.enterRule(_localctx, 50, spelParser.RULE_list_expressions);
        try {
            this.state = 244;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 239;
                        this.expression(0);
                        this.state = 240;
                        this.match(spelParser.T__0);
                        this.state = 241;
                        _localctx._next = this.list_expressions();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 243;
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
        this.enterRule(_localctx, 52, spelParser.RULE_basic_type_expression);
        try {
            this.state = 248;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case spelParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 246;
                        _localctx._number_type = this.match(spelParser.NUMBER);
                    }
                    break;
                case spelParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 247;
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
        this.enterRule(_localctx, 54, spelParser.RULE_minus_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this.match(spelParser.T__2);
                this.state = 251;
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
        this.enterRule(_localctx, 56, spelParser.RULE_paren_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                this.match(spelParser.T__6);
                this.state = 254;
                this.expression(0);
                this.state = 255;
                this.match(spelParser.T__7);
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
        this.enterRule(_localctx, 58, spelParser.RULE_field_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(spelParser.IDENTIFIER);
                this.state = 258;
                this.match(spelParser.OF);
                this.state = 259;
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
        this.enterRule(_localctx, 60, spelParser.RULE_named_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
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
            case 24:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
            case 3:
                return this.precpred(this._ctx, 2);
            case 4:
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
spelParser.BGND = 11;
spelParser.BGNP = 12;
spelParser.BGNC = 13;
spelParser.ENC = 14;
spelParser.IMP = 15;
spelParser.CRAFT = 16;
spelParser.ARTIFACT = 17;
spelParser.BESTOW = 18;
spelParser.SPELL = 19;
spelParser.SACRIFICE = 20;
spelParser.TERMINUS = 21;
spelParser.POINTS = 22;
spelParser.PRECISE = 23;
spelParser.RUNE = 24;
spelParser.ABSOLUTE = 25;
spelParser.TOME = 26;
spelParser.ENCHANT = 27;
spelParser.WITH = 28;
spelParser.OF = 29;
spelParser.CAST = 30;
spelParser.TRANSMUTE = 31;
spelParser.BECOMES = 32;
spelParser.DOT = 33;
spelParser.WHILE = 34;
spelParser.COLON = 35;
spelParser.THROW = 36;
spelParser.CHARGE = 37;
spelParser.MANA = 38;
spelParser.CREATE = 39;
spelParser.IN = 40;
spelParser.SAY = 41;
spelParser.CHANT = 42;
spelParser.NUMBER = 43;
spelParser.IDENTIFIER = 44;
spelParser.STRING = 45;
spelParser.RULE_document = 0;
spelParser.RULE_headless_document = 1;
spelParser.RULE_block = 2;
spelParser.RULE_block_item = 3;
spelParser.RULE_statement = 4;
spelParser.RULE_import_statement = 5;
spelParser.RULE_none_statement = 6;
spelParser.RULE_while_statement = 7;
spelParser.RULE_print_statement = 8;
spelParser.RULE_list_of_statements = 9;
spelParser.RULE_declaration = 10;
spelParser.RULE_list_of_declarations = 11;
spelParser.RULE_variable_declaration = 12;
spelParser.RULE_function_definition = 13;
spelParser.RULE_class_definition = 14;
spelParser.RULE_assignment = 15;
spelParser.RULE_call = 16;
spelParser.RULE_throw_statement = 17;
spelParser.RULE_charge_statement = 18;
spelParser.RULE_create_statement = 19;
spelParser.RULE_holder = 20;
spelParser.RULE_any_statement = 21;
spelParser.RULE_list_typed_identifiers = 22;
spelParser.RULE_modification = 23;
spelParser.RULE_expression = 24;
spelParser.RULE_list_expressions = 25;
spelParser.RULE_basic_type_expression = 26;
spelParser.RULE_minus_expression = 27;
spelParser.RULE_paren_expression = 28;
spelParser.RULE_field_expression = 29;
spelParser.RULE_named_expression = 30;
// tslint:disable:no-trailing-whitespace
spelParser.ruleNames = [
    "document", "headless_document", "block", "block_item", "statement", "import_statement",
    "none_statement", "while_statement", "print_statement", "list_of_statements",
    "declaration", "list_of_declarations", "variable_declaration", "function_definition",
    "class_definition", "assignment", "call", "throw_statement", "charge_statement",
    "create_statement", "holder", "any_statement", "list_typed_identifiers",
    "modification", "expression", "list_expressions", "basic_type_expression",
    "minus_expression", "paren_expression", "field_expression", "named_expression",
];
spelParser._LITERAL_NAMES = [
    undefined, "','", "'+'", "'-'", "'/'", "'*'", "'^'", "'('", "')'", undefined,
    undefined, "'In the beginning...'", "'The tale begins.'", "'I summon thy name'",
    "'and thy brethren.'", "'Legend tells of'", "'craft'", "'artifact'", "'bestow'",
    "'spell'", "'sacrifice'", "'terminus'", "'points'", "'precise'", "'rune'",
    "'absolute'", "'tome'", "'enchant'", "'with'", "'of'", "'cast'", "'transmute'",
    "'becomes'", "'.'", "'as long as'", "':'", "'throw'", "'charge'", "'mana'",
    "'create'", "'in'", "'say'", "'chant'",
];
spelParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "COMMENT", "WHITESPACE", "BGND", "BGNP", "BGNC",
    "ENC", "IMP", "CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE", "TERMINUS",
    "POINTS", "PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT", "WITH", "OF",
    "CAST", "TRANSMUTE", "BECOMES", "DOT", "WHILE", "COLON", "THROW", "CHARGE",
    "MANA", "CREATE", "IN", "SAY", "CHANT", "NUMBER", "IDENTIFIER", "STRING",
];
spelParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(spelParser._LITERAL_NAMES, spelParser._SYMBOLIC_NAMES, []);
spelParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u010A\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x05\x02" +
    "C\n\x02\x03\x02\x03\x02\x05\x02G\n\x02\x03\x03\x03\x03\x03\x04\x06\x04" +
    "L\n\x04\r\x04\x0E\x04M\x03\x05\x03\x05\x05\x05R\n\x05\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
    "^\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
    "\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05" +
    "\vt\n\v\x03\f\x03\f\x03\f\x05\fy\n\f\x03\r\x03\r\x03\r\x03\r\x05\r\x7F" +
    "\n\r\x03\x0E\x03\x0E\x05\x0E\x83\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x05\x0E\x89\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x05\x12\xA5\n\x12\x03\x12\x05\x12\xA8\n\x12\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x06\x16\xBA\n\x16\r\x16\x0E\x16" +
    "\xBB\x03\x17\x06\x17\xBF\n\x17\r\x17\x0E\x17\xC0\x03\x17\x03\x17\x03\x18" +
    "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xCB\n\x18\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x05\x19\xD2\n\x19\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xDC\n\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xED\n\x1A\f\x1A\x0E\x1A\xF0" +
    "\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xF7\n\x1B\x03\x1C" +
    "\x03\x1C\x05\x1C\xFB\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x02\x02\x03" +
    "2!\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02\x03\x03\x02" +
    "+,\x02\u0110\x02B\x03\x02\x02\x02\x04H\x03\x02\x02\x02\x06K\x03\x02\x02" +
    "\x02\bQ\x03\x02\x02\x02\n]\x03\x02\x02\x02\f_\x03\x02\x02\x02\x0Ec\x03" +
    "\x02\x02\x02\x10e\x03\x02\x02\x02\x12k\x03\x02\x02\x02\x14s\x03\x02\x02" +
    "\x02\x16x\x03\x02\x02\x02\x18~\x03\x02\x02\x02\x1A\x80\x03\x02\x02\x02" +
    "\x1C\x8C\x03\x02\x02\x02\x1E\x95\x03\x02\x02\x02 \x9B\x03\x02\x02\x02" +
    "\"\xA0\x03\x02\x02\x02$\xA9\x03\x02\x02\x02&\xAD\x03\x02\x02\x02(\xB2" +
    "\x03\x02\x02\x02*\xB9\x03\x02\x02\x02,\xBE\x03\x02\x02\x02.\xCA\x03\x02" +
    "\x02\x020\xCC\x03\x02\x02\x022\xDB\x03\x02\x02\x024\xF6\x03\x02\x02\x02" +
    "6\xFA\x03\x02\x02\x028\xFC\x03\x02\x02\x02:\xFF\x03\x02\x02\x02<\u0103" +
    "\x03\x02\x02\x02>\u0107\x03\x02\x02\x02@A\x07\r\x02\x02AC\x05\x06\x04" +
    "\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x07\x0E\x02" +
    "\x02EG\x05\x06\x04\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02G\x03\x03\x02" +
    "\x02\x02HI\x05\x06\x04\x02I\x05\x03\x02\x02\x02JL\x05\b\x05\x02KJ\x03" +
    "\x02\x02\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02N\x07" +
    "\x03\x02\x02\x02OR\x05\n\x06\x02PR\x05\x16\f\x02QO\x03\x02\x02\x02QP\x03" +
    "\x02\x02\x02R\t\x03\x02\x02\x02S^\x05 \x11\x02T^\x05\"\x12\x02U^\x05\f" +
    "\x07\x02V^\x05\x10\t\x02W^\x05\x12\n\x02X^\x05$\x13\x02Y^\x05&\x14\x02" +
    "Z^\x05(\x15\x02[^\x05\x0E\b\x02\\^\x05,\x17\x02]S\x03\x02\x02\x02]T\x03" +
    "\x02\x02\x02]U\x03\x02\x02\x02]V\x03\x02\x02\x02]W\x03\x02\x02\x02]X\x03" +
    "\x02\x02\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02][\x03\x02\x02\x02]\\" +
    "\x03\x02\x02\x02^\v\x03\x02\x02\x02_`\x07\x11\x02\x02`a\x07.\x02\x02a" +
    "b\x07#\x02\x02b\r\x03\x02\x02\x02cd\x07#\x02\x02d\x0F\x03\x02\x02\x02" +
    "ef\x07$\x02\x02fg\x052\x1A\x02gh\x07%\x02\x02hi\x05\x14\v\x02ij\x07\x17" +
    "\x02\x02j\x11\x03\x02\x02\x02kl\t\x02\x02\x02lm\x07/\x02\x02mn\x07#\x02" +
    "\x02n\x13\x03\x02\x02\x02op\x05\n\x06\x02pq\x05\x14\v\x02qt\x03\x02\x02" +
    "\x02rt\x05\n\x06\x02so\x03\x02\x02\x02sr\x03\x02\x02\x02t\x15\x03\x02" +
    "\x02\x02uy\x05\x1A\x0E\x02vy\x05\x1E\x10\x02wy\x05\x1C\x0F\x02xu\x03\x02" +
    "\x02\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x17\x03\x02\x02\x02z\x7F" +
    "\x05\x16\f\x02{|\x05\x16\f\x02|}\x05\x18\r\x02}\x7F\x03\x02\x02\x02~z" +
    "\x03\x02\x02\x02~{\x03\x02\x02\x02\x7F\x19\x03\x02\x02\x02\x80\x82\x07" +
    "\x12\x02\x02\x81\x83\x07\x13\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03" +
    "\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x07.\x02\x02\x85\x88\x07" +
    ".\x02\x02\x86\x87\x07\x14\x02\x02\x87\x89\x052\x1A\x02\x88\x86\x03\x02" +
    "\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x07#" +
    "\x02\x02\x8B\x1B\x03\x02\x02\x02\x8C\x8D\x07.\x02\x02\x8D\x8E\x07\x15" +
    "\x02\x02\x8E\x8F\x07.\x02\x02\x8F\x90\x07\x16\x02\x02\x90\x91\x05.\x18" +
    "\x02\x91\x92\x07%\x02\x02\x92\x93\x05\x14\v\x02\x93\x94\x07\x17\x02\x02" +
    "\x94\x1D\x03\x02\x02\x02\x95\x96\x07\x0F\x02\x02\x96\x97\x07.\x02\x02" +
    "\x97\x98\x05\x18\r\x02\x98\x99\x07\x10\x02\x02\x99\x9A\x07#\x02\x02\x9A" +
    "\x1F\x03\x02\x02\x02\x9B\x9C\x052\x1A\x02\x9C\x9D\x07\"\x02\x02\x9D\x9E" +
    "\x052\x1A\x02\x9E\x9F\x07#\x02\x02\x9F!\x03\x02\x02\x02\xA0\xA1\x07 \x02" +
    "\x02\xA1\xA4\x052\x1A\x02\xA2\xA3\x07\x16\x02\x02\xA3\xA5\x054\x1B\x02" +
    "\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02" +
    "\xA6\xA8\x07#\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
    "\xA8#\x03\x02\x02\x02\xA9\xAA\x07&\x02\x02\xAA\xAB\x07.\x02\x02\xAB\xAC" +
    "\x07#\x02\x02\xAC%\x03\x02\x02\x02\xAD\xAE\x07\'\x02\x02\xAE\xAF\x07." +
    "\x02\x02\xAF\xB0\x07(\x02\x02\xB0\xB1\x07#\x02\x02\xB1\'\x03\x02\x02\x02" +
    "\xB2\xB3\x07)\x02\x02\xB3\xB4\x07.\x02\x02\xB4\xB5\x07*\x02\x02\xB5\xB6" +
    "\x05*\x16\x02\xB6\xB7\x07#\x02\x02\xB7)\x03\x02\x02\x02\xB8\xBA\x07.\x02" +
    "\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xB9\x03\x02\x02" +
    "\x02\xBB\xBC\x03\x02\x02\x02\xBC+\x03\x02\x02\x02\xBD\xBF\x07.\x02\x02" +
    "\xBE\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
    "\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x07#\x02\x02" +
    "\xC3-\x03\x02\x02\x02\xC4\xC5\x07.\x02\x02\xC5\xC6\x07.\x02\x02\xC6\xC7" +
    "\x07\x03\x02\x02\xC7\xCB\x05.\x18\x02\xC8\xC9\x07.\x02\x02\xC9\xCB\x07" +
    ".\x02\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB/\x03\x02" +
    "\x02\x02\xCC\xCD\x07\x1D\x02\x02\xCD\xCE\x052\x1A\x02\xCE\xCF\x07\x1E" +
    "\x02\x02\xCF\xD1\x052\x1A\x02\xD0\xD2\x07#\x02\x02\xD1\xD0\x03\x02\x02" +
    "\x02\xD1\xD2\x03\x02\x02\x02\xD21\x03\x02\x02\x02\xD3\xD4\b\x1A\x01\x02" +
    "\xD4\xDC\x056\x1C\x02\xD5\xDC\x05> \x02\xD6\xDC\x058\x1D\x02\xD7\xDC\x05" +
    ":\x1E\x02\xD8\xDC\x05<\x1F\x02\xD9\xDC\x050\x19\x02\xDA\xDC\x05\"\x12" +
    "\x02\xDB\xD3\x03\x02\x02\x02\xDB\xD5\x03\x02\x02\x02\xDB\xD6\x03\x02\x02" +
    "\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02\xDB\xD9\x03\x02\x02" +
    "\x02\xDB\xDA\x03\x02\x02\x02\xDC\xEE\x03\x02\x02\x02\xDD\xDE\f\x07\x02" +
    "\x02\xDE\xDF\x07\x04\x02\x02\xDF\xED\x052\x1A\b\xE0\xE1\f\x06\x02\x02" +
    "\xE1\xE2\x07\x05\x02\x02\xE2\xED\x052\x1A\x07\xE3\xE4\f\x05\x02\x02\xE4" +
    "\xE5\x07\x06\x02\x02\xE5\xED\x052\x1A\x06\xE6\xE7\f\x04\x02\x02\xE7\xE8" +
    "\x07\x07\x02\x02\xE8\xED\x052\x1A\x05\xE9\xEA\f\x03\x02\x02\xEA\xEB\x07" +
    "\b\x02\x02\xEB\xED\x052\x1A\x04\xEC\xDD\x03\x02\x02\x02\xEC\xE0\x03\x02" +
    "\x02\x02\xEC\xE3\x03\x02\x02\x02\xEC\xE6\x03\x02\x02\x02\xEC\xE9\x03\x02" +
    "\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02" +
    "\x02\x02\xEF3\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x052\x1A" +
    "\x02\xF2\xF3\x07\x03\x02\x02\xF3\xF4\x054\x1B\x02\xF4\xF7\x03\x02\x02" +
    "\x02\xF5\xF7\x052\x1A\x02\xF6\xF1\x03\x02\x02\x02\xF6\xF5\x03\x02\x02" +
    "\x02\xF75\x03\x02\x02\x02\xF8\xFB\x07-\x02\x02\xF9\xFB\x07/\x02\x02\xFA" +
    "\xF8\x03\x02\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB7\x03\x02\x02\x02\xFC" +
    "\xFD\x07\x05\x02\x02\xFD\xFE\x052\x1A\x02\xFE9\x03\x02\x02\x02\xFF\u0100" +
    "\x07\t\x02\x02\u0100\u0101\x052\x1A\x02\u0101\u0102\x07\n\x02\x02\u0102" +
    ";\x03\x02\x02\x02\u0103\u0104\x07.\x02\x02\u0104\u0105\x07\x1F\x02\x02" +
    "\u0105\u0106\x052\x1A\x02\u0106=\x03\x02\x02\x02\u0107\u0108\x07.\x02" +
    "\x02\u0108?\x03\x02\x02\x02\x17BFMQ]sx~\x82\x88\xA4\xA7\xBB\xC0\xCA\xD1" +
    "\xDB\xEC\xEE\xF6\xFA";
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
    block_item(i) {
        if (i === undefined) {
            return this.getRuleContexts(Block_itemContext);
        }
        else {
            return this.getRuleContext(i, Block_itemContext);
        }
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
    while_statement() {
        return this.tryGetRuleContext(0, While_statementContext);
    }
    print_statement() {
        return this.tryGetRuleContext(0, Print_statementContext);
    }
    throw_statement() {
        return this.tryGetRuleContext(0, Throw_statementContext);
    }
    charge_statement() {
        return this.tryGetRuleContext(0, Charge_statementContext);
    }
    create_statement() {
        return this.tryGetRuleContext(0, Create_statementContext);
    }
    none_statement() {
        return this.tryGetRuleContext(0, None_statementContext);
    }
    any_statement() {
        return this.tryGetRuleContext(0, Any_statementContext);
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
class While_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHILE() { return this.getToken(spelParser.WHILE, 0); }
    COLON() { return this.getToken(spelParser.COLON, 0); }
    TERMINUS() { return this.getToken(spelParser.TERMINUS, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    list_of_statements() {
        return this.getRuleContext(0, List_of_statementsContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_while_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhile_statement) {
            listener.enterWhile_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhile_statement) {
            listener.exitWhile_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhile_statement) {
            return visitor.visitWhile_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.While_statementContext = While_statementContext;
class Print_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    STRING() { return this.getToken(spelParser.STRING, 0); }
    SAY() { return this.tryGetToken(spelParser.SAY, 0); }
    CHANT() { return this.tryGetToken(spelParser.CHANT, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_print_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrint_statement) {
            listener.enterPrint_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrint_statement) {
            listener.exitPrint_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrint_statement) {
            return visitor.visitPrint_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Print_statementContext = Print_statementContext;
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
    COLON() { return this.getToken(spelParser.COLON, 0); }
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
class Throw_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    THROW() { return this.getToken(spelParser.THROW, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_throw_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterThrow_statement) {
            listener.enterThrow_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThrow_statement) {
            listener.exitThrow_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThrow_statement) {
            return visitor.visitThrow_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Throw_statementContext = Throw_statementContext;
class Charge_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CHARGE() { return this.getToken(spelParser.CHARGE, 0); }
    MANA() { return this.getToken(spelParser.MANA, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    // @Override
    get ruleIndex() { return spelParser.RULE_charge_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCharge_statement) {
            listener.enterCharge_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCharge_statement) {
            listener.exitCharge_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCharge_statement) {
            return visitor.visitCharge_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Charge_statementContext = Charge_statementContext;
class Create_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE() { return this.getToken(spelParser.CREATE, 0); }
    IN() { return this.getToken(spelParser.IN, 0); }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER() { return this.getToken(spelParser.IDENTIFIER, 0); }
    holder() {
        return this.getRuleContext(0, HolderContext);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_create_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreate_statement) {
            listener.enterCreate_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreate_statement) {
            listener.exitCreate_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreate_statement) {
            return visitor.visitCreate_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Create_statementContext = Create_statementContext;
class HolderContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_holder; }
    // @Override
    enterRule(listener) {
        if (listener.enterHolder) {
            listener.enterHolder(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHolder) {
            listener.exitHolder(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHolder) {
            return visitor.visitHolder(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HolderContext = HolderContext;
class Any_statementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() { return this.getToken(spelParser.DOT, 0); }
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(spelParser.IDENTIFIER);
        }
        else {
            return this.getToken(spelParser.IDENTIFIER, i);
        }
    }
    // @Override
    get ruleIndex() { return spelParser.RULE_any_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterAny_statement) {
            listener.enterAny_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAny_statement) {
            listener.exitAny_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAny_statement) {
            return visitor.visitAny_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Any_statementContext = Any_statementContext;
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