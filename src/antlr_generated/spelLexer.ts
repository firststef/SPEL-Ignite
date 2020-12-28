// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class spelLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "COMMENT", 
		"WHITESPACE", "BGNP", "BGNC", "ENC", "CRAFT", "ARTIFACT", "BESTOW", "SPELL", 
		"SACRIFICE", "TERMINUS", "POINTS", "PRECISE", "RUNE", "ABSOLUTE", "TOME", 
		"ENCHANT", "WITH", "OF", "IMP", "CAST", "DIGIT", "CHARACTER", "COMMA", 
		"NUMBER", "IDENTIFIER", "STRING", "STRING_CHAR",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(spelLexer._LITERAL_NAMES, spelLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return spelLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(spelLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "spel.g4"; }

	// @Override
	public get ruleNames(): string[] { return spelLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return spelLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return spelLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return spelLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\u0139\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07\na\n\n\f\n\x0E\nd\v\n\x03\n\x03" +
		"\n\x03\v\x06\vi\n\v\r\v\x0E\vj\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03" +
		"!\x03!\x03\"\x06\"\u0120\n\"\r\"\x0E\"\u0121\x03#\x03#\x05#\u0126\n#\x03" +
		"#\x03#\x03#\x07#\u012B\n#\f#\x0E#\u012E\v#\x03$\x03$\x06$\u0132\n$\r$" +
		"\x0E$\u0133\x03$\x03$\x03%\x03%\x03\u0133\x02\x02&\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
		"\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11" +
		"!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02" +
		"\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02\x02?\x02" +
		" A\x02\x02C\x02!E\x02\"G\x02#I\x02\x02\x03\x02\x07\x03\x02,,\x05\x02\v" +
		"\f\x0F\x0F\"\"\x03\x022;\x04\x02C\\c|\x03\x02\x01\x01\x02\u013D\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
		"\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
		"\x02?\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03" +
		"\x02\x02\x02\x03K\x03\x02\x02\x02\x05M\x03\x02\x02\x02\x07O\x03\x02\x02" +
		"\x02\tQ\x03\x02\x02\x02\vS\x03\x02\x02\x02\rU\x03\x02\x02\x02\x0FW\x03" +
		"\x02\x02\x02\x11Y\x03\x02\x02\x02\x13[\x03\x02\x02\x02\x15h\x03\x02\x02" +
		"\x02\x17n\x03\x02\x02\x02\x19\x7F\x03\x02\x02\x02\x1B\x91\x03\x02\x02" +
		"\x02\x1D\xA2\x03\x02\x02\x02\x1F\xA8\x03\x02\x02\x02!\xB1\x03\x02\x02" +
		"\x02#\xB8\x03\x02\x02\x02%\xBE\x03\x02\x02\x02\'\xC8\x03\x02\x02\x02)" +
		"\xD1\x03\x02\x02\x02+\xD8\x03\x02\x02\x02-\xE0\x03\x02\x02\x02/\xE5\x03" +
		"\x02\x02\x021\xEE\x03\x02\x02\x023\xF3\x03\x02\x02\x025\xFB\x03\x02\x02" +
		"\x027\u0100\x03\x02\x02\x029\u0103\x03\x02\x02\x02;\u0113\x03\x02\x02" +
		"\x02=\u0118\x03\x02\x02\x02?\u011A\x03\x02\x02\x02A\u011C\x03\x02\x02" +
		"\x02C\u011F\x03\x02\x02\x02E\u0125\x03\x02\x02\x02G\u012F\x03\x02\x02" +
		"\x02I\u0137\x03\x02\x02\x02KL\x070\x02\x02L\x04\x03\x02\x02\x02MN\x07" +
		"<\x02\x02N\x06\x03\x02\x02\x02OP\x07.\x02\x02P\b\x03\x02\x02\x02QR\x07" +
		"-\x02\x02R\n\x03\x02\x02\x02ST\x07/\x02\x02T\f\x03\x02\x02\x02UV\x071" +
		"\x02\x02V\x0E\x03\x02\x02\x02WX\x07,\x02\x02X\x10\x03\x02\x02\x02YZ\x07" +
		"`\x02\x02Z\x12\x03\x02\x02\x02[\\\x07,\x02\x02\\]\x07,\x02\x02]^\x07," +
		"\x02\x02^b\x03\x02\x02\x02_a\n\x02\x02\x02`_\x03\x02\x02\x02ad\x03\x02" +
		"\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02" +
		"\x02\x02ef\b\n\x02\x02f\x14\x03\x02\x02\x02gi\t\x03\x02\x02hg\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\b\v\x02\x02m\x16\x03\x02\x02\x02no\x07V\x02\x02op\x07j\x02" +
		"\x02pq\x07g\x02\x02qr\x07\"\x02\x02rs\x07v\x02\x02st\x07c\x02\x02tu\x07" +
		"n\x02\x02uv\x07g\x02\x02vw\x07\"\x02\x02wx\x07d\x02\x02xy\x07g\x02\x02" +
		"yz\x07i\x02\x02z{\x07k\x02\x02{|\x07p\x02\x02|}\x07u\x02\x02}~\x070\x02" +
		"\x02~\x18\x03\x02\x02\x02\x7F\x80\x07K\x02\x02\x80\x81\x07\"\x02\x02\x81" +
		"\x82\x07u\x02\x02\x82\x83\x07w\x02\x02\x83\x84\x07o\x02\x02\x84\x85\x07" +
		"o\x02\x02\x85\x86\x07q\x02\x02\x86\x87\x07p\x02\x02\x87\x88\x07\"\x02" +
		"\x02\x88\x89\x07v\x02\x02\x89\x8A\x07j\x02\x02\x8A\x8B\x07{\x02\x02\x8B" +
		"\x8C\x07\"\x02\x02\x8C\x8D\x07p\x02\x02\x8D\x8E\x07c\x02\x02\x8E\x8F\x07" +
		"o\x02\x02\x8F\x90\x07g\x02\x02\x90\x1A\x03\x02\x02\x02\x91\x92\x07c\x02" +
		"\x02\x92\x93\x07p\x02\x02\x93\x94\x07f\x02\x02\x94\x95\x07\"\x02\x02\x95" +
		"\x96\x07v\x02\x02\x96\x97\x07j\x02\x02\x97\x98\x07{\x02\x02\x98\x99\x07" +
		"\"\x02\x02\x99\x9A\x07d\x02\x02\x9A\x9B\x07t\x02\x02\x9B\x9C\x07g\x02" +
		"\x02\x9C\x9D\x07v\x02\x02\x9D\x9E\x07j\x02\x02\x9E\x9F\x07t\x02\x02\x9F" +
		"\xA0\x07g\x02\x02\xA0\xA1\x07p\x02\x02\xA1\x1C\x03\x02\x02\x02\xA2\xA3" +
		"\x07e\x02\x02\xA3\xA4\x07t\x02\x02\xA4\xA5\x07c\x02\x02\xA5\xA6\x07h\x02" +
		"\x02\xA6\xA7\x07v\x02\x02\xA7\x1E\x03\x02\x02\x02\xA8\xA9\x07c\x02\x02" +
		"\xA9\xAA\x07t\x02\x02\xAA\xAB\x07v\x02\x02\xAB\xAC\x07k\x02\x02\xAC\xAD" +
		"\x07h\x02\x02\xAD\xAE\x07c\x02\x02\xAE\xAF\x07e\x02\x02\xAF\xB0\x07v\x02" +
		"\x02\xB0 \x03\x02\x02\x02\xB1\xB2\x07d\x02\x02\xB2\xB3\x07g\x02\x02\xB3" +
		"\xB4\x07u\x02\x02\xB4\xB5\x07v\x02\x02\xB5\xB6\x07q\x02\x02\xB6\xB7\x07" +
		"y\x02\x02\xB7\"\x03\x02\x02\x02\xB8\xB9\x07u\x02\x02\xB9\xBA\x07r\x02" +
		"\x02\xBA\xBB\x07g\x02\x02\xBB\xBC\x07n\x02\x02\xBC\xBD\x07n\x02\x02\xBD" +
		"$\x03\x02\x02\x02\xBE\xBF\x07u\x02\x02\xBF\xC0\x07c\x02\x02\xC0\xC1\x07" +
		"e\x02\x02\xC1\xC2\x07t\x02\x02\xC2\xC3\x07k\x02\x02\xC3\xC4\x07h\x02\x02" +
		"\xC4\xC5\x07k\x02\x02\xC5\xC6\x07e\x02\x02\xC6\xC7\x07g\x02\x02\xC7&\x03" +
		"\x02\x02\x02\xC8\xC9\x07v\x02\x02\xC9\xCA\x07g\x02\x02\xCA\xCB\x07t\x02" +
		"\x02\xCB\xCC\x07o\x02\x02\xCC\xCD\x07k\x02\x02\xCD\xCE\x07p\x02\x02\xCE" +
		"\xCF\x07w\x02\x02\xCF\xD0\x07u\x02\x02\xD0(\x03\x02\x02\x02\xD1\xD2\x07" +
		"r\x02\x02\xD2\xD3\x07q\x02\x02\xD3\xD4\x07k\x02\x02\xD4\xD5\x07p\x02\x02" +
		"\xD5\xD6\x07v\x02\x02\xD6\xD7\x07u\x02\x02\xD7*\x03\x02\x02\x02\xD8\xD9" +
		"\x07r\x02\x02\xD9\xDA\x07t\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07e\x02" +
		"\x02\xDC\xDD\x07k\x02\x02\xDD\xDE\x07u\x02\x02\xDE\xDF\x07g\x02\x02\xDF" +
		",\x03\x02\x02\x02\xE0\xE1\x07t\x02\x02\xE1\xE2\x07w\x02\x02\xE2\xE3\x07" +
		"p\x02\x02\xE3\xE4\x07g\x02\x02\xE4.\x03\x02\x02\x02\xE5\xE6\x07c\x02\x02" +
		"\xE6\xE7\x07d\x02\x02\xE7\xE8\x07u\x02\x02\xE8\xE9\x07q\x02\x02\xE9\xEA" +
		"\x07n\x02\x02\xEA\xEB\x07w\x02\x02\xEB\xEC\x07v\x02\x02\xEC\xED\x07g\x02" +
		"\x02\xED0\x03\x02\x02\x02\xEE\xEF\x07v\x02\x02\xEF\xF0\x07q\x02\x02\xF0" +
		"\xF1\x07o\x02\x02\xF1\xF2\x07g\x02\x02\xF22\x03\x02\x02\x02\xF3\xF4\x07" +
		"g\x02\x02\xF4\xF5\x07p\x02\x02\xF5\xF6\x07e\x02\x02\xF6\xF7\x07j\x02\x02" +
		"\xF7\xF8\x07c\x02\x02\xF8\xF9\x07p\x02\x02\xF9\xFA\x07v\x02\x02\xFA4\x03" +
		"\x02\x02\x02\xFB\xFC\x07y\x02\x02\xFC\xFD\x07k\x02\x02\xFD\xFE\x07v\x02" +
		"\x02\xFE\xFF\x07j\x02\x02\xFF6\x03\x02\x02\x02\u0100\u0101\x07q\x02\x02" +
		"\u0101\u0102\x07h\x02\x02\u01028\x03\x02\x02\x02\u0103\u0104\x07N\x02" +
		"\x02\u0104\u0105\x07g\x02\x02\u0105\u0106\x07i\x02\x02\u0106\u0107\x07" +
		"g\x02\x02\u0107\u0108\x07p\x02\x02\u0108\u0109\x07f\x02\x02\u0109\u010A" +
		"\x07\"\x02\x02\u010A\u010B\x07v\x02\x02\u010B\u010C\x07g\x02\x02\u010C" +
		"\u010D\x07n\x02\x02\u010D\u010E\x07n\x02\x02\u010E\u010F\x07u\x02\x02" +
		"\u010F\u0110\x07\"\x02\x02\u0110\u0111\x07q\x02\x02\u0111\u0112\x07h\x02" +
		"\x02\u0112:\x03\x02\x02\x02\u0113\u0114\x07e\x02\x02\u0114\u0115\x07c" +
		"\x02\x02\u0115\u0116\x07u\x02\x02\u0116\u0117\x07v\x02\x02\u0117<\x03" +
		"\x02\x02\x02\u0118\u0119\t\x04\x02\x02\u0119>\x03\x02\x02\x02\u011A\u011B" +
		"\t\x05\x02\x02\u011B@\x03\x02\x02\x02\u011C\u011D\x07$\x02\x02\u011DB" +
		"\x03\x02\x02\x02\u011E\u0120\x05=\x1F\x02\u011F\u011E\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03" +
		"\x02\x02\x02\u0122D\x03\x02\x02\x02\u0123\u0126\x05? \x02\u0124\u0126" +
		"\x07a\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02" +
		"\u0126\u012C\x03\x02\x02\x02\u0127\u012B\x05? \x02\u0128\u012B\x07a\x02" +
		"\x02\u0129\u012B\x05=\x1F\x02\u012A\u0127\x03\x02\x02\x02\u012A\u0128" +
		"\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02" +
		"\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012DF\x03\x02" +
		"\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0131\x05A!\x02\u0130\u0132" +
		"\v\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02" +
		"\u0133\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\x03" +
		"\x02\x02\x02\u0135\u0136\x05A!\x02\u0136H\x03\x02\x02\x02\u0137\u0138" +
		"\n\x06\x02\x02\u0138J\x03\x02\x02\x02\n\x02bj\u0121\u0125\u012A\u012C" +
		"\u0133\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!spelLexer.__ATN) {
			spelLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(spelLexer._serializedATN));
		}

		return spelLexer.__ATN;
	}

}

