import { spelVisitor } from './antlr_generated/spelVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AssignmentContext, Basic_type_expressionContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Field_expressionContext, Function_definitionContext, Headless_documentContext, Import_statementContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, Named_expressionContext, None_statementContext, Paren_expressionContext, StatementContext, TypeContext, Variable_declarationContext } from './antlr_generated/spelParser'
import { ParserRuleContext, Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

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

class Type{
    type: string;
}

class TypedId{
    name: string;
    type: Type;
}

class BasicType {
    typeName: string
    value: any
}

enum ExprID {
    None,
    BasicType,
    MinusType,
    BinaryType,
    ParenType,
    FieldType,
    NamedType
}

interface Expression {
    typeID: ExprID
}

class BasicTypeExpression implements Expression {
    typeID: ExprID = ExprID.BasicType

    value: BasicType
}

class MinusExpression implements Expression{
    typeID: ExprID = ExprID.MinusType
    
    value: Expression
}

class BinaryExpression implements Expression{
    typeID: ExprID = ExprID.BinaryType
    
    operation: string
    lExpr: Expression
    rExpr: Expression
}

class ParenExpression implements Expression{
    typeID: ExprID = ExprID.ParenType

    expr: Expression
}

class FieldExpression implements Expression{
    typeID: ExprID = ExprID.FieldType

    field: string
    expr: Expression
}

class NamedExpression implements Expression{
    typeID: ExprID = ExprID.NamedType

    name: string
}

class Call implements Statement{
    typeID:StatementID = StatementID.Call

    expr: Expression
    params: Expression[]
}

class Assignment implements Statement {
    typeID:StatementID = StatementID.Assignment

    expr: Expression
    value: Expression
}

class Import implements Statement{
    typeID:StatementID = StatementID.Assignment

    file: string
}

class NoneStatement implements Statement{
    typeID:StatementID = StatementID.NoneStatement
}

class ClassDefinition implements Declaration{
    typeID:DeclID = DeclID.ClassDefinition

    name: string
    declarations: Declaration[] 
}

class FunctionDefinition implements Declaration{
    typeID:DeclID = DeclID.FunctionDefinition

    name: string
    params: TypedId[]
    statements: Statement[]
}

class VariableDeclaration implements Declaration{
    typeID:DeclID = DeclID.VariableDeclaration

    name: string
    expr?: Expression
    const: boolean
}

enum StatementID{
    None,
    Assignment,
    Call,
    Import,
    NoneStatement
}

interface Statement{
    typeID: StatementID
}

enum DeclID {
    None,
    VariableDeclaration,
    FunctionDefinition,
    ClassDefinition
}

interface Declaration{
    typeID: DeclID
}

class BlockItem{
    type: string
    declaration?: Declaration
    statement?: Statement
}

class Block{
    items: BlockItem[]
}

class Document{
    declrBlock?: Block
    Block: Block
}

// let a: BasicTypeExpression = {typeID:ExprID.BasicType, value: <BasicType>{}};
// let b: Expression = a;
// let c: BasicTypeExpression = <BasicTypeExpression>b;

class ASTVariant{
    type: string
    block?: Block
    blockItem?: BlockItem
    declaration?: Declaration
    statement?: Statement
    list_of_statements?: Statement[]
    list_of_declarations?: Declaration[]
    list_of_typed_params?: TypedId[]
    list_of_expressions?: Expression[]
    expression?: Expression
    document?: Document
    value?: string
}

class SpelGenerateSourceVisitor extends AbstractParseTreeVisitor<ASTVariant> implements spelVisitor<ASTVariant> {
    NEW_LINE = '\n';

    errors: Array<SpelError> = new Array<SpelError>();

    defaultResult(): ASTVariant {
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

    visitDocument(ctx: DocumentContext):ASTVariant {
        if (!this.checkNull(ctx, ctx._program, 'block')) return;

        return {
            type: 'document',
            document: {
                Block: this.visitBlock(ctx._program)?.block,
                declrBlock: ctx._declr_block ? this.visitBlock(ctx._declr_block)?.block : undefined
            }
        };
    }

    visitHeadless_document(ctx: Headless_documentContext): ASTVariant{
        if (!this.checkNull(ctx, ctx.block(), 'block')) return;

        return {
            type: 'block',
            block: this.visitBlock(ctx.block())?.block
        }
    }

    visitBlock(ctx: BlockContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.block(), 'block')) return;
        
        let block = this.visitBlock(ctx.block())?.block;
        let block_item = ctx._next ? this.visitBlock_item(ctx.block_item())?.blockItem : undefined;

        return {
            type: 'block',
            block: <Block>{items: [].concat(block?.items).concat([block_item])}
        };
    }

    visitBlock_item(ctx: Block_itemContext):ASTVariant {
        if (ctx.statement()){
            return {
                type: 'block_item',
                blockItem: {
                    type: 'statement',
                    statement: this.visitStatement(ctx.statement())?.statement
                }
            }
        }
        if (ctx.declaration()){
            return {
                type: 'block_item',
                blockItem: {
                    type: 'declaration',
                    declaration: this.visitDeclaration(ctx.declaration())?.declaration
                }
            }
        }
    }

    visitStatement(ctx: StatementContext):ASTVariant {
        if (ctx.assignment()){
            return this.visitAssignment(ctx.assignment());
        }
        if (ctx.call()){
            return this.visitCall(ctx.call());
        }
        if (ctx.import_statement()){
            return this.visitImport_statement(ctx.import_statement());
        }
        if (ctx.none_statement()){
            return this.visitNone_statement(ctx.none_statement());
        }
    }

    visitImport_statement(ctx: Import_statementContext): ASTVariant{
        if (!this.checkNull(ctx, ctx.IDENTIFIER(), 'path')) return;
        let imp = new Import();
        imp.file = ctx.IDENTIFIER().text;
        return {
            type: 'statement',
            statement: imp
        }
    }

    visitNone_statement(ctx: None_statementContext): ASTVariant{
        return { 
            type: 'statement',
            statement: new NoneStatement()
        }
    }

    visitList_of_statements(ctx: List_of_statementsContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.statement(), 'statements')) return;
        
        let statement = this.visitStatement(ctx.statement())?.statement;
        let list_of_statements = ctx._next ? this.visitList_of_statements(ctx._next)?.list_of_statements : undefined;
        
        return {
            type: 'list_of_statements',
            list_of_statements: [].concat([statement]).concat(list_of_statements)
        };
    }

    visitDeclaration(ctx: DeclarationContext):ASTVariant {
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

    visitList_of_declarations(ctx: List_of_declarationsContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.declaration(), 'declaration')) return;
        
        let declaration = this.visitDeclaration(ctx.declaration())?.declaration;
        let list_of_declarations = ctx._next ? this.visitList_of_declarations(ctx._next)?.list_of_declarations : undefined;
        
        return {
            type: 'list_of_declarations',
            list_of_declarations: [].concat([declaration]).concat(list_of_declarations)
        };
    }

    visitVariable_declaration(ctx: Variable_declarationContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.IDENTIFIER(), 'name')) return;

        let expr;
        if (ctx.expression()){
            expr = this.visitExpression(ctx.expression())?.expression;
        }

        let decl:VariableDeclaration = new VariableDeclaration();
        decl.const = ctx.ARTIFACT() != undefined;
        decl.expr = expr;
        decl.name = ctx._name.text;

        return {
            type: 'declaration',
            declaration: decl
        }
    }

    visitFunction_definition(ctx: Function_definitionContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.IDENTIFIER(), 'name')) return;

        let params = this.visitList_typed_identifiers(ctx.list_typed_identifiers())?.list_of_typed_params;

        let statements = this.visitList_of_statements(ctx.list_of_statements())?.list_of_statements;
        
        let func: FunctionDefinition = new FunctionDefinition();
        func.name = ctx._func_type.text;
        func.statements = statements;
        func.params = params;

        return {
            type: 'declaration',
            declaration: func
        }
    }

    visitClass_definition(ctx: Class_definitionContext):ASTVariant {
        if (!this.checkNull(ctx, ctx.list_of_declarations(), 'declarations')) return;

        let declarations = this.visitList_of_declarations(ctx.list_of_declarations())?.list_of_declarations;
        let classdef = new ClassDefinition();
        classdef.name = ctx._name.text;
        classdef.declarations = declarations;

        return {
            type: 'declaration',
            declaration: classdef
        }
    }

    visitAssignment(ctx: AssignmentContext):ASTVariant{
        if (!this.checkNull(ctx, ctx.expression(), 'value')) return;

        let value = this.visitExpression(ctx._value)?.expression;
        let expr = this.visitExpression(ctx._value)?.expression;
        let assign = new Assignment();
        assign.expr = expr;
        assign.value = value;
        
        return {
            type: 'statement',
            statement: assign
        }
    }

    visitCall(ctx: CallContext):ASTVariant{
        if (!this.checkNull(ctx, ctx.expression(), 'value')) return;

        let expr = this.visitExpression(ctx._expr)?.expression;
        let params = this.visitList_expressions(ctx._params)?.list_of_expressions
        let call = new Call();
        call.expr = expr;
        call.params = params;

        return {
            type: 'statement',
            statement: call
        }
    }

    visitTerminal(ctx: TerminalNode):ASTVariant{
        return {
            type: 'string',
            value: ctx.toString() //todo
        }
    }

    visitList_typed_identifiers(ctx: List_typed_identifiersContext): ASTVariant{
        if (!this.checkNull(ctx, ctx._next, 'params')) return;
        
        let list_of_types = ctx._next ? this.visitList_typed_identifiers(ctx._next)?.list_of_typed_params : undefined;
        
        return {
            type: 'list_of_types',
            list_of_declarations: [].concat([ctx._type.text]).concat(list_of_types)
        };
    }

    visitExpression(ctx: ExpressionContext):ASTVariant {
        if (ctx._basic_type_t){
            return this.visitBasic_type_expression(ctx._basic_type_t);
        }
        if (ctx._named_expression_t){
            return this.visitNamed_expression(ctx._named_expression_t);
        }
        if (ctx._minus_expression_t){
            return this.visitMinus_expression(ctx._minus_expression_t);
        }
        if (ctx._paren_expression_t){
            return this.visitParen_expression(ctx._paren_expression_t);
        }
        if (ctx._field_expression_t){
            return this.visitField_expression(ctx._field_expression_t);
        }

        let binary = new BinaryExpression();
        let lexpr = this.visitExpression(ctx._lexpr)?.expression;
        let rexpr = this.visitExpression(ctx._rexpr)?.expression;
        binary.lExpr = lexpr;
        binary.rExpr = rexpr;
        binary.operation = ctx._sign.text;

        return {
            type: 'expression',
            expression: binary
        };
    }

    visitList_expressions(ctx: List_expressionsContext):ASTVariant {
        if (!this.checkNull(ctx, ctx._next, 'params')) return;
        
        let expr = this.visitExpression(ctx.expression())?.expression;
        let list_of_expressions = ctx._next ? this.visitList_expressions(ctx._next)?.list_of_expressions : undefined;
        
        return {
            type: 'list_of_expressions',
            list_of_expressions: [].concat([expr]).concat(list_of_expressions)
        };
    }

    visitBasic_type_expression(ctx: Basic_type_expressionContext):ASTVariant{
        let expr = new BasicTypeExpression();
        if (ctx.NUMBER()){
            expr.value.typeName = 'number';
        }
        else if (ctx.STRING()){
            expr.value.typeName = 'string';
        }
        expr.value.value = ctx._number_type.text;

        return {
            type: 'expression',
            expression: expr
        }
    }

    visitMinus_expression(ctx: Minus_expressionContext):ASTVariant {
        let expr = this.visitExpression(ctx.expression())?.expression;

        let min = new MinusExpression();
        min.value = expr;

        return {
            type: 'expression',
            expression: min
        }
    }

    visitParen_expression(ctx: Paren_expressionContext): ASTVariant{
        let expr = this.visitExpression(ctx.expression())?.expression;

        let paren = new ParenExpression();
        paren.expr = expr;

        return {
            type: 'expression',
            expression: paren
        }
    }

    visitField_expression(ctx: Field_expressionContext): ASTVariant{
        let expr = this.visitExpression(ctx.expression())?.expression;

        let field = new FieldExpression();
        field.expr = expr;
        field.field = ctx.IDENTIFIER().text;

        return {
            type: 'expression',
            expression: field
        }
    }

    visitNamed_expression(ctx: Named_expressionContext): ASTVariant{
        let named = new NamedExpression();
        named.name = ctx.IDENTIFIER().text;

        return {
            type: 'expression',
            expression: named
        }
    }
}

