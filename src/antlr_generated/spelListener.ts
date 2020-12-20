// Generated from ../../grammars/spel.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `spelParser`.
 */
export interface spelListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `spelParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.headless_document`.
	 * @param ctx the parse tree
	 */
	enterHeadless_document?: (ctx: Headless_documentContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.headless_document`.
	 * @param ctx the parse tree
	 */
	exitHeadless_document?: (ctx: Headless_documentContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.block_item`.
	 * @param ctx the parse tree
	 */
	enterBlock_item?: (ctx: Block_itemContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.block_item`.
	 * @param ctx the parse tree
	 */
	exitBlock_item?: (ctx: Block_itemContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.list_of_statements`.
	 * @param ctx the parse tree
	 */
	enterList_of_statements?: (ctx: List_of_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.list_of_statements`.
	 * @param ctx the parse tree
	 */
	exitList_of_statements?: (ctx: List_of_statementsContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.list_of_declarations`.
	 * @param ctx the parse tree
	 */
	enterList_of_declarations?: (ctx: List_of_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.list_of_declarations`.
	 * @param ctx the parse tree
	 */
	exitList_of_declarations?: (ctx: List_of_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.class_definition`.
	 * @param ctx the parse tree
	 */
	enterClass_definition?: (ctx: Class_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.class_definition`.
	 * @param ctx the parse tree
	 */
	exitClass_definition?: (ctx: Class_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.list_typed_identifiers`.
	 * @param ctx the parse tree
	 */
	enterList_typed_identifiers?: (ctx: List_typed_identifiersContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.list_typed_identifiers`.
	 * @param ctx the parse tree
	 */
	exitList_typed_identifiers?: (ctx: List_typed_identifiersContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.list_expressions`.
	 * @param ctx the parse tree
	 */
	enterList_expressions?: (ctx: List_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.list_expressions`.
	 * @param ctx the parse tree
	 */
	exitList_expressions?: (ctx: List_expressionsContext) => void;

	/**
	 * Enter a parse tree produced by `spelParser.minus_expression`.
	 * @param ctx the parse tree
	 */
	enterMinus_expression?: (ctx: Minus_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `spelParser.minus_expression`.
	 * @param ctx the parse tree
	 */
	exitMinus_expression?: (ctx: Minus_expressionContext) => void;
}

