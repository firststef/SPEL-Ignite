import {
    createToken,
    Lexer
} from 'chevrotain';

// todo: comment
const WHITESPACE = createToken({
    name: "WhiteSpace",
    pattern: /\s+/,
    group: Lexer.SKIPPED
});
const IDENTIFIER = createToken({
    name: "IDENTIFIER",
    pattern: /[a-zA-z]\w+/
});

const BGNP = createToken({
    name: "BGNP",
    pattern: /The tale begins./
});
const BGNC = createToken({
    name: "BGNC",
    pattern: /I summon thy name/
});
const ENC = createToken({
    name: "ENC",
    pattern: /and thy brethren/
});
const CRAFT = createToken({
    name: "CRAFT",
    pattern: /craft/,
    longer_alt: IDENTIFIER
});
const ARTIFACT = createToken({
    name: "ARTIFACT",
    pattern: /artifact/,
    longer_alt: IDENTIFIER
});
const BESTOW = createToken({
    name: "BESTOW",
    pattern: /bestow/,
    longer_alt: IDENTIFIER
});
const SPELL = createToken({
    name: "SPELL",
    pattern: /spell/,
    longer_alt: IDENTIFIER
});
const SACRIFICE = createToken({
    name: "SACRIFICE",
    pattern: /sacrifice/,
    longer_alt: IDENTIFIER
});
const TERMINUS = createToken({
    name: "TERMINUS",
    pattern: /terminus/,
    longer_alt: IDENTIFIER
});
const POINTS = createToken({
    name: "POINTS",
    pattern: /points/,
    longer_alt: IDENTIFIER
});
const PRECISE = createToken({
    name: "PRECISE",
    pattern: /precise/,
    longer_alt: IDENTIFIER
});
const RUNE = createToken({
    name: "RUNE",
    pattern: /rune/,
    longer_alt: IDENTIFIER
});
const ABSOLUTE = createToken({
    name: "ABSOLUTE",
    pattern: /absolute/,
    longer_alt: IDENTIFIER
});
const TOME = createToken({
    name: "TOME",
    pattern: /tome/,
    longer_alt: IDENTIFIER
});
const ENCHANT = createToken({
    name: "ENCHANT",
    pattern: /enchant/,
    longer_alt: IDENTIFIER
});
const WITH = createToken({
    name: "WITH",
    pattern: /with/,
    longer_alt: IDENTIFIER
});
const OF = createToken({
    name: "OF",
    pattern: /of/,
    longer_alt: IDENTIFIER
});
const IMP = createToken({
    name: "IMP",
    pattern: /Legend tells of/
});
const CAST = createToken({
    name: "CAST",
    pattern: /cast/,
    longer_alt: IDENTIFIER
});

const CHARACTER = createToken({
    name: "CHARACTER",
    pattern: /'[a-zA-Z]'/
});

const NUMBER = createToken({
    name: "NUMBER",
    pattern: /[0-9]+/
});

const STRING = createToken({
    name: "STRING",
    pattern: /\".*?\"/
});

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
let SpelLexer = new Lexer(allTokens);
export {
    SpelLexer,
    allTokens,
    
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
};