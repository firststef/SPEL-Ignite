import { spelVisitor } from './antlr_generated/spelVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AssignmentContext, Basic_type_expressionContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Field_expressionContext, Function_definitionContext, Headless_documentContext, Import_statementContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, ModificationContext, Named_expressionContext, None_statementContext, Paren_expressionContext, StatementContext, Variable_declarationContext, spelParser, While_statementContext, Any_statementContext, Throw_statementContext, Charge_statementContext, Create_statementContext, Print_statementContext } from './antlr_generated/spelParser'
import { ConsoleErrorListener, ParserRuleContext, Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { spelLexer } from './antlr_generated/spelLexer';
import { ErrorListener } from './errorListener';

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

class SpelException{
    error: string
    object: SpelVisitor

    constructor(msg:string, object:SpelVisitor){
        this.error = msg;
        this.object = object;
    }
}

type SpelASTNode = any;

class TypedId{
    type:string;

    constructor(
        public name: string,
        public typeName: string
    )
    {
        this.type = "TypedId";
    }

    toString = () => JSON.stringify(this)
}

interface Expression {}

class BasicTypeExpression implements Expression {
    type:string;

    constructor(
        public value: any,
        public typeName: string
    )
    {
        this.type = "BasicTypeExpression";
    }

    toString = () => JSON.stringify(this)
}

class MinusExpression implements Expression{
    type:string;

    constructor(
        public value: Expression
    )
    {
        this.type = "MinusExpression";
    }

    toString = () => JSON.stringify(this)
}

class BinaryExpression implements Expression{
    type:string;

    constructor(
        public operation: string,
        public lExpr: Expression,
        public rExpr: Expression
    )
    {
        this.type = "BinaryExpression";
    }

    toString = () => JSON.stringify(this)
}

class ParenExpression implements Expression{
    type:string;

    constructor(
        public expr: Expression
    )
    {
        this.type = "ParenExpression";
    }

    toString = () => JSON.stringify(this)
}

class FieldExpression implements Expression{
    type:string;

    constructor(
        public field: string,
        public expr: Expression
    )
    {
        this.type = "FieldExpression";
    }

    toString = () => JSON.stringify(this)
}

class NamedExpression implements Expression {
    type:string;

    constructor(
        public name: string
    )
    {
        this.type = "NamedExpression";
    }

    toString = () => JSON.stringify(this)
}

interface Statement{}

class Call implements Statement, Expression{
    type:string;
    
    constructor(
        public expr: Expression,
        public params: Expression[]
    )
    {
        this.type = "Call";
    }

    toString = () => JSON.stringify(this)
}

class Assignment implements Statement {
    type:string;

    constructor(
        public expr: Expression,
        public value: Expression
    )
    {
        this.type = "Assignment";
    }

    toString = () => JSON.stringify(this)
}

class Modification implements Statement{
    type:string;

    constructor(
        public expr: Expression,
        public value: Expression
    )
    {
        this.type = "Modification";
    }

    toString = () => JSON.stringify(this)
}

class Import implements Statement{
    type:string;

    constructor(
        public file: string
    )
    {
        this.type = "Import";
    }

    toString = () => JSON.stringify(this)
}

class NoneStatement implements Statement{
    type:string;

    constructor()
    {
        this.type = "NoneStatement";
    }

    toString = () => JSON.stringify(this)
}

class WhileStatement implements Statement{
    type:string;

    constructor(
        public expr: Expression,
        public stmts: Statement[]
    )
    {
        this.type = "WhileStatement";
    }

    toString = () => JSON.stringify(this)
}

class AnyStatement implements Statement{
    type:string;

    constructor(
        public value: string,
    )
    {
        this.type = "AnyStatement";
    }

    toString = () => JSON.stringify(this)
}

class ThrowStatement implements Statement{
    type:string;

    constructor(
        public object: string,
    )
    {
        this.type = "ThrowStatement";
    }

    toString = () => JSON.stringify(this)
}

class ChargeStatement implements Statement{
    type:string;

    constructor(
        public element: string,
    )
    {
        this.type = "ChargeStatement";
    }

    toString = () => JSON.stringify(this)
}

class CreateStatement implements Statement{
    type:string;

    constructor(
        public object: string,
        public holder: string,
    )
    {
        this.type = "CreateStatement";
    }

    toString = () => JSON.stringify(this)
}

class PrintStatement implements Statement{
    type:string;

    constructor(
        public message: string,
        public tone: string,
    )
    {
        this.type = "PrintStatement";
    }

    toString = () => JSON.stringify(this)
}

class ClassDefinition implements Declaration{
    type:string;

    constructor(
        public name: string,
        public declarations: Declaration[] 
    )
    {
        this.type = "ClassDefinition";
    }

    toString = () => JSON.stringify(this)
}

class FunctionDefinition implements Declaration{
    type:string;

    constructor(
        public name: string,
        public params: TypedId[],
        public statements: Statement[]
    )
    {
        this.type = "FunctionDefinition";
    }

    toString = () => JSON.stringify(this)
}

class VariableDeclaration implements Declaration{
    type:string;

    constructor(
        public  name: string,
        public typeName: string,
        public isConst: boolean,
        public  expr?: Expression,
    )
    {
        this.type = "VariableDeclaration";
    }

    toString = () => JSON.stringify(this)
}

interface Declaration{}

class BlockItem{
    type:string;

    constructor(
        public which: string,
        public declaration?: Declaration,
        public statement?: Statement
    )
    {
        this.type = "BlockItem";
    }

    toString = () => JSON.stringify(this)
}

class Block{
    type:string;

    constructor(
        public items: BlockItem[]
    )
    {
        this.type = "Block";
    }

    toString = () => JSON.stringify(this)
}

class Document{
    type:string;

    constructor(
        public block: Block,
        public declrBlock?: Block
    )
    {
        this.type = "Document";
    }

    toString = () => JSON.stringify(this)
}

function catcher(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any) {
        try{
            return originalMethod.apply(this, args);
        }
        catch(e){
            if (e instanceof SpelException){
                e.object.le(e.error);
                return undefined;
            }
            else{
                throw e;
            }
        }
    };
}

