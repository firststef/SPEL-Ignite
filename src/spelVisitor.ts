import { spelVisitor } from './antlr_generated/spelVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AssignmentContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Function_definitionContext, Headless_documentContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, StatementContext, TypeContext, Variable_declarationContext } from './antlr_generated/spelParser'
import { ParserRuleContext, Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

class Param{
    name: string;
    type: string;
}

class Type{
    type: string;
}

/* 
function getSourceRange(antlr4::tree::TerminalNode* node) {
    return getSourceRange(node->getSymbol());
}
function getSourceRange(const antlr4::ParserRuleContext* rule) {
    return getSourceRange(rule->start, rule->stop);
}
*/
function getSourceRange(start:Token|null, stop:Token|null) : SourceRange{
    if (stop == null){
        stop = start;
    }

    let start_index = 0;
    let size = 1;
    if (start) {
        start_index = start.startIndex;
        size        = start.startIndex - start_index + 1;
    }
    if (stop) {
        const stop_index = stop.startIndex;
        size = (stop_index >= start_index ? stop_index - start_index : start_index - stop_index) + 1;
    }

    return new SourceRange(start_index, size );
}

class SourceRange {
    start: number;
    size: number;

    constructor(start: number, size: number){
        this.start = start;
        this.size = size;
    }
}

class SpelError{
    range: SourceRange;
    message: string;

    constructor(range: SourceRange, msg: string){
        this.range = range;
        this.message = msg;
    }
}

// class SpelVisitorInterface<T> extends AbstractParseTreeVisitor<T> implements spelVisitor<T> {
//     NEW_LINE = '\n';

//     is_in_class_definition: boolean = false;
//     errors: Array<SpelError> = new Array<SpelError>();

//     checkNull(ctx: ParserRuleContext, field: any, what: string){
//         if (!ctx){
//             this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
//             return false;
//         }
//         if (!field){
//             this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
//             return false;
//         }
//         return true;
//     }

//     protected defaultResult(): T {return;}

//     visitDocument(ctx: DocumentContext):T {return;}

//     visitHeadless_document(ctx: Headless_documentContext):T {return;}

//     visitBlock(ctx: BlockContext):T {return;}

//     visitBlock_item(ctx: Block_itemContext):T {return;}

//     visitStatement(ctx: StatementContext):T {return;}

//     visitList_of_statements(ctx: List_of_statementsContext):T {return;}

//     visitDeclaration(ctx: DeclarationContext):T {return;}

//     visitList_of_declarations(ctx: List_of_declarationsContext):T {return;}

//     visitVariable_declaration(ctx: Variable_declarationContext):T {return;}

//     visitFunction_definition(ctx: Function_definitionContext):T {return;}

//     visitClass_definition(ctx: Class_definitionContext):T {return;}

//     visitAssignment(ctx: AssignmentContext):T {return;}

//     visitCall(ctx: CallContext):T {return;}

//     visitType(ctx: TypeContext):T {return;}

//     visitList_typed_identifiers(ctx: List_typed_identifiersContext):T {return;}

//     visitExpression(ctx: ExpressionContext):T {return;}

//     visitList_expressions(ctx: List_expressionsContext):T {return;}

//     visitMinus_expression(ctx: Minus_expressionContext):T {return;}
// }

class SpelGenerateSourceVariant{
    source: string|undefined
    type?: string
    typed_list?: Array<Param>
}

class SpelGenerateSourceVisitor extends AbstractParseTreeVisitor<SpelGenerateSourceVariant> implements spelVisitor<SpelGenerateSourceVariant> {
    NEW_LINE = '\n';

    is_in_class_definition: boolean = false;
    errors: Array<SpelError> = new Array<SpelError>();

    protected defaultResult(): SpelGenerateSourceVariant {
        return;
    }

    check(value:any, message:string){
        if (!value){
            this.errors.push(new SpelError(new SourceRange(0, 0), message));
            return undefined;
        }
        return value;
    }

    checkNull(ctx: ParserRuleContext, field: any, what: string){
        if (!ctx){
            this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
            return false;
        }
        if (!field){
            this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
            return false;
        }
        return true;
    }

    visitDocument(ctx: DocumentContext):SpelGenerateSourceVariant {
        if (!this.checkNull(ctx, ctx.block(), 'block')) return;

        if (ctx.block()){
            let block = this.visitBlock(ctx.block());
            if (!block?.source) return;

            return {
                source: 'Genesis();' + this.NEW_LINE + block.source
            };
        }
    }

    visitHeadless_document(ctx: Headless_documentContext): SpelGenerateSourceVariant{
        if (!this.checkNull(ctx, ctx.block(), 'block')) return;

        if (ctx.block()){
            return this.visitBlock(ctx.block());
        }
    }

    visitBlock(ctx: BlockContext):SpelGenerateSourceVariant {
        if (ctx._next){
            let block = this.visitBlock(ctx.block());
            if (!block?.source) return;

            let block_item = this.visitBlock_item(ctx.block_item());
            if (!block_item?.source) return;

            return {source: block.source + this.NEW_LINE + block_item.source};
        }
        if (ctx.block_item()){
            return this.visitBlock_item(ctx.block_item());
        }
    }

    visitBlock_item(ctx: Block_itemContext):SpelGenerateSourceVariant {
        if (ctx.statement()){
            return this.visitStatement(ctx.statement());
        }
        if (ctx.declaration()){
            return this.visitDeclaration(ctx.declaration());
        }
    }

    visitStatement(ctx: StatementContext):SpelGenerateSourceVariant {
        if (ctx.assignment()){
            return this.visitAssignment(ctx.assignment());
        }
        if (ctx.call()){
            return this.visitCall(ctx.call());
        }
        if (ctx.IMP() && ctx.IDENTIFIER()){
            return {
                source: 'import * as ' + ctx.IDENTIFIER() + ' from \'' + ctx.IDENTIFIER() + '\''
            }
        }
    }

    visitList_of_statements(ctx: List_of_statementsContext):SpelGenerateSourceVariant {
        if (ctx.list_of_statements()){
            let statement = this.visitStatement(ctx.statement());
            if (!statement?.source) return;

            let list_of_statements = this.visitList_of_statements(ctx.list_of_statements());
            if (!list_of_statements?.source) return;
            
            return {
                source: statement.source + this.NEW_LINE + list_of_statements.source
            }
        }
        if (ctx.statement()){
            return this.visitStatement(ctx.statement());
        }
    }

    visitDeclaration(ctx: DeclarationContext):SpelGenerateSourceVariant {
        if (ctx.variable_declaration()){
            return this.visitVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition()){
            return this.visitClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition()){
            return this.visitFunction_definition(ctx.function_definition());
        }
    }

    visitList_of_declarations(ctx: List_of_declarationsContext):SpelGenerateSourceVariant {
        if (ctx.list_of_declarations()){
            let declaration = this.visitDeclaration(ctx.declaration());
            if (!declaration?.source) return;

            let list_of_declarations = this.visitList_of_declarations(ctx.list_of_declarations());
            if (!list_of_declarations?.source) return;

            return {
                source: declaration.source + this.NEW_LINE + list_of_declarations.source
            }
        }
        if (ctx.declaration()){
            return this.visitDeclaration(ctx.declaration());
        }
    }

    visitVariable_declaration(ctx: Variable_declarationContext):SpelGenerateSourceVariant {
        if (ctx.IDENTIFIER() && ctx.expression()){
            let expr = this.visitExpression(ctx.expression());
            if (!expr?.source) return;

            let type = this.visitType(ctx.type());
            if (!type?.source) return;

            return {
                source: (this.is_in_class_definition ? 'let ' : '') + ctx.IDENTIFIER() + ' = ' + expr.source,
                'type': type?.source
            }
        }
    }

    visitFunction_definition(ctx: Function_definitionContext):SpelGenerateSourceVariant {
        if (ctx.type && ctx.IDENTIFIER && ctx.list_typed_identifiers && ctx.list_of_statements){
            let result = this.visitList_typed_identifiers(ctx.list_typed_identifiers());
            if (!result?.typed_list || !result?.source) return;

            let statements = this.visitList_of_statements(ctx.list_of_statements());
            if (!statements?.source) return;
            
            return {
                source:(this.is_in_class_definition ? 'function ' : '') + ctx.IDENTIFIER() 
                    + '(' + result.source + ')' + this.NEW_LINE +
                    + '{' +  this.NEW_LINE 
                    + statements.source + this.NEW_LINE 
                    + '}'
            };
        }
    }

    visitClass_definition(ctx: Class_definitionContext):SpelGenerateSourceVariant {
        if (ctx.IDENTIFIER && ctx.list_of_declarations){
            let old_is_in_class_definition = this.is_in_class_definition;
            this.is_in_class_definition = true;
            let result = this.visitList_of_declarations(ctx.list_of_declarations());
            this.is_in_class_definition = old_is_in_class_definition;
            if (!result?.source) return;

            return {
                source: 'class ' + ctx.IDENTIFIER() + ' { ' + result.toString() + '}'
            }
        }
    }

    visitAssignment(ctx: AssignmentContext):SpelGenerateSourceVariant{
        if (ctx._name && ctx._value){
            let expr = this.visitExpression(ctx.expression());
            if (!expr?.source) return;

            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + ' = ' + expr.source + ';'
            } 
        }
    }

    visitCall(ctx: CallContext):SpelGenerateSourceVariant{
        if (ctx._name && ctx._params){
            let expr = this.visitList_expressions(ctx.list_expressions());
            if (!expr?.source) return;
            
            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + '(' + expr.source + ')'
            }
        }
    }

    visitType(ctx: TypeContext):SpelGenerateSourceVariant{
        if (ctx.POINTS){
            return this.visitTerminal(ctx.POINTS());
        }
        if (ctx.PRECISE){
            return this.visitTerminal(ctx.PRECISE());
        }
        if (ctx.RUNE){
            return this.visitTerminal(ctx.RUNE());
        }
        if (ctx.TOME){
            return this.visitTerminal(ctx.TOME());
        }
        if (ctx.IDENTIFIER){
            return this.visitTerminal(ctx.IDENTIFIER());
        }
    }

    visitTerminal(ctx: TerminalNode):SpelGenerateSourceVariant{
        return {
            source: ctx.toString() //todo
        }
    }

    visitList_typed_identifiers(ctx: List_typed_identifiersContext): SpelGenerateSourceVariant{
        if (ctx.type && ctx.IDENTIFIER){
            if (ctx._next){
                let res = this.visitList_typed_identifiers(ctx.list_typed_identifiers());
                // return new Variant('', [
                //     <Param>{
                //         name: this.visit(ctx.IDENTIFIER()).toString(),
                //         type: this.visitType(ctx.type()).toString()
                //     }
                // ].concat((<List_typed_identifiersData>res.data).params)
                // );
            }
            // return new Variant('', { params:[
            //     <Param>{
            //         name: this.visit(ctx.IDENTIFIER()).toString(),
            //         type: this.visitType(ctx.type()).toString()
            //     }
            // ]});

            //todo
        }
        return {
            source:''
        }
    }

    visitExpression(ctx: ExpressionContext){
        if (ctx.NUMBER){
            return this.visitTerminal(ctx.NUMBER());
        }
    }

    visitList_expressions(ctx: List_expressionsContext):SpelGenerateSourceVariant {
        if (ctx.list_expressions()){
            let expr = this.visitExpression(ctx.expression());
            if (!expr?.source) return;

            let list_expr = this.visitList_expressions(ctx.list_expressions());
            if (!list_expr?.source) return;

            return {
                source: expr.source + this.NEW_LINE + list_expr.source
            }
        }
        if (ctx.expression){
            return this.visitExpression(ctx.expression());
        }
    }

    visitMinus_expression(ctx: Minus_expressionContext){
        return {source:''};
    }
}

export{
    SpelGenerateSourceVisitor,
    SpelGenerateSourceVariant
};