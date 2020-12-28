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
    static readonly BGNP = 11;
    static readonly BGNC = 12;
    static readonly ENC = 13;
    static readonly CRAFT = 14;
    static readonly ARTIFACT = 15;
    static readonly BESTOW = 16;
    static readonly SPELL = 17;
    static readonly SACRIFICE = 18;
    static readonly TERMINUS = 19;
    static readonly POINTS = 20;
    static readonly PRECISE = 21;
    static readonly RUNE = 22;
    static readonly ABSOLUTE = 23;
    static readonly TOME = 24;
    static readonly ENCHANT = 25;
    static readonly WITH = 26;
    static readonly OF = 27;
    static readonly IMP = 28;
    static readonly CAST = 29;
    static readonly CHARACTER = 30;
    static readonly NUMBER = 31;
    static readonly IDENTIFIER = 32;
    static readonly STRING = 33;
    static readonly RULE_document = 0;
    static readonly RULE_headless_document = 1;
    static readonly RULE_block = 2;
    static readonly RULE_block_item = 3;
    static readonly RULE_statement = 4;
    static readonly RULE_list_of_statements = 5;
    static readonly RULE_declaration = 6;
    static readonly RULE_list_of_declarations = 7;
    static readonly RULE_variable_declaration = 8;
    static readonly RULE_function_definition = 9;
    static readonly RULE_class_definition = 10;
    static readonly RULE_assignment = 11;
    static readonly RULE_call = 12;
    static readonly RULE_type = 13;
    static readonly RULE_list_typed_identifiers = 14;
    static readonly RULE_expression = 15;
    static readonly RULE_list_expressions = 16;
    static readonly RULE_minus_expression = 17;
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
    list_of_statements(): List_of_statementsContext;
    declaration(): DeclarationContext;
    list_of_declarations(): List_of_declarationsContext;
    variable_declaration(): Variable_declarationContext;
    function_definition(): Function_definitionContext;
    class_definition(): Class_definitionContext;
    assignment(): AssignmentContext;
    call(): CallContext;
    type(): TypeContext;
    list_typed_identifiers(): List_typed_identifiersContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    list_expressions(): List_expressionsContext;
    minus_expression(): Minus_expressionContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private block_sempred;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class DocumentContext extends ParserRuleContext {
    BGNP(): TerminalNode;
    block(): BlockContext;
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
    _next: Block_itemContext;
    block_item(): Block_itemContext;
    block(): BlockContext | undefined;
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
    _name: Token;
    assignment(): AssignmentContext | undefined;
    call(): CallContext | undefined;
    IMP(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
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
    _arg_type: TypeContext;
    _name: Token;
    _value: ExpressionContext;
    CRAFT(): TerminalNode;
    BESTOW(): TerminalNode;
    type(): TypeContext;
    IDENTIFIER(): TerminalNode;
    expression(): ExpressionContext;
    ARTIFACT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class Function_definitionContext extends ParserRuleContext {
    _func_type: TypeContext;
    _name: Token;
    _params: List_typed_identifiersContext;
    _statements: List_of_statementsContext;
    SPELL(): TerminalNode;
    SACRIFICE(): TerminalNode;
    TERMINUS(): TerminalNode;
    type(): TypeContext;
    IDENTIFIER(): TerminalNode;
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
    _statements: List_of_declarationsContext;
    BGNC(): TerminalNode;
    ENC(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    list_of_declarations(): List_of_declarationsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    _id: Token;
    _value: ExpressionContext;
    _name: Token;
    _owner: Token;
    ENCHANT(): TerminalNode;
    WITH(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    expression(): ExpressionContext;
    OF(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class CallContext extends ParserRuleContext {
    _params: List_expressionsContext;
    _name: Token;
    _owner: Token;
    CAST(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    SACRIFICE(): TerminalNode;
    list_expressions(): List_expressionsContext;
    OF(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class TypeContext extends ParserRuleContext {
    POINTS(): TerminalNode | undefined;
    PRECISE(): TerminalNode | undefined;
    RUNE(): TerminalNode | undefined;
    ABSOLUTE(): TerminalNode | undefined;
    TOME(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class List_typed_identifiersContext extends ParserRuleContext {
    _next: List_typed_identifiersContext;
    type(): TypeContext;
    IDENTIFIER(): TerminalNode;
    list_typed_identifiers(): List_typed_identifiersContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    _number_type: Token;
    _string_type: Token;
    _minus_expression_type: Minus_expressionContext;
    _plus: Token;
    NUMBER(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    minus_expression(): Minus_expressionContext | undefined;
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
export declare class Minus_expressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: spelListener): void;
    exitRule(listener: spelListener): void;
    accept<Result>(visitor: spelVisitor<Result>): Result;
}
