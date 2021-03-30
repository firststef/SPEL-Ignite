grammar spel;

/* Lexer rules */

COMMENT: '***' (~'*')* -> channel(HIDDEN);
WHITESPACE: [ \n\t\r]+ -> channel(1);

BGND: 'In the beginning...';
BGNP: 'The tale begins.';
BGNC: 'I summon thy name';
ENC: 'and thy brethren.';
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
TRANSMUTE: 'transmute';
BECOMES: 'becomes';
DOT: '.';

fragment DIGIT: [0-9];
fragment CHARACTER: [a-zA-Z];
fragment COMMA: '"';

NUMBER: DIGIT+;
IDENTIFIER: (CHARACTER | '_') (CHARACTER | '_' | DIGIT)*;
STRING: COMMA .+? COMMA;

fragment STRING_CHAR: ~'\uFFFF';

/* Parser rules */

document
    : (BGND declr_block = block)? BGNP (program = block)?
    ;

headless_document
    : block
    ;

block
    :   current = block next = block_item
    |   sole = block_item
    ;

block_item
    : statement
    | declaration
    ;

statement
    : assignment
    | call
    | import_statement
    | none_statement
    ;

import_statement
    : IMP name = IDENTIFIER '.'
    ;

none_statement
    : '.'
    ;

list_of_statements
    : statement next = list_of_statements
    | statement
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
    : CRAFT ARTIFACT? arg_type = IDENTIFIER name = IDENTIFIER (BESTOW value = expression)? DOT
    ;

function_definition
    : func_type = IDENTIFIER SPELL name = IDENTIFIER SACRIFICE params = list_typed_identifiers ':' statements = list_of_statements TERMINUS
    ;

class_definition
    : BGNC name = IDENTIFIER 
        declarations = list_of_declarations 
        ENC '.'
    ;

assignment
    : expr = expression BECOMES value = expression DOT
    ;

call
    : CAST expr = expression (SACRIFICE params = list_expressions) ? DOT ?
    ;

list_typed_identifiers
    : type = IDENTIFIER name = IDENTIFIER ',' next = list_typed_identifiers
    | type = IDENTIFIER name = IDENTIFIER
    ;

modification
    : ENCHANT expr = expression WITH value = expression DOT ?
    ;

expression
    : basic_type_t = basic_type_expression
    | named_expression_t = named_expression
    | minus_expression_t = minus_expression
    | paren_expression_t = paren_expression
    | field_expression_t = field_expression
    | modifaction_expression_t = modification
    | call_expression_t = call
    | lexpr = expression sign = '+' rexpr = expression
    | lexpr = expression sign = '-' rexpr = expression
    | lexpr = expression sign = '/' rexpr = expression
    | lexpr = expression sign = '*' rexpr = expression
    | lexpr = expression sign = '^' rexpr = expression
    ;

list_expressions
    : expression ',' next = list_expressions
    | expression
    ;

basic_type_expression
    : number_type = NUMBER 
    | string_type = STRING
    ;

minus_expression
    : '-' expression
    ;

paren_expression
    : '(' expression ')'
    ;

field_expression
    : IDENTIFIER 'of' expression
    ;

named_expression
    : IDENTIFIER
    ;