class SourceGenerator{
    NEW_LINE: string = '\n';

    generateDocument(ctx: Document): string {
        let block = this.generateBlock(ctx.Block);
        let declr_block = ctx.declrBlock ? this.generateBlock(ctx.declrBlock) : undefined;

        return declr_block + this.NEW_LINE +
        'Genesis();' + this.NEW_LINE + 
        block;
    }

    generateHeadless_document(ctx: Block): string{
        return this.generateBlock(ctx);
    }

    generateBlock(ctx: Block):string {
        let $ = this;
        return ctx.items.map((bi) => $.generateBlock_item(bi)).join(this.NEW_LINE);
    }

    generateBlock_item(ctx: BlockItem):string {
        if (ctx.type == 'statement'){
            return this.generateStatement(ctx.statement);
        }
        if (ctx.type == 'declaration'){
            return this.generateDeclaration(ctx.declaration);
        }
    }

    generateStatement(ctx: Statement):string {
        if (ctx.typeID == StatementID.Assignment){
            return this.generateAssignment(<Assignment>ctx);
        }
        if (ctx.typeID == StatementID.Call){
            return this.generateCall(<Call>ctx);
        }
        if (ctx.typeID == StatementID.Import){
            return this.generateImport_statement(<Import>ctx);
        }
        if (ctx.typeID == StatementID.NoneStatement){
            return this.generateNone_statement(<NoneStatement>ctx);
        }
        if (ctx.typeID == StatementID.None){
            return '';
        }
    }

