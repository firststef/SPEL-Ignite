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
    static readonly T__8 = 9;
    static readonly COMMENT = 10;
    static readonly WHITESPACE = 11;
    static readonly BGND = 12;
    static readonly BGNP = 13;
    static readonly BGNC = 14;
    static readonly ENC = 15;
    static readonly IMP = 16;
    static readonly CRAFT = 17;
    static readonly ARTIFACT = 18;
    static readonly BESTOW = 19;
    static readonly SPELL = 20;
    static readonly SACRIFICE = 21;
    static readonly TERMINUS = 22;
    static readonly POINTS = 23;
    static readonly PRECISE = 24;
    static readonly RUNE = 25;
    static readonly ABSOLUTE = 26;
    static readonly TOME = 27;
    static readonly ENCHANT = 28;
    static readonly WITH = 29;
    static readonly OF = 30;
    static readonly CAST = 31;
    static readonly TRANSMUTE = 32;
    static readonly BECOMES = 33;
    static readonly DOT = 34;
    static readonly NUMBER = 35;
    static readonly IDENTIFIER = 36;
    static readonly STRING = 37;
    static readonly RULE_document = 0;
    static readonly RULE_headless_document = 1;
    static readonly RULE_block = 2;
    static readonly RULE_block_item = 3;
    static readonly RULE_statement = 4;
    static readonly RULE_import_statement = 5;
    static readonly RULE_none_statement = 6;
    static readonly RULE_list_of_statements = 7;
    static readonly RULE_declaration = 8;
    static readonly RULE_list_of_declarations = 9;
    static readonly RULE_variable_declaration = 10;
    static readonly RULE_function_definition = 11;
    static readonly RULE_class_definition = 12;
    static readonly RULE_assignment = 13;
    static readonly RULE_call = 14;
    static readonly RULE_list_typed_identifiers = 15;
    static readonly RULE_modification = 16;
    static readonly RULE_expression = 17;
    static readonly RULE_list_expressions = 18;
    static readonly RULE_basic_type_expression = 19;
    static readonly RULE_minus_expression = 20;
    static readonly RULE_paren_expression = 21;
    static readonly RULE_field_expression = 22;
    static readonly RULE_named_expression = 23;
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
    block(_p: number): BlockContext;
    block_item(): Block_itemContext;
    statement(): StatementContext;
    import_statement(): Import_statementContext;
    none_statement(): None_statementContext;
    list_of_statements(): List_of_statementsContext;
    declaration(): DeclarationContext;
    list_of_declarations(): List_of_declarationsContext;
    variable_declaration(): Variable_declarationContext;
    function_definition(): Function_definitionContext;
    class_definition(): Class_definitionContext;
    assignment(): AssignmentContext;
    call(): CallContext;
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
    private block_sempred;
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
    _current: BlockContext;
    _sole: Block_itemContext;
    _next: Block_itemContext;
    block(): BlockContext | undefined;
    block_item(): Block_itemContext;
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
    none_statement(): None_statementContext | undefined;
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
