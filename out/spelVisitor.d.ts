import { spelVisitor } from './antlr_generated/spelVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentContext, Basic_type_expressionContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Field_expressionContext, Function_definitionContext, Headless_documentContext, Import_statementContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, ModificationContext, Named_expressionContext, None_statementContext, Paren_expressionContext, StatementContext, Variable_declarationContext, While_statementContext, Any_statementContext, Throw_statementContext, Charge_statementContext, Create_statementContext, Print_statementContext } from './antlr_generated/spelParser';
import { ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
declare class SourceRange {
    start: number;
    size: number;
    constructor(start: number, size: number);
}
declare class SpelError {
    range: SourceRange;
    message: string;
    constructor(range: SourceRange, msg: string);
}
declare type SpelASTNode = any;
declare class TypedId {
    name: string;
    typeName: string;
    type: string;
    constructor(name: string, typeName: string);
    toString: () => string;
}
interface Expression {
}
declare class BasicTypeExpression implements Expression {
    value: any;
    typeName: string;
    type: string;
    constructor(value: any, typeName: string);
    toString: () => string;
}
declare class MinusExpression implements Expression {
    value: Expression;
    type: string;
    constructor(value: Expression);
    toString: () => string;
}
declare class ParenExpression implements Expression {
    expr: Expression;
    type: string;
    constructor(expr: Expression);
    toString: () => string;
}
declare class FieldExpression implements Expression {
    field: string;
    expr: Expression;
    type: string;
    constructor(field: string, expr: Expression);
    toString: () => string;
}
declare class NamedExpression implements Expression {
    name: string;
    type: string;
    constructor(name: string);
    toString: () => string;
}
interface Statement {
}
declare class Call implements Statement, Expression {
    expr: Expression;
    params: Expression[];
    type: string;
    constructor(expr: Expression, params: Expression[]);
    toString: () => string;
}
declare class Assignment implements Statement {
    expr: Expression;
    value: Expression;
    type: string;
    constructor(expr: Expression, value: Expression);
    toString: () => string;
}
declare class Modification implements Statement {
    expr: Expression;
    value: Expression;
    type: string;
    constructor(expr: Expression, value: Expression);
    toString: () => string;
}
declare class Import implements Statement {
    file: string;
    type: string;
    constructor(file: string);
    toString: () => string;
}
declare class NoneStatement implements Statement {
    type: string;
    constructor();
    toString: () => string;
}
declare class WhileStatement implements Statement {
    expr: Expression;
    stmts: Statement[];
    type: string;
    constructor(expr: Expression, stmts: Statement[]);
    toString: () => string;
}
declare class AnyStatement implements Statement {
    value: string;
    type: string;
    constructor(value: string);
    toString: () => string;
}
declare class ThrowStatement implements Statement {
    object: string;
    type: string;
    constructor(object: string);
    toString: () => string;
}
declare class ChargeStatement implements Statement {
    element: string;
    type: string;
    constructor(element: string);
    toString: () => string;
}
declare class CreateStatement implements Statement {
    object: string;
    holder: string;
    type: string;
    constructor(object: string, holder: string);
    toString: () => string;
}
declare class PrintStatement implements Statement {
    message: string;
    tone: string;
    type: string;
    constructor(message: string, tone: string);
    toString: () => string;
}
declare class ClassDefinition implements Declaration {
    name: string;
    declarations: Declaration[];
    type: string;
    constructor(name: string, declarations: Declaration[]);
    toString: () => string;
}
declare class FunctionDefinition implements Declaration {
    name: string;
    params: TypedId[];
    statements: Statement[];
    type: string;
    constructor(name: string, params: TypedId[], statements: Statement[]);
    toString: () => string;
}
declare class VariableDeclaration implements Declaration {
    name: string;
    typeName: string;
    isConst: boolean;
    expr?: Expression;
    type: string;
    constructor(name: string, typeName: string, isConst: boolean, expr?: Expression);
    toString: () => string;
}
interface Declaration {
}
declare class BlockItem {
    which: string;
    declaration?: Declaration;
    statement?: Statement;
    type: string;
    constructor(which: string, declaration?: Declaration, statement?: Statement);
    toString: () => string;
}
declare class Block {
    items: BlockItem[];
    type: string;
    constructor(items: BlockItem[]);
    toString: () => string;
}
declare class Document {
    block: Block;
    declrBlock?: Block;
    type: string;
    constructor(block: Block, declrBlock?: Block);
    toString: () => string;
}
declare class SpelVisitor extends AbstractParseTreeVisitor<SpelASTNode> implements spelVisitor<SpelASTNode> {
    NEW_LINE: string;
    errors: Array<SpelError>;
    defaultResult(): SpelASTNode;
    le(e: any): void;
    lv(e: SpelError): void;
    check(value: any, message?: string | undefined): any;
    checkNull(ctx: ParserRuleContext, field_check: (ctx: any) => any, what: string): void;
    ok(): boolean;
    compile(code: string, headless?: boolean): {
        status: string;
        result?: SpelASTNode;
        errors?: SpelError[];
    };
    visitDocument(ctx: DocumentContext): Document;
    visitHeadless_document(ctx: Headless_documentContext): Document;
    visitBlock(ctx: BlockContext): Block;
    visitBlock_item(ctx: Block_itemContext): BlockItem;
    visitStatement(ctx: StatementContext): Statement;
    visitImport_statement(ctx: Import_statementContext): Import;
    visitNone_statement(ctx: None_statementContext): NoneStatement;
    visitWhile_statement(ctx: While_statementContext): WhileStatement;
    visitAny_statement(ctx: Any_statementContext): AnyStatement;
    visitThrow_statement(ctx: Throw_statementContext): ThrowStatement;
    visitCharge_statement(ctx: Charge_statementContext): ChargeStatement;
    visitCreate_statement(ctx: Create_statementContext): CreateStatement;
    visitPrint_statement(ctx: Print_statementContext): PrintStatement;
    visitList_of_statements(ctx: List_of_statementsContext): Statement[];
    visitDeclaration(ctx: DeclarationContext): Declaration;
    visitList_of_declarations(ctx: List_of_declarationsContext): Declaration[];
    visitVariable_declaration(ctx: Variable_declarationContext): VariableDeclaration;
    visitFunction_definition(ctx: Function_definitionContext): FunctionDefinition;
    visitClass_definition(ctx: Class_definitionContext): ClassDefinition;
    visitAssignment(ctx: AssignmentContext): Assignment;
    visitModification(ctx: ModificationContext): Modification;
    visitCall(ctx: CallContext): Call;
    visitTerminal(ctx: TerminalNode): string;
    visitList_typed_identifiers(ctx: List_typed_identifiersContext): TypedId[];
    visitExpression(ctx: ExpressionContext): Expression;
    visitList_expressions(ctx: List_expressionsContext): Expression[];
    visitBasic_type_expression(ctx: Basic_type_expressionContext): BasicTypeExpression;
    visitMinus_expression(ctx: Minus_expressionContext): MinusExpression;
    visitParen_expression(ctx: Paren_expressionContext): ParenExpression;
    visitField_expression(ctx: Field_expressionContext): FieldExpression;
    visitNamed_expression(ctx: Named_expressionContext): NamedExpression;
    clear(): void;
    unreachable(msg: string): void;
}
export { SpelVisitor, SpelError, SourceRange, SpelASTNode };