    generateImport_statement(ctx: Import): string{
        return 'let ' + ctx.file + ' = import(' + ctx.file + ')';
    }

    generateNone_statement(ctx: NoneStatement): string{
        return ';';
    }

    generateList_of_statements(ctx: List_of_statementsContext):string {
        if (ctx.list_of_statements()){
            let statement = this.generateStatement(ctx.statement());
            if (!statement?.source) return;

            let list_of_statements = this.generateList_of_statements(ctx.list_of_statements());
            if (!list_of_statements?.source) return;
            
            return {
                source: statement.source + this.NEW_LINE + list_of_statements.source
            }
        }
        if (ctx.statement()){
            return this.generateStatement(ctx.statement());
        }
    }

    generateDeclaration(ctx: DeclarationContext):string {
        if (ctx.variable_declaration()){
            return this.generateVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition()){
            return this.generateClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition()){
            return this.generateFunction_definition(ctx.function_definition());
        }
    }

    generateList_of_declarations(ctx: List_of_declarationsContext):string {
        if (ctx.list_of_declarations()){
            let declaration = this.generateDeclaration(ctx.declaration());
            if (!declaration?.source) return;

            let list_of_declarations = this.generateList_of_declarations(ctx.list_of_declarations());
            if (!list_of_declarations?.source) return;

            return {
                source: declaration.source + this.NEW_LINE + list_of_declarations.source
            }
        }
        if (ctx.declaration()){
            return this.generateDeclaration(ctx.declaration());
        }
    }

