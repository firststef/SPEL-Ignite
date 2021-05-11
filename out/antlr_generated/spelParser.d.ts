import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { spelListener } from "./spelListener";
import { spelVisitor } from "./spelVisitor";
export declare class spelParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly COMMENT = 9;
    static readonly WHITESPACE = 10;
    static readonly BGND = 11;
    static readonly BGNP = 12;
    static readonly BGNC = 13;
    static readonly ENC = 14;
    static readonly IMP = 15;
    static readonly CRAFT = 16;
    static readonly ARTIFACT = 17;
    static readonly BESTOW = 18;
    static readonly SPELL = 19;
    static readonly SACRIFICE = 20;
    static readonly TERMINUS = 21;
    static readonly POINTS = 22;
    static readonly PRECISE = 23;
    static readonly RUNE = 24;
    static readonly ABSOLUTE = 25;
    static readonly TOME = 26;
    static readonly ENCHANT = 27;
    static readonly WITH = 28;
    static readonly OF = 29;
    static readonly CAST = 30;
    static readonly TRANSMUTE = 31;
    static readonly BECOMES = 32;
    static readonly DOT = 33;
    static readonly WHILE = 34;
    static readonly COLON = 35;
    static readonly THROW = 36;
    static readonly CHARGE = 37;
    static readonly MANA = 38;
    static readonly CREATE = 39;
    static readonly IN = 40;
    static readonly SAY = 41;
    static readonly CHANT = 42;
    static readonly NUMBER = 43;
    static readonly IDENTIFIER = 44;
    static readonly STRING = 45;
    static readonly RULE_document = 0;
    static readonly RULE_headless_document = 1;
    static readonly RULE_block = 2;
    static readonly RULE_block_item = 3;
    static readonly RULE_statement = 4;
    static readonly RULE_import_statement = 5;
    static readonly RULE_none_statement = 6;
    static readonly RULE_while_statement = 7;
    static readonly RULE_print_statement = 8;
    static readonly RULE_list_of_statements = 9;
    static readonly RULE_declaration = 10;
    static readonly RULE_list_of_declarations = 11;
    static readonly RULE_variable_declaration = 12;
    static readonly RULE_function_definition = 13;
    static readonly RULE_class_definition = 14;
    static readonly RULE_assignment = 15;
    static readonly RULE_call = 16;
    static readonly RULE_throw_statement = 17;
    static readonly RULE_charge_statement = 18;
    static readonly RULE_create_statement = 19;
    static readonly RULE_holder = 20;
    static readonly RULE_any_statement = 21;
    static readonly RULE_list_typed_identifiers = 22;
    static readonly RULE_modification = 23;
    static readonly RULE_expression = 24;
    static readonly RULE_list_expressions = 25;
    static readonly RULE_basic_type_expression = 26;
    static readonly RULE_minus_expression = 27;
    static readonly RULE_paren_expression = 28;
    static readonly RULE_field_expression = 29;
    static readonly RULE_named_expression = 30;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    constructor(input: TokenStream);
    document(): DocumentContext;
    headless_document(): Headless_documentContext;
    block(): BlockContext;
    block_item(): Block_itemContext;
    statement(): StatementContext;
    import_statement(): Import_statementContext;
    none_statement(): None_statementContext;
    while_statement(): While_statementContext;
    print_statement(): Print_statementContext;
    list_of_statements(): List_of_statementsContext;
    declaration(): DeclarationContext;
    list_of_declarations(): List_of_declarationsContext;
    variable_declaration(): Variable_declarationContext;
    function_definition(): Function_definitionContext;
    class_definition(): Class_definitionContext;
    assignment(): AssignmentContext;
    call(): CallContext;
    throw_statement(): Throw_statementContext;
    charge_statement(): Charge_statementContext;
    create_statement(): Create_statementContext;
    holder(): HolderContext;
    any_statement(): Any_statementContext;
    list_typed_identifiers(): List_typed_identifiersContext;
    modification(): ModificationContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    list_expressions(): List_expressionsContext;
    basic_type_expression(): Basic_type_expressionContext;
    minus_expression(): Minus_expressionContext;
    paren_expression(): Paren_expressionContext;
    field_expression(): Field_expressionContext;
    named_expression(): Named_expressionContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class DocumentContext extends ParserRuleContext {
    _declr_block: BlockContext;
    _program: BlockContext;
    BGNP(): TerminalNode;
    BGND(): TerminalNode | undefined;
    block(): BlockContext[];
    block(i: number): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Headless_documentContext extends ParserRuleContext {
    block(): BlockContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    _items: Block_itemContext;
    block_item(): Block_itemContext[];
    block_item(i: number): Block_itemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Block_itemContext extends ParserRuleContext {
    statement(): StatementContext | undefined;
    declaration(): DeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    assignment(): AssignmentContext | undefined;
    call(): CallContext | undefined;
    import_statement(): Import_statementContext | undefined;
    while_statement(): While_statementContext | undefined;
    print_statement(): Print_statementContext | undefined;
    throw_statement(): Throw_statementContext | undefined;
    charge_statement(): Charge_statementContext | undefined;
    create_statement(): Create_statementContext | undefined;
    none_statement(): None_statementContext | undefined;
    any_statement(): Any_statementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Import_statementContext extends ParserRuleContext {
    _name: Token;
    IMP(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class None_statementContext extends ParserRuleContext {
    DOT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class While_statementContext extends ParserRuleContext {
    _expr: ExpressionContext;
    _stmts: List_of_statementsContext;
    WHILE(): TerminalNode;
    COLON(): TerminalNode;
    TERMINUS(): TerminalNode;
    expression(): ExpressionContext;
    list_of_statements(): List_of_statementsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Print_statementContext extends ParserRuleContext {
    _tone: Token;
    _msg: Token;
    DOT(): TerminalNode;
    STRING(): TerminalNode;
    SAY(): TerminalNode | undefined;
    CHANT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class List_of_statementsContext extends ParserRuleContext {
    _next: List_of_statementsContext;
    statement(): StatementContext;
    list_of_statements(): List_of_statementsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class DeclarationContext extends ParserRuleContext {
    variable_declaration(): Variable_declarationContext | undefined;
    class_definition(): Class_definitionContext | undefined;
    function_definition(): Function_definitionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class List_of_declarationsContext extends ParserRuleContext {
    _next: List_of_declarationsContext;
    declaration(): DeclarationContext;
    list_of_declarations(): List_of_declarationsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Variable_declarationContext extends ParserRuleContext {
    _arg_type: Token;
    _name: Token;
    _value: ExpressionContext;
    CRAFT(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    ARTIFACT(): TerminalNode | undefined;
    BESTOW(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Function_definitionContext extends ParserRuleContext {
    _func_type: Token;
    _name: Token;
    _params: List_typed_identifiersContext;
    _statements: List_of_statementsContext;
    SPELL(): TerminalNode;
    SACRIFICE(): TerminalNode;
    COLON(): TerminalNode;
    TERMINUS(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    list_typed_identifiers(): List_typed_identifiersContext;
    list_of_statements(): List_of_statementsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Class_definitionContext extends ParserRuleContext {
    _name: Token;
    _declarations: List_of_declarationsContext;
    BGNC(): TerminalNode;
    ENC(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    list_of_declarations(): List_of_declarationsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    _expr: ExpressionContext;
    _value: ExpressionContext;
    BECOMES(): TerminalNode;
    DOT(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class CallContext extends ParserRuleContext {
    _expr: ExpressionContext;
    _params: List_expressionsContext;
    CAST(): TerminalNode;
    expression(): ExpressionContext;
    SACRIFICE(): TerminalNode | undefined;
    DOT(): TerminalNode | undefined;
    list_expressions(): List_expressionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Throw_statementContext extends ParserRuleContext {
    _object: Token;
    THROW(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Charge_statementContext extends ParserRuleContext {
    _el: Token;
    CHARGE(): TerminalNode;
    MANA(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Create_statementContext extends ParserRuleContext {
    _object: Token;
    _where: HolderContext;
    CREATE(): TerminalNode;
    IN(): TerminalNode;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    holder(): HolderContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class HolderContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Any_statementContext extends ParserRuleContext {
    _words: Token;
    DOT(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class List_typed_identifiersContext extends ParserRuleContext {
    _type: Token;
    _name: Token;
    _next: List_typed_identifiersContext;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    list_typed_identifiers(): List_typed_identifiersContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class ModificationContext extends ParserRuleContext {
    _expr: ExpressionContext;
    _value: ExpressionContext;
    ENCHANT(): TerminalNode;
    WITH(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    _lexpr: ExpressionContext;
    _basic_type_t: Basic_type_expressionContext;
    _named_expression_t: Named_expressionContext;
    _minus_expression_t: Minus_expressionContext;
    _paren_expression_t: Paren_expressionContext;
    _field_expression_t: Field_expressionContext;
    _modifaction_expression_t: ModificationContext;
    _call_expression_t: CallContext;
    _sign: Token;
    _rexpr: ExpressionContext;
    basic_type_expression(): Basic_type_expressionContext | undefined;
    named_expression(): Named_expressionContext | undefined;
    minus_expression(): Minus_expressionContext | undefined;
    paren_expression(): Paren_expressionContext | undefined;
    field_expression(): Field_expressionContext | undefined;
    modification(): ModificationContext | undefined;
    call(): CallContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class List_expressionsContext extends ParserRuleContext {
    _next: List_expressionsContext;
    expression(): ExpressionContext;
    list_expressions(): List_expressionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Basic_type_expressionContext extends ParserRuleContext {
    _number_type: Token;
    _string_type: Token;
    NUMBER(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Minus_expressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Paren_expressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Field_expressionContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    OF(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Named_expressionContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
