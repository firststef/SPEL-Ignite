import { spelVisitor } from './antlr_generated/spelVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AssignmentContext, BlockContext, Block_itemContext, CallContext, Class_definitionContext, DeclarationContext, DocumentContext, ExpressionContext, Function_definitionContext, Headless_documentContext, List_expressionsContext, List_of_declarationsContext, List_of_statementsContext, List_typed_identifiersContext, Minus_expressionContext, StatementContext, TypeContext, Variable_declarationContext } from './antlr_generated/spelParser'

class Param{
    name: string;
    type: string;
}

class Type{
    type: string;
}

class List_typed_identifiersData{
    params: Array<Param>;
}

class Variant{
    source: string;
    data: List_typed_identifiersData|Type|{};

    constructor(str: string, obj = {}){
        this.source = str;
    }

    toString(){
        return this.source;
    }
}

class SpelVisitor extends AbstractParseTreeVisitor<Variant> implements spelVisitor<Variant> {
    NEW_LINE = '\n';
    is_in_class_definition = false;

    protected defaultResult(): Variant {
        return;
    }

    visitDocument(ctx: DocumentContext) {
        if (ctx.block){
            return new Variant('The tale begins.' + this.NEW_LINE + this.visitBlock(ctx.block()));
        }
        return new Variant('');
    }

    visitHeadless_document(ctx: Headless_documentContext){
        if (ctx.block){
            return this.visitBlock(ctx.block());
        }
        return new Variant('');
    }

    visitBlock(ctx: BlockContext): Variant {
        if (ctx == undefined) return new Variant('');
        if (ctx.block){
            return new Variant(this.visitBlock(ctx.block()).toString() + this.NEW_LINE + (ctx.block_item ? this.visitBlock_item(ctx.block_item()).toString() : ''));
        }
        if (ctx.block_item){
            return this.visitBlock_item(ctx.block_item());
        }
        return new Variant('');
    }

    visitBlock_item(ctx: Block_itemContext){
        if (ctx.statement){
            return this.visitStatement(ctx.statement());
        }
        if (ctx.declaration){
            return this.visitDeclaration(ctx.declaration());
        }
        return new Variant('');
    }

    visitStatement(ctx: StatementContext){
        if (ctx == undefined) return new Variant('');
        if (ctx.assignment){
            return this.visitAssignment(ctx.assignment());
        }
        if (ctx.call){
            return this.visitCall(ctx.call());
        }
        if (ctx.IMP && ctx.IDENTIFIER){
            return new Variant('import * as ' + ctx.IDENTIFIER() + ' from \'' + ctx.IDENTIFIER() + '\'');
        }
        return new Variant('');
    }

    visitList_of_statements(ctx: List_of_statementsContext): Variant{
        if (ctx.list_of_statements()){
            return new Variant(this.visitStatement(ctx.statement()).toString() + this.NEW_LINE + this.visitList_of_statements(ctx.list_of_statements()).toString());
        }
        if (ctx.statement){
            return this.visitStatement(ctx.statement());
        }
        return new Variant('');
    }

    visitDeclaration(ctx: DeclarationContext){
        if (ctx.variable_declaration){
            return this.visitVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition){
            return this.visitClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition){
            return this.visitFunction_definition(ctx.function_definition());
        }
        return new Variant('');
    }

    visitList_of_declarations(ctx: List_of_declarationsContext): Variant{
        if (ctx.list_of_declarations()){
            return new Variant(this.visitDeclaration(ctx.declaration()).toString() + this.NEW_LINE + this.visitList_of_declarations(ctx.list_of_declarations()).toString());
        }
        if (ctx.declaration){
            return this.visitDeclaration(ctx.declaration());
        }
        return new Variant('');
    }

    visitVariable_declaration(ctx: Variable_declarationContext){
        if (ctx.IDENTIFIER && ctx.expression){
            return new Variant((this.is_in_class_definition ? 'let ' : '') + ctx.IDENTIFIER() + ' = ' + this.visitExpression(ctx.expression()),
            <Type>{type: this.visitType(ctx.type()).toString()});
        }
        return new Variant('');
    }

    visitFunction_definition(ctx: Function_definitionContext){
        if (ctx.type && ctx.IDENTIFIER && ctx.list_typed_identifiers && ctx.list_of_statements){
            let result = this.visitList_typed_identifiers(ctx.list_typed_identifiers());
            (this.is_in_class_definition ? 'function ' : '') + ctx.IDENTIFIER() 
            + '(' + (<List_typed_identifiersData>result.data).params.map((p: Param) => p.name).join(',') + ')' + this.NEW_LINE +
            + '{' +  this.NEW_LINE 
            + this.visitList_of_statements(ctx.list_of_statements()).toString() + this.NEW_LINE 
            + '}';
        }
        return new Variant('');
    }

    visitClass_definition(ctx: Class_definitionContext){
        if (ctx.IDENTIFIER && ctx.list_of_declarations){
            let old_is_in_class_definition = this.is_in_class_definition;
            this.is_in_class_definition = true;
            let result = this.visitList_of_declarations(ctx.list_of_declarations());
            this.is_in_class_definition = old_is_in_class_definition;
            return new Variant('class ' + ctx.IDENTIFIER() + ' { ' + result.toString() + '}');
        }
        return new Variant('');
    }

    visitAssignment(ctx: AssignmentContext){
        if (ctx._name && ctx._value){
            return new Variant((ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + ' = ' + this.visitExpression(ctx.expression()).toString());
        }
        return new Variant('');
    }

    visitCall(ctx: CallContext){
        if (ctx._name && ctx._params){
            return new Variant((ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + '(' + this.visitList_expressions(ctx.list_expressions()).toString() + ')');
        }
        return new Variant('');
    }

    visitType(ctx: TypeContext){
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

    visitList_typed_identifiers(ctx: List_typed_identifiersContext): Variant{
        if (ctx.type && ctx.IDENTIFIER){
            if (ctx._next){
                let res = this.visitList_typed_identifiers(ctx.list_typed_identifiers());
                return new Variant('', [
                    <Param>{
                        name: this.visit(ctx.IDENTIFIER()).toString(),
                        type: this.visitType(ctx.type()).toString()
                    }
                ].concat((<List_typed_identifiersData>res.data).params)
                );
            }
            return new Variant('', { params:[
                <Param>{
                    name: this.visit(ctx.IDENTIFIER()).toString(),
                    type: this.visitType(ctx.type()).toString()
                }
            ]});
        }
        return new Variant('');
    }

    visitExpression(ctx: ExpressionContext){
        if (ctx.NUMBER){
            return this.visitTerminal(ctx.NUMBER());
        }
        return new Variant('');
    }

    visitList_expressions(ctx: List_expressionsContext): Variant{
        if (ctx.list_expressions()){
            return new Variant(this.visitExpression(ctx.expression()).toString() + this.NEW_LINE + this.visitList_expressions(ctx.list_expressions()).toString());
        }
        if (ctx.expression){
            return this.visitExpression(ctx.expression());
        }
        return new Variant('');
    }

    visitMinus_expression(ctx: Minus_expressionContext){
        return new Variant('');
    }
}

export{
    SpelVisitor
};