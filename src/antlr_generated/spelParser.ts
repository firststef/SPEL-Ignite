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
	public static readonly BGND = 11;
	public static readonly BGNP = 12;
	public static readonly BGNC = 13;
	public static readonly ENC = 14;
	public static readonly IMP = 15;
	public static readonly CRAFT = 16;
	public static readonly ARTIFACT = 17;
	public static readonly BESTOW = 18;
	public static readonly SPELL = 19;
	public static readonly SACRIFICE = 20;
	public static readonly TERMINUS = 21;
	public static readonly POINTS = 22;
	public static readonly PRECISE = 23;
	public static readonly RUNE = 24;
	public static readonly ABSOLUTE = 25;
	public static readonly TOME = 26;
	public static readonly ENCHANT = 27;
	public static readonly WITH = 28;
	public static readonly OF = 29;
	public static readonly CAST = 30;
	public static readonly TRANSMUTE = 31;
	public static readonly BECOMES = 32;
	public static readonly DOT = 33;
	public static readonly WHILE = 34;
	public static readonly COLON = 35;
	public static readonly CHARGE = 36;
	public static readonly MANA = 37;
	public static readonly CREATE = 38;
	public static readonly IN = 39;
	public static readonly SAY = 40;
	public static readonly CHANT = 41;
	public static readonly RELEASE = 42;
	public static readonly FROM = 43;
	public static readonly MOVE = 44;
	public static readonly TO = 45;
	public static readonly NUMBER = 46;
	public static readonly IDENTIFIER = 47;
	public static readonly STRING = 48;
	public static readonly RULE_document = 0;
	public static readonly RULE_headless_document = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_block_item = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_import_statement = 5;
	public static readonly RULE_none_statement = 6;
	public static readonly RULE_while_statement = 7;
	public static readonly RULE_print_statement = 8;
	public static readonly RULE_list_of_statements = 9;
	public static readonly RULE_declaration = 10;
	public static readonly RULE_list_of_declarations = 11;
	public static readonly RULE_variable_declaration = 12;
	public static readonly RULE_function_definition = 13;
	public static readonly RULE_class_definition = 14;
	public static readonly RULE_assignment = 15;
	public static readonly RULE_call = 16;
	public static readonly RULE_holder = 17;
	public static readonly RULE_create_statement = 18;
	public static readonly RULE_release_statement = 19;
	public static readonly RULE_move_statement = 20;
	public static readonly RULE_list_typed_identifiers = 21;
	public static readonly RULE_modification = 22;
	public static readonly RULE_expression = 23;
	public static readonly RULE_list_expressions = 24;
	public static readonly RULE_basic_type_expression = 25;
	public static readonly RULE_minus_expression = 26;
	public static readonly RULE_paren_expression = 27;
	public static readonly RULE_field_expression = 28;
	public static readonly RULE_named_expression = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "headless_document", "block", "block_item", "statement", "import_statement", 
		"none_statement", "while_statement", "print_statement", "list_of_statements", 
		"declaration", "list_of_declarations", "variable_declaration", "function_definition", 
		"class_definition", "assignment", "call", "holder", "create_statement", 
		"release_statement", "move_statement", "list_typed_identifiers", "modification", 
		"expression", "list_expressions", "basic_type_expression", "minus_expression", 
		"paren_expression", "field_expression", "named_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'+'", "'-'", "'/'", "'*'", "'^'", "'('", "')'", undefined, 
		undefined, "'In the beginning...'", "'The tale begins.'", "'I summon thy name'", 
		"'and thy brethren.'", "'Legend tells of'", "'craft'", "'artifact'", "'bestow'", 
		"'spell'", "'sacrifice'", "'terminus'", "'points'", "'precise'", "'rune'", 
		"'absolute'", "'tome'", "'enchant'", "'with'", "'of'", "'cast'", "'transmute'", 
		"'becomes'", "'.'", "'as long as'", "':'", "'charge'", "'mana'", "'create'", 
		"'in'", "'say'", "'chant'", "'release'", "'from'", "'move'", "'to'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "COMMENT", "WHITESPACE", "BGND", "BGNP", "BGNC", 
		"ENC", "IMP", "CRAFT", "ARTIFACT", "BESTOW", "SPELL", "SACRIFICE", "TERMINUS", 
		"POINTS", "PRECISE", "RUNE", "ABSOLUTE", "TOME", "ENCHANT", "WITH", "OF", 
		"CAST", "TRANSMUTE", "BECOMES", "DOT", "WHILE", "COLON", "CHARGE", "MANA", 
		"CREATE", "IN", "SAY", "CHANT", "RELEASE", "FROM", "MOVE", "TO", "NUMBER", 
		"IDENTIFIER", "STRING",
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spelParser.BGND) {
				{
				this.state = 60;
				this.match(spelParser.BGND);
				this.state = 61;
				_localctx._declr_block = this.block();
				}
			}

			this.state = 64;
			this.match(spelParser.BGNP);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spelParser.T__2) | (1 << spelParser.T__6) | (1 << spelParser.BGNC) | (1 << spelParser.IMP) | (1 << spelParser.CRAFT) | (1 << spelParser.ENCHANT) | (1 << spelParser.CAST))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (spelParser.DOT - 33)) | (1 << (spelParser.WHILE - 33)) | (1 << (spelParser.CREATE - 33)) | (1 << (spelParser.SAY - 33)) | (1 << (spelParser.CHANT - 33)) | (1 << (spelParser.RELEASE - 33)) | (1 << (spelParser.MOVE - 33)) | (1 << (spelParser.NUMBER - 33)) | (1 << (spelParser.IDENTIFIER - 33)) | (1 << (spelParser.STRING - 33)))) !== 0)) {
				{
				this.state = 65;
				_localctx._program = this.block();
				}
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
	public headless_document(): Headless_documentContext {
		let _localctx: Headless_documentContext = new Headless_documentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, spelParser.RULE_headless_document);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.block();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, spelParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				_localctx._items = this.block_item();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << spelParser.T__2) | (1 << spelParser.T__6) | (1 << spelParser.BGNC) | (1 << spelParser.IMP) | (1 << spelParser.CRAFT) | (1 << spelParser.ENCHANT) | (1 << spelParser.CAST))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (spelParser.DOT - 33)) | (1 << (spelParser.WHILE - 33)) | (1 << (spelParser.CREATE - 33)) | (1 << (spelParser.SAY - 33)) | (1 << (spelParser.CHANT - 33)) | (1 << (spelParser.RELEASE - 33)) | (1 << (spelParser.MOVE - 33)) | (1 << (spelParser.NUMBER - 33)) | (1 << (spelParser.IDENTIFIER - 33)) | (1 << (spelParser.STRING - 33)))) !== 0));
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
	public block_item(): Block_itemContext {
		let _localctx: Block_itemContext = new Block_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, spelParser.RULE_block_item);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.declaration();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, spelParser.RULE_statement);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.call();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.import_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.while_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 83;
				this.print_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 84;
				this.create_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 85;
				this.release_statement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 86;
				this.move_statement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 87;
				this.none_statement();
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
	public import_statement(): Import_statementContext {
		let _localctx: Import_statementContext = new Import_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, spelParser.RULE_import_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(spelParser.IMP);
			this.state = 91;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 92;
			this.match(spelParser.DOT);
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
	public none_statement(): None_statementContext {
		let _localctx: None_statementContext = new None_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, spelParser.RULE_none_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(spelParser.DOT);
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
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, spelParser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(spelParser.WHILE);
			this.state = 97;
			_localctx._expr = this.expression(0);
			this.state = 98;
			this.match(spelParser.COLON);
			this.state = 99;
			_localctx._stmts = this.list_of_statements();
			this.state = 100;
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
	public print_statement(): Print_statementContext {
		let _localctx: Print_statementContext = new Print_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, spelParser.RULE_print_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			_localctx._tone = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === spelParser.SAY || _la === spelParser.CHANT)) {
				_localctx._tone = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 103;
			_localctx._msg = this.match(spelParser.STRING);
			this.state = 104;
			this.match(spelParser.DOT);
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
		this.enterRule(_localctx, 18, spelParser.RULE_list_of_statements);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.statement();
				this.state = 107;
				_localctx._next = this.list_of_statements();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.statement();
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
		this.enterRule(_localctx, 20, spelParser.RULE_declaration);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.CRAFT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.variable_declaration();
				}
				break;
			case spelParser.BGNC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.class_definition();
				}
				break;
			case spelParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 114;
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
		this.enterRule(_localctx, 22, spelParser.RULE_list_of_declarations);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.declaration();
				this.state = 119;
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
		this.enterRule(_localctx, 24, spelParser.RULE_variable_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(spelParser.CRAFT);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spelParser.ARTIFACT) {
				{
				this.state = 124;
				this.match(spelParser.ARTIFACT);
				}
			}

			this.state = 127;
			_localctx._arg_type = this.match(spelParser.IDENTIFIER);
			this.state = 128;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spelParser.BESTOW) {
				{
				this.state = 129;
				this.match(spelParser.BESTOW);
				this.state = 130;
				_localctx._value = this.expression(0);
				}
			}

			this.state = 133;
			this.match(spelParser.DOT);
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
		this.enterRule(_localctx, 26, spelParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			_localctx._func_type = this.match(spelParser.IDENTIFIER);
			this.state = 136;
			this.match(spelParser.SPELL);
			this.state = 137;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 138;
			this.match(spelParser.SACRIFICE);
			this.state = 139;
			_localctx._params = this.list_typed_identifiers();
			this.state = 140;
			this.match(spelParser.COLON);
			this.state = 141;
			_localctx._statements = this.list_of_statements();
			this.state = 142;
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
		this.enterRule(_localctx, 28, spelParser.RULE_class_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(spelParser.BGNC);
			this.state = 145;
			_localctx._name = this.match(spelParser.IDENTIFIER);
			this.state = 146;
			_localctx._declarations = this.list_of_declarations();
			this.state = 147;
			this.match(spelParser.ENC);
			this.state = 148;
			this.match(spelParser.DOT);
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
		this.enterRule(_localctx, 30, spelParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			_localctx._expr = this.expression(0);
			this.state = 151;
			this.match(spelParser.BECOMES);
			this.state = 152;
			_localctx._value = this.expression(0);
			this.state = 153;
			this.match(spelParser.DOT);
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
		this.enterRule(_localctx, 32, spelParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(spelParser.CAST);
			this.state = 156;
			_localctx._expr = this.expression(0);
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.match(spelParser.SACRIFICE);
				this.state = 158;
				_localctx._params = this.list_expressions();
				}
				break;
			}
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 161;
				this.match(spelParser.DOT);
				}
				break;
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
	public holder(): HolderContext {
		let _localctx: HolderContext = new HolderContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, spelParser.RULE_holder);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 164;
				this.match(spelParser.IDENTIFIER);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === spelParser.IDENTIFIER);
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
	public create_statement(): Create_statementContext {
		let _localctx: Create_statementContext = new Create_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, spelParser.RULE_create_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(spelParser.CREATE);
			this.state = 170;
			_localctx._object = this.match(spelParser.IDENTIFIER);
			this.state = 171;
			this.match(spelParser.IN);
			this.state = 172;
			_localctx._where = this.holder();
			this.state = 173;
			this.match(spelParser.DOT);
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
	public release_statement(): Release_statementContext {
		let _localctx: Release_statementContext = new Release_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, spelParser.RULE_release_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(spelParser.RELEASE);
			this.state = 176;
			this.match(spelParser.FROM);
			this.state = 177;
			_localctx._where = this.holder();
			this.state = 178;
			this.match(spelParser.DOT);
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
	public move_statement(): Move_statementContext {
		let _localctx: Move_statementContext = new Move_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, spelParser.RULE_move_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(spelParser.MOVE);
			this.state = 181;
			_localctx._object = this.expression(0);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === spelParser.FROM) {
				{
				this.state = 182;
				this.match(spelParser.FROM);
				this.state = 183;
				_localctx._from = this.holder();
				}
			}

			this.state = 186;
			this.match(spelParser.TO);
			this.state = 187;
			_localctx._to = this.holder();
			this.state = 188;
			this.match(spelParser.DOT);
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
		this.enterRule(_localctx, 42, spelParser.RULE_list_typed_identifiers);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				_localctx._type = this.match(spelParser.IDENTIFIER);
				this.state = 191;
				_localctx._name = this.match(spelParser.IDENTIFIER);
				this.state = 192;
				this.match(spelParser.T__0);
				this.state = 193;
				_localctx._next = this.list_typed_identifiers();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				_localctx._type = this.match(spelParser.IDENTIFIER);
				this.state = 195;
				_localctx._name = this.match(spelParser.IDENTIFIER);
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
	public modification(): ModificationContext {
		let _localctx: ModificationContext = new ModificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, spelParser.RULE_modification);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(spelParser.ENCHANT);
			this.state = 199;
			_localctx._expr = this.expression(0);
			this.state = 200;
			this.match(spelParser.WITH);
			this.state = 201;
			_localctx._value = this.expression(0);
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 202;
				this.match(spelParser.DOT);
				}
				break;
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
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, spelParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 206;
				_localctx._basic_type_t = this.basic_type_expression();
				}
				break;

			case 2:
				{
				this.state = 207;
				_localctx._named_expression_t = this.named_expression();
				}
				break;

			case 3:
				{
				this.state = 208;
				_localctx._minus_expression_t = this.minus_expression();
				}
				break;

			case 4:
				{
				this.state = 209;
				_localctx._paren_expression_t = this.paren_expression();
				}
				break;

			case 5:
				{
				this.state = 210;
				_localctx._field_expression_t = this.field_expression();
				}
				break;

			case 6:
				{
				this.state = 211;
				_localctx._modifaction_expression_t = this.modification();
				}
				break;

			case 7:
				{
				this.state = 212;
				_localctx._call_expression_t = this.call();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 230;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._lexpr = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 215;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 216;
						_localctx._sign = this.match(spelParser.T__1);
						this.state = 217;
						_localctx._rexpr = this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._lexpr = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 218;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 219;
						_localctx._sign = this.match(spelParser.T__2);
						this.state = 220;
						_localctx._rexpr = this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._lexpr = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 221;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 222;
						_localctx._sign = this.match(spelParser.T__3);
						this.state = 223;
						_localctx._rexpr = this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._lexpr = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 225;
						_localctx._sign = this.match(spelParser.T__4);
						this.state = 226;
						_localctx._rexpr = this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._lexpr = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, spelParser.RULE_expression);
						this.state = 227;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 228;
						_localctx._sign = this.match(spelParser.T__5);
						this.state = 229;
						_localctx._rexpr = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
		this.enterRule(_localctx, 48, spelParser.RULE_list_expressions);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.expression(0);
				this.state = 236;
				this.match(spelParser.T__0);
				this.state = 237;
				_localctx._next = this.list_expressions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.expression(0);
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
	public basic_type_expression(): Basic_type_expressionContext {
		let _localctx: Basic_type_expressionContext = new Basic_type_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, spelParser.RULE_basic_type_expression);
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case spelParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				_localctx._number_type = this.match(spelParser.NUMBER);
				}
				break;
			case spelParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				_localctx._string_type = this.match(spelParser.STRING);
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
	public minus_expression(): Minus_expressionContext {
		let _localctx: Minus_expressionContext = new Minus_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, spelParser.RULE_minus_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(spelParser.T__2);
			this.state = 247;
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
	// @RuleVersion(0)
	public paren_expression(): Paren_expressionContext {
		let _localctx: Paren_expressionContext = new Paren_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, spelParser.RULE_paren_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(spelParser.T__6);
			this.state = 250;
			this.expression(0);
			this.state = 251;
			this.match(spelParser.T__7);
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
	public field_expression(): Field_expressionContext {
		let _localctx: Field_expressionContext = new Field_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, spelParser.RULE_field_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(spelParser.IDENTIFIER);
			this.state = 254;
			this.match(spelParser.OF);
			this.state = 255;
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
	// @RuleVersion(0)
	public named_expression(): Named_expressionContext {
		let _localctx: Named_expressionContext = new Named_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, spelParser.RULE_named_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.match(spelParser.IDENTIFIER);
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
		case 23:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u0106\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x05\x02A\n\x02" +
		"\x03\x02\x03\x02\x05\x02E\n\x02\x03\x03\x03\x03\x03\x04\x06\x04J\n\x04" +
		"\r\x04\x0E\x04K\x03\x05\x03\x05\x05\x05P\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06[\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\vq\n\v\x03\f\x03" +
		"\f\x03\f\x05\fv\n\f\x03\r\x03\r\x03\r\x03\r\x05\r|\n\r\x03\x0E\x03\x0E" +
		"\x05\x0E\x80\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x86\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xA2" +
		"\n\x12\x03\x12\x05\x12\xA5\n\x12\x03\x13\x06\x13\xA8\n\x13\r\x13\x0E\x13" +
		"\xA9\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xBB\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\xC7\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\xCE\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\xD8\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x07\x19\xE9\n\x19\f\x19\x0E\x19\xEC\v\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\xF3\n\x1A\x03\x1B\x03\x1B\x05\x1B\xF7\n\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x02\x02\x030 \x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02\x02\x03\x03\x02*+\x02\u010C\x02@\x03\x02" +
		"\x02\x02\x04F\x03\x02\x02\x02\x06I\x03\x02\x02\x02\bO\x03\x02\x02\x02" +
		"\nZ\x03\x02\x02\x02\f\\\x03\x02\x02\x02\x0E`\x03\x02\x02\x02\x10b\x03" +
		"\x02\x02\x02\x12h\x03\x02\x02\x02\x14p\x03\x02\x02\x02\x16u\x03\x02\x02" +
		"\x02\x18{\x03\x02\x02\x02\x1A}\x03\x02\x02\x02\x1C\x89\x03\x02\x02\x02" +
		"\x1E\x92\x03\x02\x02\x02 \x98\x03\x02\x02\x02\"\x9D\x03\x02\x02\x02$\xA7" +
		"\x03\x02\x02\x02&\xAB\x03\x02\x02\x02(\xB1\x03\x02\x02\x02*\xB6\x03\x02" +
		"\x02\x02,\xC6\x03\x02\x02\x02.\xC8\x03\x02\x02\x020\xD7\x03\x02\x02\x02" +
		"2\xF2\x03\x02\x02\x024\xF6\x03\x02\x02\x026\xF8\x03\x02\x02\x028\xFB\x03" +
		"\x02\x02\x02:\xFF\x03\x02\x02\x02<\u0103\x03\x02\x02\x02>?\x07\r\x02\x02" +
		"?A\x05\x06\x04\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BD\x07\x0E\x02\x02CE\x05\x06\x04\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"E\x03\x03\x02\x02\x02FG\x05\x06\x04\x02G\x05\x03\x02\x02\x02HJ\x05\b\x05" +
		"\x02IH\x03\x02\x02\x02JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02" +
		"\x02L\x07\x03\x02\x02\x02MP\x05\n\x06\x02NP\x05\x16\f\x02OM\x03\x02\x02" +
		"\x02ON\x03\x02\x02\x02P\t\x03\x02\x02\x02Q[\x05 \x11\x02R[\x05\"\x12\x02" +
		"S[\x05\f\x07\x02T[\x05\x10\t\x02U[\x05\x12\n\x02V[\x05&\x14\x02W[\x05" +
		"(\x15\x02X[\x05*\x16\x02Y[\x05\x0E\b\x02ZQ\x03\x02\x02\x02ZR\x03\x02\x02" +
		"\x02ZS\x03\x02\x02\x02ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02ZV\x03\x02\x02" +
		"\x02ZW\x03\x02\x02\x02ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02[\v\x03\x02" +
		"\x02\x02\\]\x07\x11\x02\x02]^\x071\x02\x02^_\x07#\x02\x02_\r\x03\x02\x02" +
		"\x02`a\x07#\x02\x02a\x0F\x03\x02\x02\x02bc\x07$\x02\x02cd\x050\x19\x02" +
		"de\x07%\x02\x02ef\x05\x14\v\x02fg\x07\x17\x02\x02g\x11\x03\x02\x02\x02" +
		"hi\t\x02\x02\x02ij\x072\x02\x02jk\x07#\x02\x02k\x13\x03\x02\x02\x02lm" +
		"\x05\n\x06\x02mn\x05\x14\v\x02nq\x03\x02\x02\x02oq\x05\n\x06\x02pl\x03" +
		"\x02\x02\x02po\x03\x02\x02\x02q\x15\x03\x02\x02\x02rv\x05\x1A\x0E\x02" +
		"sv\x05\x1E\x10\x02tv\x05\x1C\x0F\x02ur\x03\x02\x02\x02us\x03\x02\x02\x02" +
		"ut\x03\x02\x02\x02v\x17\x03\x02\x02\x02w|\x05\x16\f\x02xy\x05\x16\f\x02" +
		"yz\x05\x18\r\x02z|\x03\x02\x02\x02{w\x03\x02\x02\x02{x\x03\x02\x02\x02" +
		"|\x19\x03\x02\x02\x02}\x7F\x07\x12\x02\x02~\x80\x07\x13\x02\x02\x7F~\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x07" +
		"1\x02\x02\x82\x85\x071\x02\x02\x83\x84\x07\x14\x02\x02\x84\x86\x050\x19" +
		"\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02" +
		"\x02\x87\x88\x07#\x02\x02\x88\x1B\x03\x02\x02\x02\x89\x8A\x071\x02\x02" +
		"\x8A\x8B\x07\x15\x02\x02\x8B\x8C\x071\x02\x02\x8C\x8D\x07\x16\x02\x02" +
		"\x8D\x8E\x05,\x17\x02\x8E\x8F\x07%\x02\x02\x8F\x90\x05\x14\v\x02\x90\x91" +
		"\x07\x17\x02\x02\x91\x1D\x03\x02\x02\x02\x92\x93\x07\x0F\x02\x02\x93\x94" +
		"\x071\x02\x02\x94\x95\x05\x18\r\x02\x95\x96\x07\x10\x02\x02\x96\x97\x07" +
		"#\x02\x02\x97\x1F\x03\x02\x02\x02\x98\x99\x050\x19\x02\x99\x9A\x07\"\x02" +
		"\x02\x9A\x9B\x050\x19\x02\x9B\x9C\x07#\x02\x02\x9C!\x03\x02\x02\x02\x9D" +
		"\x9E\x07 \x02\x02\x9E\xA1\x050\x19\x02\x9F\xA0\x07\x16\x02\x02\xA0\xA2" +
		"\x052\x1A\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4" +
		"\x03\x02\x02\x02\xA3\xA5\x07#\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5" +
		"\x03\x02\x02\x02\xA5#\x03\x02\x02\x02\xA6\xA8\x071\x02\x02\xA7\xA6\x03" +
		"\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03" +
		"\x02\x02\x02\xAA%\x03\x02\x02\x02\xAB\xAC\x07(\x02\x02\xAC\xAD\x071\x02" +
		"\x02\xAD\xAE\x07)\x02\x02\xAE\xAF\x05$\x13\x02\xAF\xB0\x07#\x02\x02\xB0" +
		"\'\x03\x02\x02\x02\xB1\xB2\x07,\x02\x02\xB2\xB3\x07-\x02\x02\xB3\xB4\x05" +
		"$\x13\x02\xB4\xB5\x07#\x02\x02\xB5)\x03\x02\x02\x02\xB6\xB7\x07.\x02\x02" +
		"\xB7\xBA\x050\x19\x02\xB8\xB9\x07-\x02\x02\xB9\xBB\x05$\x13\x02\xBA\xB8" +
		"\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD" +
		"\x07/\x02\x02\xBD\xBE\x05$\x13\x02\xBE\xBF\x07#\x02\x02\xBF+\x03\x02\x02" +
		"\x02\xC0\xC1\x071\x02\x02\xC1\xC2\x071\x02\x02\xC2\xC3\x07\x03\x02\x02" +
		"\xC3\xC7\x05,\x17\x02\xC4\xC5\x071\x02\x02\xC5\xC7\x071\x02\x02\xC6\xC0" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7-\x03\x02\x02\x02\xC8\xC9" +
		"\x07\x1D\x02\x02\xC9\xCA\x050\x19\x02\xCA\xCB\x07\x1E\x02\x02\xCB\xCD" +
		"\x050\x19\x02\xCC\xCE\x07#\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE/\x03\x02\x02\x02\xCF\xD0\b\x19\x01\x02\xD0\xD8\x054\x1B" +
		"\x02\xD1\xD8\x05<\x1F\x02\xD2\xD8\x056\x1C\x02\xD3\xD8\x058\x1D\x02\xD4" +
		"\xD8\x05:\x1E\x02\xD5\xD8\x05.\x18\x02\xD6\xD8\x05\"\x12\x02\xD7\xCF\x03" +
		"\x02\x02\x02\xD7\xD1\x03\x02\x02\x02\xD7\xD2\x03\x02\x02\x02\xD7\xD3\x03" +
		"\x02\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD6\x03" +
		"\x02\x02\x02\xD8\xEA\x03\x02\x02\x02\xD9\xDA\f\x07\x02\x02\xDA\xDB\x07" +
		"\x04\x02\x02\xDB\xE9\x050\x19\b\xDC\xDD\f\x06\x02\x02\xDD\xDE\x07\x05" +
		"\x02\x02\xDE\xE9\x050\x19\x07\xDF\xE0\f\x05\x02\x02\xE0\xE1\x07\x06\x02" +
		"\x02\xE1\xE9\x050\x19\x06\xE2\xE3\f\x04\x02\x02\xE3\xE4\x07\x07\x02\x02" +
		"\xE4\xE9\x050\x19\x05\xE5\xE6\f\x03\x02\x02\xE6\xE7\x07\b\x02\x02\xE7" +
		"\xE9\x050\x19\x04\xE8\xD9\x03\x02\x02\x02\xE8\xDC\x03\x02\x02\x02\xE8" +
		"\xDF\x03\x02\x02\x02\xE8\xE2\x03\x02\x02\x02\xE8\xE5\x03\x02\x02\x02\xE9" +
		"\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB" +
		"1\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x050\x19\x02\xEE\xEF" +
		"\x07\x03\x02\x02\xEF\xF0\x052\x1A\x02\xF0\xF3\x03\x02\x02\x02\xF1\xF3" +
		"\x050\x19\x02\xF2\xED\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF33\x03" +
		"\x02\x02\x02\xF4\xF7\x070\x02\x02\xF5\xF7\x072\x02\x02\xF6\xF4\x03\x02" +
		"\x02\x02\xF6\xF5\x03\x02\x02\x02\xF75\x03\x02\x02\x02\xF8\xF9\x07\x05" +
		"\x02\x02\xF9\xFA\x050\x19\x02\xFA7\x03\x02\x02\x02\xFB\xFC\x07\t\x02\x02" +
		"\xFC\xFD\x050\x19\x02\xFD\xFE\x07\n\x02\x02\xFE9\x03\x02\x02\x02\xFF\u0100" +
		"\x071\x02\x02\u0100\u0101\x07\x1F\x02\x02\u0101\u0102\x050\x19\x02\u0102" +
		";\x03\x02\x02\x02\u0103\u0104\x071\x02\x02\u0104=\x03\x02\x02\x02\x17" +
		"@DKOZpu{\x7F\x85\xA1\xA4\xA9\xBA\xC6\xCD\xD7\xE8\xEA\xF2\xF6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!spelParser.__ATN) {
			spelParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(spelParser._serializedATN));
		}

		return spelParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public _declr_block: BlockContext;
	public _program: BlockContext;
	public BGNP(): TerminalNode { return this.getToken(spelParser.BGNP, 0); }
	public BGND(): TerminalNode | undefined { return this.tryGetToken(spelParser.BGND, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
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
	public _items: Block_itemContext;
	public block_item(): Block_itemContext[];
	public block_item(i: number): Block_itemContext;
	public block_item(i?: number): Block_itemContext | Block_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block_itemContext);
		} else {
			return this.getRuleContext(i, Block_itemContext);
		}
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
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public import_statement(): Import_statementContext | undefined {
		return this.tryGetRuleContext(0, Import_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public print_statement(): Print_statementContext | undefined {
		return this.tryGetRuleContext(0, Print_statementContext);
	}
	public create_statement(): Create_statementContext | undefined {
		return this.tryGetRuleContext(0, Create_statementContext);
	}
	public release_statement(): Release_statementContext | undefined {
		return this.tryGetRuleContext(0, Release_statementContext);
	}
	public move_statement(): Move_statementContext | undefined {
		return this.tryGetRuleContext(0, Move_statementContext);
	}
	public none_statement(): None_statementContext | undefined {
		return this.tryGetRuleContext(0, None_statementContext);
	}
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


export class Import_statementContext extends ParserRuleContext {
	public _name: Token;
	public IMP(): TerminalNode { return this.getToken(spelParser.IMP, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_import_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterImport_statement) {
			listener.enterImport_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitImport_statement) {
			listener.exitImport_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitImport_statement) {
			return visitor.visitImport_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class None_statementContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_none_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterNone_statement) {
			listener.enterNone_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitNone_statement) {
			listener.exitNone_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitNone_statement) {
			return visitor.visitNone_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public _expr: ExpressionContext;
	public _stmts: List_of_statementsContext;
	public WHILE(): TerminalNode { return this.getToken(spelParser.WHILE, 0); }
	public COLON(): TerminalNode { return this.getToken(spelParser.COLON, 0); }
	public TERMINUS(): TerminalNode { return this.getToken(spelParser.TERMINUS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public list_of_statements(): List_of_statementsContext {
		return this.getRuleContext(0, List_of_statementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_while_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitWhile_statement) {
			return visitor.visitWhile_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Print_statementContext extends ParserRuleContext {
	public _tone: Token;
	public _msg: Token;
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public STRING(): TerminalNode { return this.getToken(spelParser.STRING, 0); }
	public SAY(): TerminalNode | undefined { return this.tryGetToken(spelParser.SAY, 0); }
	public CHANT(): TerminalNode | undefined { return this.tryGetToken(spelParser.CHANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_print_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterPrint_statement) {
			listener.enterPrint_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitPrint_statement) {
			listener.exitPrint_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitPrint_statement) {
			return visitor.visitPrint_statement(this);
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
	public _arg_type: Token;
	public _name: Token;
	public _value: ExpressionContext;
	public CRAFT(): TerminalNode { return this.getToken(spelParser.CRAFT, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
	public ARTIFACT(): TerminalNode | undefined { return this.tryGetToken(spelParser.ARTIFACT, 0); }
	public BESTOW(): TerminalNode | undefined { return this.tryGetToken(spelParser.BESTOW, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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
	public _func_type: Token;
	public _name: Token;
	public _params: List_typed_identifiersContext;
	public _statements: List_of_statementsContext;
	public SPELL(): TerminalNode { return this.getToken(spelParser.SPELL, 0); }
	public SACRIFICE(): TerminalNode { return this.getToken(spelParser.SACRIFICE, 0); }
	public COLON(): TerminalNode { return this.getToken(spelParser.COLON, 0); }
	public TERMINUS(): TerminalNode { return this.getToken(spelParser.TERMINUS, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
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
	public _declarations: List_of_declarationsContext;
	public BGNC(): TerminalNode { return this.getToken(spelParser.BGNC, 0); }
	public ENC(): TerminalNode { return this.getToken(spelParser.ENC, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
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
	public _expr: ExpressionContext;
	public _value: ExpressionContext;
	public BECOMES(): TerminalNode { return this.getToken(spelParser.BECOMES, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
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
	public _expr: ExpressionContext;
	public _params: List_expressionsContext;
	public CAST(): TerminalNode { return this.getToken(spelParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SACRIFICE(): TerminalNode | undefined { return this.tryGetToken(spelParser.SACRIFICE, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(spelParser.DOT, 0); }
	public list_expressions(): List_expressionsContext | undefined {
		return this.tryGetRuleContext(0, List_expressionsContext);
	}
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


export class HolderContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_holder; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterHolder) {
			listener.enterHolder(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitHolder) {
			listener.exitHolder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitHolder) {
			return visitor.visitHolder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_statementContext extends ParserRuleContext {
	public _object: Token;
	public _where: HolderContext;
	public CREATE(): TerminalNode { return this.getToken(spelParser.CREATE, 0); }
	public IN(): TerminalNode { return this.getToken(spelParser.IN, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public holder(): HolderContext {
		return this.getRuleContext(0, HolderContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_create_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterCreate_statement) {
			listener.enterCreate_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitCreate_statement) {
			listener.exitCreate_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitCreate_statement) {
			return visitor.visitCreate_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Release_statementContext extends ParserRuleContext {
	public _where: HolderContext;
	public RELEASE(): TerminalNode { return this.getToken(spelParser.RELEASE, 0); }
	public FROM(): TerminalNode { return this.getToken(spelParser.FROM, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public holder(): HolderContext {
		return this.getRuleContext(0, HolderContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_release_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterRelease_statement) {
			listener.enterRelease_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitRelease_statement) {
			listener.exitRelease_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitRelease_statement) {
			return visitor.visitRelease_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Move_statementContext extends ParserRuleContext {
	public _object: ExpressionContext;
	public _from: HolderContext;
	public _to: HolderContext;
	public MOVE(): TerminalNode { return this.getToken(spelParser.MOVE, 0); }
	public TO(): TerminalNode { return this.getToken(spelParser.TO, 0); }
	public DOT(): TerminalNode { return this.getToken(spelParser.DOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public holder(): HolderContext[];
	public holder(i: number): HolderContext;
	public holder(i?: number): HolderContext | HolderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HolderContext);
		} else {
			return this.getRuleContext(i, HolderContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(spelParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_move_statement; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterMove_statement) {
			listener.enterMove_statement(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitMove_statement) {
			listener.exitMove_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitMove_statement) {
			return visitor.visitMove_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_typed_identifiersContext extends ParserRuleContext {
	public _type: Token;
	public _name: Token;
	public _next: List_typed_identifiersContext;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(spelParser.IDENTIFIER);
		} else {
			return this.getToken(spelParser.IDENTIFIER, i);
		}
	}
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


export class ModificationContext extends ParserRuleContext {
	public _expr: ExpressionContext;
	public _value: ExpressionContext;
	public ENCHANT(): TerminalNode { return this.getToken(spelParser.ENCHANT, 0); }
	public WITH(): TerminalNode { return this.getToken(spelParser.WITH, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(spelParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_modification; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterModification) {
			listener.enterModification(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitModification) {
			listener.exitModification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitModification) {
			return visitor.visitModification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _lexpr: ExpressionContext;
	public _basic_type_t: Basic_type_expressionContext;
	public _named_expression_t: Named_expressionContext;
	public _minus_expression_t: Minus_expressionContext;
	public _paren_expression_t: Paren_expressionContext;
	public _field_expression_t: Field_expressionContext;
	public _modifaction_expression_t: ModificationContext;
	public _call_expression_t: CallContext;
	public _sign: Token;
	public _rexpr: ExpressionContext;
	public basic_type_expression(): Basic_type_expressionContext | undefined {
		return this.tryGetRuleContext(0, Basic_type_expressionContext);
	}
	public named_expression(): Named_expressionContext | undefined {
		return this.tryGetRuleContext(0, Named_expressionContext);
	}
	public minus_expression(): Minus_expressionContext | undefined {
		return this.tryGetRuleContext(0, Minus_expressionContext);
	}
	public paren_expression(): Paren_expressionContext | undefined {
		return this.tryGetRuleContext(0, Paren_expressionContext);
	}
	public field_expression(): Field_expressionContext | undefined {
		return this.tryGetRuleContext(0, Field_expressionContext);
	}
	public modification(): ModificationContext | undefined {
		return this.tryGetRuleContext(0, ModificationContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
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


export class Basic_type_expressionContext extends ParserRuleContext {
	public _number_type: Token;
	public _string_type: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(spelParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(spelParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_basic_type_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterBasic_type_expression) {
			listener.enterBasic_type_expression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitBasic_type_expression) {
			listener.exitBasic_type_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitBasic_type_expression) {
			return visitor.visitBasic_type_expression(this);
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


export class Paren_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_paren_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterParen_expression) {
			listener.enterParen_expression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitParen_expression) {
			listener.exitParen_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitParen_expression) {
			return visitor.visitParen_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_expressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	public OF(): TerminalNode { return this.getToken(spelParser.OF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_field_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterField_expression) {
			listener.enterField_expression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitField_expression) {
			listener.exitField_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitField_expression) {
			return visitor.visitField_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Named_expressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(spelParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return spelParser.RULE_named_expression; }
	// @Override
	public enterRule(listener: spelListener): void {
		if (listener.enterNamed_expression) {
			listener.enterNamed_expression(this);
		}
	}
	// @Override
	public exitRule(listener: spelListener): void {
		if (listener.exitNamed_expression) {
			listener.exitNamed_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: spelVisitor<Result>): Result {
		if (visitor.visitNamed_expression) {
			return visitor.visitNamed_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


