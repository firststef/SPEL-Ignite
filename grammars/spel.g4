grammar spel;

/* Lexer rules */

COMMENT: '***' (~'*')* -> channel(HIDDEN);
WHITESPACE: [ \n\t\r]+ -> channel(1);

BGNP: 'The tale begins.';
BGNC: 'I summon thy name';
ENC: 'and thy brethren';
IMP: 'Legend tells of';

CRAFT: 'craft';
ARTIFACT: 'artifact';
BESTOW: 'bestow';
SPELL: 'spell';
SACRIFICE: 'sacrifice';
TERMINUS: 'terminus';
POINTS: 'points';
PRECISE: 'precise';
RUNE: 'rune';
ABSOLUTE: 'absolute';
TOME: 'tome';
ENCHANT: 'enchant';
WITH: 'with';
OF: 'of';
CAST: 'cast';

fragment DIGIT: [0-9];
CHARACTER: [a-zA-Z];
fragment COMMA: '"';

NUMBER: DIGIT+;
IDENTIFIER: (CHARACTER | '_') (CHARACTER | '_' | DIGIT)*;
STRING: COMMA .+? COMMA;

//...

fragment STRING_CHAR: ~'\uFFFF'; // EFECTIV ULTIMUL DIN LEXER

/* Parser rules */

document
    : BGNP block
    // | BGNP 
    ;

headless_document
    : block
    ;

block
    :   block_item
    |   block next = block_item
    ;

block_item
    : statement
    | declaration
    ;

statement
    : assignment
    | call
    | IMP name = IDENTIFIER '.'
    ;

list_of_statements
    : statement
    | statement next = list_of_statements
    ;

declaration
    : variable_declaration
    | class_definition
    | function_definition
    ;

list_of_declarations
    : declaration
    | declaration next = list_of_declarations
    ;

variable_declaration
    : CRAFT ARTIFACT? arg_type = type name = IDENTIFIER BESTOW value = expression '.'
    ;

function_definition
    : func_type = type SPELL name = IDENTIFIER SACRIFICE params = list_typed_identifiers ':' statements = list_of_statements TERMINUS
    ;

class_definition
    : BGNC name = IDENTIFIER statements = list_of_declarations ENC '.'
    ;

assignment
    : ENCHANT id = IDENTIFIER WITH value = expression '.'
    | ENCHANT name = IDENTIFIER OF owner = IDENTIFIER WITH value = expression '.'
    ;

call
    : CAST IDENTIFIER SACRIFICE params = list_expressions '.'
    | CAST name = IDENTIFIER OF owner = IDENTIFIER SACRIFICE params = list_expressions '.'
    ;

type
    : POINTS
    | PRECISE
    | RUNE
    | ABSOLUTE
    | TOME
    | IDENTIFIER
    ;

list_typed_identifiers
    : type IDENTIFIER
    | type IDENTIFIER ',' next = list_typed_identifiers
    ;

expression
    : number_type = NUMBER 
    | string_type = STRING
    | minus_expression_type = minus_expression
    | expression plus = '+' expression
    | expression plus = '-' expression
    | expression plus = '/' expression
    | expression plus = '*' expression
    | expression plus = '^' expression
    ;

list_expressions
    : expression
    | expression ',' next = list_expressions
    ;

minus_expression
    : '-' expression
    ;