    generateVariable_declaration(ctx: Variable_declarationContext):string {
        if (ctx.IDENTIFIER()){
            let expr;
            if (ctx.expression()){
                expr = this.generateExpression(ctx.expression());
                if (!expr?.source) return;
            }

            let type = this.generateType(ctx.type());
            if (!type?.source) return;

            return {
                source: (this.is_in_class_definition ? '': 'let ' ) + ctx.IDENTIFIER() + (ctx.BESTOW() ? ' = ' + expr.source: '') + ';',
                'type': type?.source
            }
        }
    }

    generateFunction_definition(ctx: Function_definitionContext):string {
        if (ctx.type() && ctx.IDENTIFIER() && ctx.list_typed_identifiers() && ctx.list_of_statements()){
            let result = this.generateList_typed_identifiers(ctx.list_typed_identifiers());
            if (!result?.typed_list || !result?.source) return;

            let statements = this.generateList_of_statements(ctx.list_of_statements());
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

    generateClass_definition(ctx: Class_definitionContext):string {
        if (ctx.IDENTIFIER() && ctx.list_of_declarations()){
            let old_is_in_class_definition = this.is_in_class_definition;
            this.is_in_class_definition = true;
            let result = this.generateList_of_declarations(ctx.list_of_declarations());
            this.is_in_class_definition = old_is_in_class_definition;
            if (!result?.source) return;

            return {
                source: 'class ' + ctx.IDENTIFIER() + ' { ' + result.source + '}'
            }
        }
    }

    generateAssignment(ctx: Assignment):string{
        if (ctx._name && ctx._value){
            let expr = this.generateExpression(ctx.expression());
            if (!expr?.source) return;

            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + ' = ' + expr.source + ';'
            } 
        }
    }

    generateCall(ctx: Call):string{
        if (ctx._name && ctx._params){
            let expr = this.generateList_expressions(ctx.list_expressions());
            if (!expr?.source) return;
            
            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + '(' + expr.source + ')'
            }
        }
    }

