import { spelVisitor } from './antlr_generated/spelVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AssignmentContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Function_definitionContext, Headless_documentContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, StatementContext, TypeContext, Variable_declarationContext } from './antlr_generated/spelParser';
import { ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
declare class Param {
    name: string;
    type: string;
}
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
declare class SpelGenerateSourceVariant {
    source: string | undefined;
    type?: string;
    typed_list?: Array<Param>;
}
declare class SpelGenerateSourceVisitor extends AbstractParseTreeVisitor<SpelGenerateSourceVariant> implements spelVisitor<SpelGenerateSourceVariant> {
    NEW_LINE: string;
    is_in_class_definition: boolean;
    errors: Array<SpelError>;
    protected defaultResult(): SpelGenerateSourceVariant;
    check(value: any, message: string): any;
    checkNull(ctx: ParserRuleContext, field: any, what: string): boolean;
    visitDocument(ctx: DocumentContext): SpelGenerateSourceVariant;
    visitHeadless_document(ctx: Headless_documentContext): SpelGenerateSourceVariant;
    visitBlock(ctx: BlockContext): SpelGenerateSourceVariant;
    visitBlock_item(ctx: Block_itemContext): SpelGenerateSourceVariant;
    visitStatement(ctx: StatementContext): SpelGenerateSourceVariant;
    visitList_of_statements(ctx: List_of_statementsContext): SpelGenerateSourceVariant;
    visitDeclaration(ctx: DeclarationContext): SpelGenerateSourceVariant;
    visitList_of_declarations(ctx: List_of_declarationsContext): SpelGenerateSourceVariant;
    visitVariable_declaration(ctx: Variable_declarationContext): SpelGenerateSourceVariant;
    visitFunction_definition(ctx: Function_definitionContext): SpelGenerateSourceVariant;
    visitClass_definition(ctx: Class_definitionContext): SpelGenerateSourceVariant;
    visitAssignment(ctx: AssignmentContext): SpelGenerateSourceVariant;
    visitCall(ctx: CallContext): SpelGenerateSourceVariant;
    visitType(ctx: TypeContext): SpelGenerateSourceVariant;
    visitTerminal(ctx: TerminalNode): SpelGenerateSourceVariant;
    visitList_typed_identifiers(ctx: List_typed_identifiersContext): SpelGenerateSourceVariant;
    visitExpression(ctx: ExpressionContext): SpelGenerateSourceVariant;
    visitList_expressions(ctx: List_expressionsContext): SpelGenerateSourceVariant;
    visitMinus_expression(ctx: Minus_expressionContext): {
        source: string;
    };
}
export { SpelGenerateSourceVisitor, SpelGenerateSourceVariant };