class SpelVisitor extends AbstractParseTreeVisitor<SpelASTNode> implements spelVisitor<SpelASTNode> {
    NEW_LINE = '\n';

    errors: Array<SpelError> = new Array<SpelError>();

    defaultResult(): SpelASTNode {
        return;
    }

    le(e: any){
        if (e != "" && e != null){
            this.errors.push(new SpelError(new SourceRange(0, 0), e));
        }
    }

    lv(e: SpelError){
        this.errors.push(e);
    }

    check(value:any, message:string|undefined=undefined){
        if (!value){
            throw new SpelException(message, this);
        }
        return value;
    }
    
    checkNull(ctx: ParserRuleContext, field_check: (ctx: any) => any, what: string){
        if (ctx == null){
            throw new SpelException(`ctx was null: ${what}`, this);
        }
        if (field_check(ctx) == null){
            throw new SpelException(`field was null: ${what}`, this);
        }
    }

    ok(){
        return this.errors.length == 0;
    }

    compile(code: string, headless: boolean = true):{status:string, result?:SpelASTNode, errors?:SpelError[]}{
        if (code.length == 0){
            return {
                "status":"error",
                "errors": [new SpelError(new SourceRange(0,0), "empty string is not a valid program")]
            }
        }

        this.clear();

        // Create the lexer and parser
        let inputStream = CharStreams.fromString(code);
        let lexer = new spelLexer(inputStream);
        lexer.removeErrorListeners();
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new spelParser(tokenStream);
        parser.removeErrorListeners();

        const listener = new ErrorListener(this);
        parser.addErrorListener(listener);
        lexer.addErrorListener(listener);

        try {
            let res: SpelASTNode;
    
            if (headless){
                const tree = parser.document();
                res = this.visit(tree);
            }
            else {
                const tree = parser.headless_document();
                res = this.visit(tree);
            }
            let errs = this.errors;
    
            if (this.ok()){
                return {
                    status: 'ok',
                    result: res
                };
            }
            else {
                return {
                    status: 'error',
                    errors: errs
                }
            }   
        }
        catch(e){
            if (e != "" && e != null){
                this.errors.push(new SpelError(new SourceRange(0,0), e.toString()));
            }
            let errs = this.errors;
            return{
                status: 'fatal',
                errors: errs
            }
        }
    }

