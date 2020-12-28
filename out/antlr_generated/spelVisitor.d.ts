import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { DocumentContext } from "./spelParser";
import { Headless_documentContext } from "./spelParser";
import { BlockContext } from "./spelParser";
import { Block_itemContext } from "./spelParser";
import { StatementContext } from "./spelParser";
import { List_of_statementsContext } from "./spelParser";
import { DeclarationContext } from "./spelParser";
import { List_of_declarationsContext } from "./spelParser";
import { Variable_declarationContext } from "./spelParser";
import { Function_definitionContext } from "./spelParser";
import { Class_definitionContext } from "./spelParser";
import { AssignmentContext } from "./spelParser";
import { CallContext } from "./spelParser";
import { TypeContext } from "./spelParser";
import { List_typed_identifiersContext } from "./spelParser";
import { ExpressionContext } from "./spelParser";
import { List_expressionsContext } from "./spelParser";
import { Minus_expressionContext } from "./spelParser";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `spelParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface spelVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `spelParser.document`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocument?: (ctx: DocumentContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.headless_document`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHeadless_document?: (ctx: Headless_documentContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.block_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock_item?: (ctx: Block_itemContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.list_of_statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_of_statements?: (ctx: List_of_statementsContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclaration?: (ctx: DeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.list_of_declarations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_of_declarations?: (ctx: List_of_declarationsContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.variable_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.function_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_definition?: (ctx: Function_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.class_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClass_definition?: (ctx: Class_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall?: (ctx: CallContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.list_typed_identifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_typed_identifiers?: (ctx: List_typed_identifiersContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.list_expressions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList_expressions?: (ctx: List_expressionsContext) => Result;
    /**
     * Visit a parse tree produced by `spelParser.minus_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMinus_expression?: (ctx: Minus_expressionContext) => Result;
}
