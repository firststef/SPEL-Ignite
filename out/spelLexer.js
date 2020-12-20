"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDENTIFIER = exports.CHARACTER = exports.NUMBER = exports.STRING = exports.CAST = exports.IMP = exports.OF = exports.WITH = exports.ENCHANT = exports.TOME = exports.ABSOLUTE = exports.RUNE = exports.PRECISE = exports.POINTS = exports.TERMINUS = exports.SACRIFICE = exports.SPELL = exports.BESTOW = exports.ARTIFACT = exports.CRAFT = exports.ENC = exports.BGNC = exports.BGNP = exports.WHITESPACE = exports.allTokens = exports.SpelLexer = void 0;
const chevrotain_1 = require("chevrotain");
// todo: comment
const WHITESPACE = chevrotain_1.createToken({
    name: "WhiteSpace",
    pattern: /\s+/,
    group: chevrotain_1.Lexer.SKIPPED
});
exports.WHITESPACE = WHITESPACE;
const IDENTIFIER = chevrotain_1.createToken({
    name: "IDENTIFIER",
    pattern: /[a-zA-z]\w+/
});
exports.IDENTIFIER = IDENTIFIER;
const BGNP = chevrotain_1.createToken({
    name: "BGNP",
    pattern: /The tale begins./
});
exports.BGNP = BGNP;
const BGNC = chevrotain_1.createToken({
    name: "BGNC",
    pattern: /I summon thy name/
});
exports.BGNC = BGNC;
const ENC = chevrotain_1.createToken({
    name: "ENC",
    pattern: /and thy brethren/
});
exports.ENC = ENC;
const CRAFT = chevrotain_1.createToken({
    name: "CRAFT",
    pattern: /craft/,
    longer_alt: IDENTIFIER
});
exports.CRAFT = CRAFT;
const ARTIFACT = chevrotain_1.createToken({
    name: "ARTIFACT",
    pattern: /artifact/,
    longer_alt: IDENTIFIER
});
exports.ARTIFACT = ARTIFACT;
const BESTOW = chevrotain_1.createToken({
    name: "BESTOW",
    pattern: /bestow/,
    longer_alt: IDENTIFIER
});
exports.BESTOW = BESTOW;
const SPELL = chevrotain_1.createToken({
    name: "SPELL",
    pattern: /spell/,
    longer_alt: IDENTIFIER
});
exports.SPELL = SPELL;
const SACRIFICE = chevrotain_1.createToken({
    name: "SACRIFICE",
    pattern: /sacrifice/,
    longer_alt: IDENTIFIER
});
exports.SACRIFICE = SACRIFICE;
const TERMINUS = chevrotain_1.createToken({
    name: "TERMINUS",
    pattern: /terminus/,
    longer_alt: IDENTIFIER
});
exports.TERMINUS = TERMINUS;
const POINTS = chevrotain_1.createToken({
    name: "POINTS",
    pattern: /points/,
    longer_alt: IDENTIFIER
});
exports.POINTS = POINTS;
const PRECISE = chevrotain_1.createToken({
    name: "PRECISE",
    pattern: /precise/,
    longer_alt: IDENTIFIER
});
exports.PRECISE = PRECISE;
const RUNE = chevrotain_1.createToken({
    name: "RUNE",
    pattern: /rune/,
    longer_alt: IDENTIFIER
});
exports.RUNE = RUNE;
const ABSOLUTE = chevrotain_1.createToken({
    name: "ABSOLUTE",
    pattern: /absolute/,
    longer_alt: IDENTIFIER
});
exports.ABSOLUTE = ABSOLUTE;
const TOME = chevrotain_1.createToken({
    name: "TOME",
    pattern: /tome/,
    longer_alt: IDENTIFIER
});
exports.TOME = TOME;
const ENCHANT = chevrotain_1.createToken({
    name: "ENCHANT",
    pattern: /enchant/,
    longer_alt: IDENTIFIER
});
exports.ENCHANT = ENCHANT;
const WITH = chevrotain_1.createToken({
    name: "WITH",
    pattern: /with/,
    longer_alt: IDENTIFIER
});
exports.WITH = WITH;
const OF = chevrotain_1.createToken({
    name: "OF",
    pattern: /of/,
    longer_alt: IDENTIFIER
});
exports.OF = OF;
const IMP = chevrotain_1.createToken({
    name: "IMP",
    pattern: /Legend tells of/
});
exports.IMP = IMP;
const CAST = chevrotain_1.createToken({
    name: "CAST",
    pattern: /cast/,
    longer_alt: IDENTIFIER
});
exports.CAST = CAST;
const CHARACTER = chevrotain_1.createToken({
    name: "CHARACTER",
    pattern: /'[a-zA-Z]'/
});
exports.CHARACTER = CHARACTER;
const NUMBER = chevrotain_1.createToken({
    name: "NUMBER",
    pattern: /[0-9]+/
});
exports.NUMBER = NUMBER;
const STRING = chevrotain_1.createToken({
    name: "STRING",
    pattern: /\".*?\"/
});
exports.STRING = STRING;
const allTokens = [
    WHITESPACE,
    BGNP,
    BGNC,
    ENC,
    CRAFT,
    ARTIFACT,
    BESTOW,
    SPELL,
    SACRIFICE,
    TERMINUS,
    POINTS,
    PRECISE,
    RUNE,
    ABSOLUTE,
    TOME,
    ENCHANT,
    WITH,
    OF,
    IMP,
    CAST,
    STRING,
    NUMBER,
    CHARACTER,
    IDENTIFIER
];
exports.allTokens = allTokens;
let SpelLexer = new chevrotain_1.Lexer(allTokens);
exports.SpelLexer = SpelLexer;
//# sourceMappingURL=spelLexer.js.map