    generateType(ctx: TypeContext):string{
        if (ctx.POINTS()){
            return this.generateTerminal(ctx.POINTS());
        }
        if (ctx.PRECISE()){
            return this.generateTerminal(ctx.PRECISE());
        }
        if (ctx.RUNE()){
            return this.generateTerminal(ctx.RUNE());
        }
        if (ctx.TOME()){
            return this.generateTerminal(ctx.TOME());
        }
        if (ctx.IDENTIFIER()){
            return this.generateTerminal(ctx.IDENTIFIER());
        }
    }

    generateTerminal(ctx: TerminalNode):string{
        return {
            source: ctx.toString() //todo
        }
    }

    generateList_typed_identifiers(ctx: List_typed_identifiersContext): string{
        if (ctx.type() && ctx.IDENTIFIER()){
            if (ctx._next){
                let res = this.generateList_typed_identifiers(ctx.list_typed_identifiers());
                // return new Variant('', [
                //     <Param>{
                //         name: this.generate(ctx.IDENTIFIER()).toString(),
                //         type: this.generateType(ctx.type()).toString()
                //     }
                // ].concat((<List_typed_identifiersData>res.data).params)
                // );
            }
            // return new Variant('', { params:[
            //     <Param>{
            //         name: this.generate(ctx.IDENTIFIER()).toString(),
            //         type: this.generateType(ctx.type()).toString()
            //     }
            // ]});

            //todo
        }
        return {
            source:''
        }
    }

    generateExpression(ctx: ExpressionContext){
        if (ctx.NUMBER()){
            return this.generateTerminal(ctx.NUMBER());
        }
    }

    generateList_expressions(ctx: List_expressionsContext):string {
        if (ctx.list_expressions()){
            let expr = this.generateExpression(ctx.expression());
            if (!expr?.source) return;

            let list_expr = this.generateList_expressions(ctx.list_expressions());
            if (!list_expr?.source) return;

            return {
                source: expr.source + this.NEW_LINE + list_expr.source
            }
        }
        if (ctx.expression()){
            return this.generateExpression(ctx.expression());
        }
    }

    generateMinus_expression(ctx: Minus_expressionContext){
        return {source:''};
    }
}

export{
    SpelGenerateSourceVisitor,
    ASTVariant
};