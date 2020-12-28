// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { spelListener } from "./spelListener";
import { spelVisitor } from "./spelVisitor";


export class spelParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly COMMENT = 9;
	public static readonly WHITESPACE = 10;
	public static readonly BGNP = 11;
	public static readonly BGNC = 12;
	public static readonly ENC = 13;
	public static readonly CRAFT = 14;
	public static readonly ARTIFACT = 15;
	public static readonly BESTOW = 16;
	public static readonly SPELL = 17;
	public static readonly SACRIFICE = 18;
	public static readonly TERMINUS = 19;
	public static readonly POINTS = 20;
	public static readonly PRECISE = 21;
	public static readonly RUNE = 22;
	public static readonly ABSOLUTE = 23;
	public static readonly TOME = 24;
	public static readonly ENCHANT = 25;
	public static readonly WITH = 26;
	public static readonly OF = 27;
	public static readonly IMP = 28;
	public static readonly CAST = 29;
	public static readonly CHARACTER = 30;
	public static readonly NUMBER = 31;
	public static readonly IDENTIFIER = 32;
	public static readonly STRING = 33;
	public static readonly RULE_document = 0;
	public static readonly RULE_headless_document = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_block_item = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_list_of_statements = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_list_of_declarations = 7;
	public static readonly RULE_variable_declaration = 8;
	public static readonly RULE_function_definition = 9;
	public static readonly RULE_class_definition = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_call = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_list_typed_identifiers = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_list_expressions = 16;
	public static readonly RULE_minus_expression = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "headless_document", "block", "block_item", "statement", "list_of_statements", 
		"declaration", "list_of_declarations", "variable_declaration", "function_definition", 
		"class_definition", "assignment", "call", "type", "list_typed_identifiers", 
		"expression", "list_expressions", "minus_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "':'", "','", "'+'", "'-'", "'/'", "'*'", "'^'", undefined, 
		undefined, "'The tale begins.'", "'I summon thy name'", "'and thy brethren'", 
		"'craft'", "'artifact'", "'bestow'", "'spell'", "'sacrifice'", "'terminus'", 
		"'points'", "'precise'", "'rune'", "'absolute'", "'tome'", "'enchant'", 
		"'with'", "'of'", "'Legend tells of'", "'cast'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "COMMENT", "WHITESPACE", "BGNP", "BGNC", "ENC", 
		"CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE", "TERMINUS", "POINTS", 
		"PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT", "WITH", "OF", "IMP", 
		"CAST", "CHARACTER", "NUMBER", "IDENTIFIER", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(spelParser._LITERAL_NAMES, spelParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return spelParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "spel.g4"; }

	// @Override
	public get ruleNames(): string[] { return spelParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return spelParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(spelParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, spelParser.RULE_document);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(spelParser.BGNP);
			this.state = 37;
			this.block(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public headless_document(): Headless_documentContext {
		let _localctx: Headless_documentContext = new Headless_documentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, spelParser.RULE_headless_document);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.block(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public block(): BlockContext;
	public block(_p: number): BlockContext;
	// @RuleVersion(0)
	public block(_p?: number): BlockContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BlockContext = new BlockContext(this._ctx, _parentState);
		let _prevctx: BlockContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, spelParser.RULE_block, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 42;
			this.block_item();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BlockContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_block);
					this.state = 44;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 45;
					_localctx._next = this.block_item();
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_item(): Block_itemContext {
		let _localctx: Block_itemContext = new Block_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, spelParser.RULE_block_item);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.ENCHANT:
			case spelParser.IMP:
			case spelParser.CAST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
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
				this.state = 52;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, spelParser.RULE_statement);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.ENCHANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.assignment();
				}
				break;
			case spelParser.CAST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.call();
				}
				break;
			case spelParser.IMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 57;
				this.match(spelParser.IMP);
				this.state = 58;
				_localctx._name = this.match(spelParser.IDENTIFIER);
				this.state = 59;
				this.match(spelParser.T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_of_statements(): List_of_statementsContext {
		let _localctx: List_of_statementsContext = new List_of_statementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, spelParser.RULE_list_of_statements);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.statement();
				this.state = 64;
				_localctx._next = this.list_of_statements();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, spelParser.RULE_declaration);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.CRAFT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.variable_declaration();
				}
				break;
			case spelParser.BGNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
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
				this.state = 70;
				this.function_definition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_of_declarations(): List_of_declarationsContext {
		let _localctx: List_of_declarationsContext = new List_of_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, spelParser.RULE_list_of_declarations);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.declaration();
				this.state = 75;
				_localctx._next = this.list_of_declarations();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_declaration(): Variable_declarationContext {
		let _localctx: Variable_declarationContext = new Variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, spelParser.RULE_variable_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(spelParser.CRAFT);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spelParser.ARTIFACT) {
				{
				this.state = 80;
				this.match(spelParser.ARTIFACT);
				}
			}

			this.state = 83;
			_localctx._arg_type = this.type();
			this.state = 84;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 85;
			this.match(spelParser.BESTOW);
			this.state = 86;
			_localctx._value = this.expression(0);
			this.state = 87;
			this.match(spelParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_definition(): Function_definitionContext {
		let _localctx: Function_definitionContext = new Function_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, spelParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			_localctx._func_type = this.type();
			this.state = 90;
			this.match(spelParser.SPELL);
			this.state = 91;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 92;
			this.match(spelParser.SACRIFICE);
			this.state = 93;
			_localctx._params = this.list_typed_identifiers();
			this.state = 94;
			this.match(spelParser.T__1);
			this.state = 95;
			_localctx._statements = this.list_of_statements();
			this.state = 96;
			this.match(spelParser.TERMINUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_definition(): Class_definitionContext {
		let _localctx: Class_definitionContext = new Class_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, spelParser.RULE_class_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(spelParser.BGNC);
			this.state = 99;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 100;
			_localctx._statements = this.list_of_declarations();
			this.state = 101;
			this.match(spelParser.ENC);
			this.state = 102;
			this.match(spelParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, spelParser.RULE_assignment);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.match(spelParser.ENCHANT);
				this.state = 105;
				_localctx._id = this.match(spelParser.IDENTIFIER);
				this.state = 106;
				this.match(spelParser.WITH);
				this.state = 107;
				_localctx._value = this.expression(0);
				this.state = 108;
				this.match(spelParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.match(spelParser.ENCHANT);
				this.state = 111;
				_localctx._name = this.match(spelParser.IDENTIFIER);
				this.state = 112;
				this.match(spelParser.OF);
				this.state = 113;
				_localctx._owner = this.match(spelParser.IDENTIFIER);
				this.state = 114;
				this.match(spelParser.WITH);
				this.state = 115;
				_localctx._value = this.expression(0);
				this.state = 116;
				this.match(spelParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, spelParser.RULE_call);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.match(spelParser.CAST);
				this.state = 121;
				this.match(spelParser.IDENTIFIER);
				this.state = 122;
				this.match(spelParser.SACRIFICE);
				this.state = 123;
				_localctx._params = this.list_expressions();
				this.state = 124;
				this.match(spelParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(spelParser.CAST);
				this.state = 127;
				_localctx._name = this.match(spelParser.IDENTIFIER);
				this.state = 128;
				this.match(spelParser.OF);
				this.state = 129;
				_localctx._owner = this.match(spelParser.IDENTIFIER);
				this.state = 130;
				this.match(spelParser.SACRIFICE);
				this.state = 131;
				_localctx._params = this.list_expressions();
				this.state = 132;
				this.match(spelParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, spelParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			_la = this._input.LA(1);
			if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (spelParser.POINTS - 20)) | (1 << (spelParser.PRECISE - 20)) | (1 << (spelParser.RUNE - 20)) | (1 << (spelParser.ABSOLUTE - 20)) | (1 << (spelParser.TOME - 20)) | (1 << (spelParser.IDENTIFIER - 20)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_typed_identifiers(): List_typed_identifiersContext {
		let _localctx: List_typed_identifiersContext = new List_typed_identifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, spelParser.RULE_list_typed_identifiers);
		try {
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 138;
				this.type();
				this.state = 139;
				this.match(spelParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.type();
				this.state = 142;
				this.match(spelParser.IDENTIFIER);
				this.state = 143;
				this.match(spelParser.T__2);
				this.state = 144;
				_localctx._next = this.list_typed_identifiers();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, spelParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.NUMBER:
				{
				this.state = 149;
				_localctx._number_type = this.match(spelParser.NUMBER);
				}
				break;
			case spelParser.STRING:
				{
				this.state = 150;
				_localctx._string_type = this.match(spelParser.STRING);
				}
				break;
			case spelParser.T__4:
				{
				this.state = 151;
				_localctx._minus_expression_type = this.minus_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 169;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 155;
						_localctx._plus = this.match(spelParser.T__3);
						this.state = 156;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 157;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 158;
						_localctx._plus = this.match(spelParser.T__4);
						this.state = 159;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 161;
						_localctx._plus = this.match(spelParser.T__5);
						this.state = 162;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 164;
						_localctx._plus = this.match(spelParser.T__6);
						this.state = 165;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 167;
						_localctx._plus = this.match(spelParser.T__7);
						this.state = 168;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_expressions(): List_expressionsContext {
		let _localctx: List_expressionsContext = new List_expressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, spelParser.RULE_list_expressions);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.expression(0);
				this.state = 176;
				this.match(spelParser.T__2);
				this.state = 177;
				_localctx._next = this.list_expressions();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minus_expression(): Minus_expressionContext {
		let _localctx: Minus_expressionContext = new Minus_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, spelParser.RULE_minus_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(spelParser.T__4);
			this.state = 182;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.block_sempred(_localctx as BlockContext, predIndex);

		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private block_sempred(_localctx: BlockContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xBB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x041\n\x04\f\x04\x0E\x044\v\x04\x03\x05\x03\x05" +
		"\x05\x058\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06?\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07E\n\x07\x03\b\x03\b\x03\b\x05" +
		"\bJ\n\b\x03\t\x03\t\x03\t\x03\t\x05\tP\n\t\x03\n\x03\n\x05\nT\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\ry" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x89\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\x95\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x9B\n\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xAC\n\x11\f\x11\x0E" +
		"\x11\xAF\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB6\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x02\x02\x04\x06 \x14\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x03\x04\x02\x16\x1A\"" +
		"\"\x02\xBC\x02&\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x06+\x03\x02\x02" +
		"\x02\b7\x03\x02\x02\x02\n>\x03\x02\x02\x02\fD\x03\x02\x02\x02\x0EI\x03" +
		"\x02\x02\x02\x10O\x03\x02\x02\x02\x12Q\x03\x02\x02\x02\x14[\x03\x02\x02" +
		"\x02\x16d\x03\x02\x02\x02\x18x\x03\x02\x02\x02\x1A\x88\x03\x02\x02\x02" +
		"\x1C\x8A\x03\x02\x02\x02\x1E\x94\x03\x02\x02\x02 \x9A\x03\x02\x02\x02" +
		"\"\xB5\x03\x02\x02\x02$\xB7\x03\x02\x02\x02&\'\x07\r\x02\x02\'(\x05\x06" +
		"\x04\x02(\x03\x03\x02\x02\x02)*\x05\x06\x04\x02*\x05\x03\x02\x02\x02+" +
		",\b\x04\x01\x02,-\x05\b\x05\x02-2\x03\x02\x02\x02./\f\x03\x02\x02/1\x05" +
		"\b\x05\x020.\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03" +
		"\x02\x02\x023\x07\x03\x02\x02\x0242\x03\x02\x02\x0258\x05\n\x06\x0268" +
		"\x05\x0E\b\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\t\x03\x02\x02\x02" +
		"9?\x05\x18\r\x02:?\x05\x1A\x0E\x02;<\x07\x1E\x02\x02<=\x07\"\x02\x02=" +
		"?\x07\x03\x02\x02>9\x03\x02\x02\x02>:\x03\x02\x02\x02>;\x03\x02\x02\x02" +
		"?\v\x03\x02\x02\x02@E\x05\n\x06\x02AB\x05\n\x06\x02BC\x05\f\x07\x02CE" +
		"\x03\x02\x02\x02D@\x03\x02\x02\x02DA\x03\x02\x02\x02E\r\x03\x02\x02\x02" +
		"FJ\x05\x12\n\x02GJ\x05\x16\f\x02HJ\x05\x14\v\x02IF\x03\x02\x02\x02IG\x03" +
		"\x02\x02\x02IH\x03\x02\x02\x02J\x0F\x03\x02\x02\x02KP\x05\x0E\b\x02LM" +
		"\x05\x0E\b\x02MN\x05\x10\t\x02NP\x03\x02\x02\x02OK\x03\x02\x02\x02OL\x03" +
		"\x02\x02\x02P\x11\x03\x02\x02\x02QS\x07\x10\x02\x02RT\x07\x11\x02\x02" +
		"SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x05\x1C\x0F\x02" +
		"VW\x07\"\x02\x02WX\x07\x12\x02\x02XY\x05 \x11\x02YZ\x07\x03\x02\x02Z\x13" +
		"\x03\x02\x02\x02[\\\x05\x1C\x0F\x02\\]\x07\x13\x02\x02]^\x07\"\x02\x02" +
		"^_\x07\x14\x02\x02_`\x05\x1E\x10\x02`a\x07\x04\x02\x02ab\x05\f\x07\x02" +
		"bc\x07\x15\x02\x02c\x15\x03\x02\x02\x02de\x07\x0E\x02\x02ef\x07\"\x02" +
		"\x02fg\x05\x10\t\x02gh\x07\x0F\x02\x02hi\x07\x03\x02\x02i\x17\x03\x02" +
		"\x02\x02jk\x07\x1B\x02\x02kl\x07\"\x02\x02lm\x07\x1C\x02\x02mn\x05 \x11" +
		"\x02no\x07\x03\x02\x02oy\x03\x02\x02\x02pq\x07\x1B\x02\x02qr\x07\"\x02" +
		"\x02rs\x07\x1D\x02\x02st\x07\"\x02\x02tu\x07\x1C\x02\x02uv\x05 \x11\x02" +
		"vw\x07\x03\x02\x02wy\x03\x02\x02\x02xj\x03\x02\x02\x02xp\x03\x02\x02\x02" +
		"y\x19\x03\x02\x02\x02z{\x07\x1F\x02\x02{|\x07\"\x02\x02|}\x07\x14\x02" +
		"\x02}~\x05\"\x12\x02~\x7F\x07\x03\x02\x02\x7F\x89\x03\x02\x02\x02\x80" +
		"\x81\x07\x1F\x02\x02\x81\x82\x07\"\x02\x02\x82\x83\x07\x1D\x02\x02\x83" +
		"\x84\x07\"\x02\x02\x84\x85\x07\x14\x02\x02\x85\x86\x05\"\x12\x02\x86\x87" +
		"\x07\x03\x02\x02\x87\x89\x03\x02\x02\x02\x88z\x03\x02\x02\x02\x88\x80" +
		"\x03\x02\x02\x02\x89\x1B\x03\x02\x02\x02\x8A\x8B\t\x02\x02\x02\x8B\x1D" +
		"\x03\x02\x02\x02\x8C\x8D\x05\x1C\x0F\x02\x8D\x8E\x07\"\x02\x02\x8E\x95" +
		"\x03\x02\x02\x02\x8F\x90\x05\x1C\x0F\x02\x90\x91\x07\"\x02\x02\x91\x92" +
		"\x07\x05\x02\x02\x92\x93\x05\x1E\x10\x02\x93\x95\x03\x02\x02\x02\x94\x8C" +
		"\x03\x02\x02\x02\x94\x8F\x03\x02\x02\x02\x95\x1F\x03\x02\x02\x02\x96\x97" +
		"\b\x11\x01\x02\x97\x9B\x07!\x02\x02\x98\x9B\x07#\x02\x02\x99\x9B\x05$" +
		"\x13\x02\x9A\x96\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02" +
		"\x02\x02\x9B\xAD\x03\x02\x02\x02\x9C\x9D\f\x07\x02\x02\x9D\x9E\x07\x06" +
		"\x02\x02\x9E\xAC\x05 \x11\b\x9F\xA0\f\x06\x02\x02\xA0\xA1\x07\x07\x02" +
		"\x02\xA1\xAC\x05 \x11\x07\xA2\xA3\f\x05\x02\x02\xA3\xA4\x07\b\x02\x02" +
		"\xA4\xAC\x05 \x11\x06\xA5\xA6\f\x04\x02\x02\xA6\xA7\x07\t\x02\x02\xA7" +
		"\xAC\x05 \x11\x05\xA8\xA9\f\x03\x02\x02\xA9\xAA\x07\n\x02\x02\xAA\xAC" +
		"\x05 \x11\x04\xAB\x9C\x03\x02\x02\x02\xAB\x9F\x03\x02\x02\x02\xAB\xA2" +
		"\x03\x02\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xA8\x03\x02\x02\x02\xAC\xAF" +
		"\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE!" +
		"\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB6\x05 \x11\x02\xB1\xB2" +
		"\x05 \x11\x02\xB2\xB3\x07\x05\x02\x02\xB3\xB4\x05\"\x12\x02\xB4\xB6\x03" +
		"\x02\x02\x02\xB5\xB0\x03\x02\x02\x02\xB5\xB1\x03\x02\x02\x02\xB6#\x03" +
		"\x02\x02\x02\xB7\xB8\x07\x07\x02\x02\xB8\xB9\x05 \x11\x02\xB9%\x03\x02" +
		"\x02\x02\x1027>DIOSx\x88\x94\x9A\xAB\xAD\xB5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!spelParser.__ATN) {
			spelParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(spelParser._serializedATN));
		}

		return spelParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public BGNP(): TerminalNode { return this.getToken(spelParser.BGNP, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_document; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Headless_documentContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_headless_document; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterHeadless_document) {
			listener.enterHeadless_document(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitHeadless_document) {
			listener.exitHeadless_document(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitHeadless_document) {
			return visitor.visitHeadless_document(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _next: Block_itemContext;
	public block_item(): Block_itemContext {
		return this.getRuleContext(0, Block_itemContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_block; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_itemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_block_item; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterBlock_item) {
			listener.enterBlock_item(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitBlock_item) {
			listener.exitBlock_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitBlock_item) {
			return visitor.visitBlock_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public _name: Token;
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public IMP(): TerminalNode | undefined { return this.tryGetToken(spelParser.IMP, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_of_statementsContext extends ParserRuleContext {
	public _next: List_of_statementsContext;
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public list_of_statements(): List_of_statementsContext | undefined {
		return this.tryGetRuleContext(0, List_of_statementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_list_of_statements; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterList_of_statements) {
			listener.enterList_of_statements(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitList_of_statements) {
			listener.exitList_of_statements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitList_of_statements) {
			return visitor.visitList_of_statements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public variable_declaration(): Variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Variable_declarationContext);
	}
	public class_definition(): Class_definitionContext | undefined {
		return this.tryGetRuleContext(0, Class_definitionContext);
	}
	public function_definition(): Function_definitionContext | undefined {
		return this.tryGetRuleContext(0, Function_definitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_declaration; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_of_declarationsContext extends ParserRuleContext {
	public _next: List_of_declarationsContext;
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public list_of_declarations(): List_of_declarationsContext | undefined {
		return this.tryGetRuleContext(0, List_of_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_list_of_declarations; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterList_of_declarations) {
			listener.enterList_of_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitList_of_declarations) {
			listener.exitList_of_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitList_of_declarations) {
			return visitor.visitList_of_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declarationContext extends ParserRuleContext {
	public _arg_type: TypeContext;
	public _name: Token;
	public _value: ExpressionContext;
	public CRAFT(): TerminalNode { return this.getToken(spelParser.CRAFT, 0); }
	public BESTOW(): TerminalNode { return this.getToken(spelParser.BESTOW, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ARTIFACT(): TerminalNode | undefined { return this.tryGetToken(spelParser.ARTIFACT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_variable_declaration; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterVariable_declaration) {
			listener.enterVariable_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitVariable_declaration) {
			listener.exitVariable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitVariable_declaration) {
			return visitor.visitVariable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_definitionContext extends ParserRuleContext {
	public _func_type: TypeContext;
	public _name: Token;
	public _params: List_typed_identifiersContext;
	public _statements: List_of_statementsContext;
	public SPELL(): TerminalNode { return this.getToken(spelParser.SPELL, 0); }
	public SACRIFICE(): TerminalNode { return this.getToken(spelParser.SACRIFICE, 0); }
	public TERMINUS(): TerminalNode { return this.getToken(spelParser.TERMINUS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public list_typed_identifiers(): List_typed_identifiersContext {
		return this.getRuleContext(0, List_typed_identifiersContext);
	}
	public list_of_statements(): List_of_statementsContext {
		return this.getRuleContext(0, List_of_statementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_function_definition; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterFunction_definition) {
			listener.enterFunction_definition(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitFunction_definition) {
			listener.exitFunction_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitFunction_definition) {
			return visitor.visitFunction_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_definitionContext extends ParserRuleContext {
	public _name: Token;
	public _statements: List_of_declarationsContext;
	public BGNC(): TerminalNode { return this.getToken(spelParser.BGNC, 0); }
	public ENC(): TerminalNode { return this.getToken(spelParser.ENC, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public list_of_declarations(): List_of_declarationsContext {
		return this.getRuleContext(0, List_of_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_class_definition; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterClass_definition) {
			listener.enterClass_definition(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitClass_definition) {
			listener.exitClass_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitClass_definition) {
			return visitor.visitClass_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _id: Token;
	public _value: ExpressionContext;
	public _name: Token;
	public _owner: Token;
	public ENCHANT(): TerminalNode { return this.getToken(spelParser.ENCHANT, 0); }
	public WITH(): TerminalNode { return this.getToken(spelParser.WITH, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OF(): TerminalNode | undefined { return this.tryGetToken(spelParser.OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_assignment; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public _params: List_expressionsContext;
	public _name: Token;
	public _owner: Token;
	public CAST(): TerminalNode { return this.getToken(spelParser.CAST, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
	public SACRIFICE(): TerminalNode { return this.getToken(spelParser.SACRIFICE, 0); }
	public list_expressions(): List_expressionsContext {
		return this.getRuleContext(0, List_expressionsContext);
	}
	public OF(): TerminalNode | undefined { return this.tryGetToken(spelParser.OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_call; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public POINTS(): TerminalNode | undefined { return this.tryGetToken(spelParser.POINTS, 0); }
	public PRECISE(): TerminalNode | undefined { return this.tryGetToken(spelParser.PRECISE, 0); }
	public RUNE(): TerminalNode | undefined { return this.tryGetToken(spelParser.RUNE, 0); }
	public ABSOLUTE(): TerminalNode | undefined { return this.tryGetToken(spelParser.ABSOLUTE, 0); }
	public TOME(): TerminalNode | undefined { return this.tryGetToken(spelParser.TOME, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(spelParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_type; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_typed_identifiersContext extends ParserRuleContext {
	public _next: List_typed_identifiersContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public list_typed_identifiers(): List_typed_identifiersContext | undefined {
		return this.tryGetRuleContext(0, List_typed_identifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_list_typed_identifiers; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterList_typed_identifiers) {
			listener.enterList_typed_identifiers(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitList_typed_identifiers) {
			listener.exitList_typed_identifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitList_typed_identifiers) {
			return visitor.visitList_typed_identifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _number_type: Token;
	public _string_type: Token;
	public _minus_expression_type: Minus_expressionContext;
	public _plus: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(spelParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(spelParser.STRING, 0); }
	public minus_expression(): Minus_expressionContext | undefined {
		return this.tryGetRuleContext(0, Minus_expressionContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_expressionsContext extends ParserRuleContext {
	public _next: List_expressionsContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public list_expressions(): List_expressionsContext | undefined {
		return this.tryGetRuleContext(0, List_expressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_list_expressions; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterList_expressions) {
			listener.enterList_expressions(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitList_expressions) {
			listener.exitList_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitList_expressions) {
			return visitor.visitList_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Minus_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_minus_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterMinus_expression) {
			listener.enterMinus_expression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitMinus_expression) {
			listener.exitMinus_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitMinus_expression) {
			return visitor.visitMinus_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