    @catcher
    visitDocument(ctx: DocumentContext):Document {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._program, 'block');

        let block = this.visitBlock(ctx._program);
        $.check(block);
        let declrBlock = ctx._declr_block ? this.visitBlock(ctx._declr_block) : undefined;

        return new Document(block, declrBlock);
    }

    @catcher
    visitHeadless_document(ctx: Headless_documentContext): Document{
        let $ = this;
        $.checkNull(ctx, ctx => ctx.block(), 'block');

        return new Document(this.visitBlock(ctx.block()));
    }

    @catcher
    visitBlock(ctx: BlockContext):Block {
        let $ = this;
        $.checkNull(ctx, () => true, "block");
        
        let items:BlockItem[] = [];

        for(let bi of ctx.block_item()){
            let block_item = this.visitBlock_item(bi);
            items = items.concat([block_item]);
        }

        return new Block(items);
    }

    @catcher
    visitBlock_item(ctx: Block_itemContext):BlockItem {
        let $ = this;
        if (ctx.statement()){
            return new BlockItem('statement', undefined, this.visitStatement(ctx.statement()));
        }
        if (ctx.declaration()){
            return new BlockItem('declaration', this.visitDeclaration(ctx.declaration()));
        }
        $.unreachable("blockitem did not have a statement or declaration");
    }

    @catcher
    visitStatement(ctx: StatementContext):Statement {
        let $ = this;
        if (ctx.assignment()){
            return $.visitAssignment(ctx.assignment());
        }
        if (ctx.call()){
            return $.visitCall(ctx.call());
        }
        if (ctx.import_statement()){
            return $.visitImport_statement(ctx.import_statement());
        }
        if (ctx.none_statement()){
            return $.visitNone_statement(ctx.none_statement());
        }
        if (ctx.while_statement()){
            return $.visitWhile_statement(ctx.while_statement());
        }
        if (ctx.print_statement()){
            return $.visitPrint_statement(ctx.print_statement());
        }
        if (ctx.throw_statement()){
            return $.visitThrow_statement(ctx.throw_statement());
        }
        if (ctx.charge_statement()){
            return $.visitCharge_statement(ctx.charge_statement());
        }
        if (ctx.create_statement()){
            return $.visitCreate_statement(ctx.create_statement());
        }
        if (ctx.any_statement()){
            return $.visitAny_statement(ctx.any_statement());
        }
        throw new SpelException("No valid statement found", $);
    }

    @catcher
    visitImport_statement(ctx: Import_statementContext): Import{
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'path');
        let imp = new Import(ctx.IDENTIFIER().text);
        return imp;
    }

    @catcher
    visitNone_statement(ctx: None_statementContext): NoneStatement{
        return new NoneStatement();
    }

    @catcher
    visitWhile_statement(ctx: While_statementContext): WhileStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._expr, "expr");

        const expr = $.visitExpression(ctx._expr);
        $.check(expr);
        const stmts = $.visitList_of_statements(ctx._stmts);
        $.check(stmts);
        
        return new WhileStatement(expr, stmts);
    }

    @catcher
    visitAny_statement(ctx: Any_statementContext): AnyStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx, "identifiers");

        let out = '';
        ctx.IDENTIFIER().map(el => el.toString().toLowerCase()).forEach(function (el, idx) {
            var add = el.toLowerCase();
            out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
        });
        
        return new AnyStatement(out);
    }

    @catcher
    visitThrow_statement(ctx: Throw_statementContext): ThrowStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._object, "object");

        return new ThrowStatement(ctx._object.text);
    }

    @catcher
    visitCharge_statement(ctx: Charge_statementContext): ChargeStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._el, "element");

        return new ChargeStatement(ctx._el.text);
    }

    @catcher
    visitCreate_statement(ctx: Create_statementContext): CreateStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._where, "where");
        $.checkNull(ctx, (ctx) => ctx._object, "object");

        return new CreateStatement(ctx._object.text, ctx._where.text);
    }

    @catcher
    visitPrint_statement(ctx: Print_statementContext): PrintStatement {
        let $ = this;
        $.checkNull(ctx, (ctx) => ctx._msg, "message");
        $.checkNull(ctx, (ctx) => ctx._tone, "tone");

        return new PrintStatement(ctx._msg.text, ctx._tone.text);
    }

    @catcher
    visitList_of_statements(ctx: List_of_statementsContext):Statement[] {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.statement(), 'statements');

        let statement = this.visitStatement(ctx.statement());
        $.check(statement);
        
        let stmts: Statement[] = [statement];

        let list_of_statements = ctx._next ? this.visitList_of_statements(ctx._next) : undefined;
        if (list_of_statements){
            stmts = stmts.concat(list_of_statements);
        }
        
        return stmts;
    }

    @catcher
    visitDeclaration(ctx: DeclarationContext):Declaration {
        let $ = this;
        if (ctx == null){
            throw new SpelException("no valid declaration found", this);
        }
        if (ctx.variable_declaration()){
            return $.visitVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition()){
            return $.visitClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition()){
            return $.visitFunction_definition(ctx.function_definition());
        }
    }

    @catcher
    visitList_of_declarations(ctx: List_of_declarationsContext):Declaration[] {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.declaration(), 'declaration');
        
        let declaration = $.visitDeclaration(ctx.declaration());
        $.check(declaration);

        let decls: Declaration[] = [declaration];
        let list_of_declarations = ctx._next ? $.visitList_of_declarations(ctx._next) : undefined;
        if (list_of_declarations){
            decls = decls.concat(list_of_declarations);
        }
        
        return decls;
    }

    @catcher
    visitVariable_declaration(ctx: Variable_declarationContext):VariableDeclaration {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'name');

        let expr;
        if (ctx.expression()){
            expr = $.visitExpression(ctx.expression());
        }

        return new VariableDeclaration(ctx._name.text, ctx._arg_type.text, ctx.ARTIFACT() != undefined, expr);
    }

    @catcher
    visitFunction_definition(ctx: Function_definitionContext):FunctionDefinition {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.IDENTIFIER(), 'name');

        let params = $.visitList_typed_identifiers(ctx.list_typed_identifiers());
        let statements = $.visitList_of_statements(ctx.list_of_statements());
        $.check(params);
        $.check(statements);

        return new FunctionDefinition(ctx._func_type.text, params, statements);
    }

    @catcher
    visitClass_definition(ctx: Class_definitionContext):ClassDefinition {
        let $ = this;
        $.checkNull(ctx, ctx => ctx.list_of_declarations(), 'declarations');

        let declarations = this.visitList_of_declarations(ctx.list_of_declarations());
        $.check(declarations);

        return new ClassDefinition(ctx._name.text, declarations);
    }

    @catcher
    visitAssignment(ctx: AssignmentContext):Assignment{
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expr');
        $.checkNull(ctx, ctx => ctx._value, 'value');

        let value = this.visitExpression(ctx._value);
        let expr = this.visitExpression(ctx._value);
        $.check(value);
        $.check(expr);
        let assign = new Modification(expr, value);
        
        return assign;
    }

    @catcher
    visitModification(ctx: ModificationContext): Modification{
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expr');
        $.checkNull(ctx, ctx => ctx._value, 'value');

        let value = this.visitExpression(ctx._value);
        let expr = this.visitExpression(ctx._expr);
        $.check(value);
        $.check(expr);
        let mod = new Modification(expr, value);
        
        return mod;
    }

    @catcher
    visitCall(ctx: CallContext):Call{
        let $ = this;
        $.checkNull(ctx, ctx => ctx._expr, 'expression');

        let expr = this.visitExpression(ctx._expr);
        let params: Expression[];
        if (ctx._params){
            params = this.visitList_expressions(ctx._params);
            $.check(expr);
        }
        $.check(expr);

        return new Call(expr, params);
    }

    @catcher
    visitTerminal(ctx: TerminalNode):string{
        return  ctx.toString(); //todo
    }

    @catcher
    visitList_typed_identifiers(ctx: List_typed_identifiersContext): TypedId[]{
        let $ = this;
        $.checkNull(ctx, ctx => ctx._next, 'params');
        
        let tps: TypedId[] = [new TypedId(ctx._name.text,ctx._type.text)];
        let list_of_types = ctx._next ? this.visitList_typed_identifiers(ctx._next) : undefined;
        if (list_of_types){
            tps = tps.concat(list_of_types);    
        }
        
        return tps;
    }

    @catcher
    visitExpression(ctx: ExpressionContext):Expression {
        let $ = this;
        $.checkNull(ctx, () => true, 'ctx');

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
        if (ctx._call_expression_t){
            return this.visitCall(ctx._call_expression_t);
        } 
        if (ctx._modifaction_expression_t){
            return this.visitModification(ctx._modifaction_expression_t);
        }

        let lexpr = this.visitExpression(ctx._lexpr);
        let rexpr = this.visitExpression(ctx._rexpr);
        $.check(lexpr);
        $.check(rexpr);
        let binary = new BinaryExpression(ctx._sign.text, lexpr, rexpr);

        return binary;
    }

    @catcher
    visitList_expressions(ctx: List_expressionsContext):Expression[] {
        let $ = this;
        $.checkNull(ctx, ctx => ctx._next, 'params');
        
        let expr = this.visitExpression(ctx.expression());
        $.check(expr);

        let exprs: Expression[] = [expr];
        let list_of_expressions = ctx._next ? this.visitList_expressions(ctx._next) : undefined;
        if (list_of_expressions){
            exprs = exprs.concat(list_of_expressions);
        }
        
        return exprs;
    }

    @catcher
    visitBasic_type_expression(ctx: Basic_type_expressionContext):BasicTypeExpression{
        if (ctx.NUMBER()){
            return new BasicTypeExpression(ctx._number_type.text, 'number');
        }
        else if (ctx.STRING()){
            return new BasicTypeExpression(ctx._number_type.text, 'string');
        }
    }

    @catcher
    visitMinus_expression(ctx: Minus_expressionContext):MinusExpression {
        let expr = this.visitExpression(ctx.expression());

        return new MinusExpression(expr);
    }
    
    @catcher
    visitParen_expression(ctx: Paren_expressionContext): ParenExpression{
        let expr = this.visitExpression(ctx.expression());

        return new ParenExpression(expr);
    }

    @catcher
    visitField_expression(ctx: Field_expressionContext): FieldExpression{
        let expr = this.visitExpression(ctx.expression());

        return new FieldExpression(ctx.IDENTIFIER().text, expr);
    }

    @catcher
    visitNamed_expression(ctx: Named_expressionContext): NamedExpression{
        return new NamedExpression(ctx.IDENTIFIER().text);
    }

    clear(){
        this.errors.length = 0;
    }

    unreachable(msg: string){
        this.check(false, msg);
    }
}

export{
    SpelVisitor,
    SpelError,
    SourceRange,
    SpelASTNode
};