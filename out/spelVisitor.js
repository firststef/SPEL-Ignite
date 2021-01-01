"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpelGenerateSourceVariant = exports.SpelGenerateSourceVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
class Param {
}
class Type {
}
/*
function getSourceRange(antlr4::tree::TerminalNode* node) {
    return getSourceRange(node->getSymbol());
}
function getSourceRange(const antlr4::ParserRuleContext* rule) {
    return getSourceRange(rule->start, rule->stop);
}
*/
function getSourceRange(start, stop) {
    if (stop == null) {
        stop = start;
    }
    let start_index = 0;
    let size = 1;
    if (start) {
        start_index = start.startIndex;
        size = start.startIndex - start_index + 1;
    }
    if (stop) {
        const stop_index = stop.startIndex;
        size = (stop_index >= start_index ? stop_index - start_index : start_index - stop_index) + 1;
    }
    return new SourceRange(start_index, size);
}
class SourceRange {
    constructor(start, size) {
        this.start = start;
        this.size = size;
    }
}
class SpelError {
    constructor(range, msg) {
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
class SpelGenerateSourceVariant {
}
exports.SpelGenerateSourceVariant = SpelGenerateSourceVariant;
class SpelGenerateSourceVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.NEW_LINE = '\n';
        this.is_in_class_definition = false;
        this.errors = new Array();
    }
    defaultResult() {
        return;
    }
    check(value, message) {
        if (!value) {
            this.errors.push(new SpelError(new SourceRange(0, 0), message));
            return undefined;
        }
        return value;
    }
    checkNull(ctx, field, what) {
        if (!ctx) {
            this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
            return false;
        }
        if (!field) {
            this.errors.push(new SpelError(new SourceRange(0, 0), what + 'cannot be unspecified'));
            return false;
        }
        return true;
    }
    visitDocument(ctx) {
        if (!this.checkNull(ctx, ctx.block(), 'block'))
            return;
        if (ctx.block()) {
            let block = this.visitBlock(ctx.block());
            if (!(block === null || block === void 0 ? void 0 : block.source))
                return;
            return {
                source: 'Genesis();' + this.NEW_LINE + block.source
            };
        }
    }
    visitHeadless_document(ctx) {
        if (!this.checkNull(ctx, ctx.block(), 'block'))
            return;
        if (ctx.block()) {
            return this.visitBlock(ctx.block());
        }
    }
    visitBlock(ctx) {
        if (ctx._next) {
            let block = this.visitBlock(ctx.block());
            if (!(block === null || block === void 0 ? void 0 : block.source))
                return;
            let block_item = this.visitBlock_item(ctx.block_item());
            if (!(block_item === null || block_item === void 0 ? void 0 : block_item.source))
                return;
            return { source: block.source + this.NEW_LINE + block_item.source };
        }
        if (ctx.block_item()) {
            return this.visitBlock_item(ctx.block_item());
        }
    }
    visitBlock_item(ctx) {
        if (ctx.statement()) {
            return this.visitStatement(ctx.statement());
        }
        if (ctx.declaration()) {
            return this.visitDeclaration(ctx.declaration());
        }
    }
    visitStatement(ctx) {
        if (ctx.assignment()) {
            return this.visitAssignment(ctx.assignment());
        }
        if (ctx.call()) {
            return this.visitCall(ctx.call());
        }
        if (ctx.IMP() && ctx.IDENTIFIER()) {
            return {
                source: 'import * as ' + ctx.IDENTIFIER() + ' from \'' + ctx.IDENTIFIER() + '\''
            };
        }
    }
    visitList_of_statements(ctx) {
        if (ctx.list_of_statements()) {
            let statement = this.visitStatement(ctx.statement());
            if (!(statement === null || statement === void 0 ? void 0 : statement.source))
                return;
            let list_of_statements = this.visitList_of_statements(ctx.list_of_statements());
            if (!(list_of_statements === null || list_of_statements === void 0 ? void 0 : list_of_statements.source))
                return;
            return {
                source: statement.source + this.NEW_LINE + list_of_statements.source
            };
        }
        if (ctx.statement()) {
            return this.visitStatement(ctx.statement());
        }
    }
    visitDeclaration(ctx) {
        if (ctx.variable_declaration()) {
            return this.visitVariable_declaration(ctx.variable_declaration());
        }
        if (ctx.class_definition()) {
            return this.visitClass_definition(ctx.class_definition());
        }
        if (ctx.function_definition()) {
            return this.visitFunction_definition(ctx.function_definition());
        }
    }
    visitList_of_declarations(ctx) {
        if (ctx.list_of_declarations()) {
            let declaration = this.visitDeclaration(ctx.declaration());
            if (!(declaration === null || declaration === void 0 ? void 0 : declaration.source))
                return;
            let list_of_declarations = this.visitList_of_declarations(ctx.list_of_declarations());
            if (!(list_of_declarations === null || list_of_declarations === void 0 ? void 0 : list_of_declarations.source))
                return;
            return {
                source: declaration.source + this.NEW_LINE + list_of_declarations.source
            };
        }
        if (ctx.declaration()) {
            return this.visitDeclaration(ctx.declaration());
        }
    }
    visitVariable_declaration(ctx) {
        if (ctx.IDENTIFIER() && ctx.expression()) {
            let expr = this.visitExpression(ctx.expression());
            if (!(expr === null || expr === void 0 ? void 0 : expr.source))
                return;
            let type = this.visitType(ctx.type());
            if (!(type === null || type === void 0 ? void 0 : type.source))
                return;
            return {
                source: (this.is_in_class_definition ? 'let ' : '') + ctx.IDENTIFIER() + ' = ' + expr.source,
                'type': type === null || type === void 0 ? void 0 : type.source
            };
        }
    }
    visitFunction_definition(ctx) {
        if (ctx.type() && ctx.IDENTIFIER() && ctx.list_typed_identifiers() && ctx.list_of_statements()) {
            let result = this.visitList_typed_identifiers(ctx.list_typed_identifiers());
            if (!(result === null || result === void 0 ? void 0 : result.typed_list) || !(result === null || result === void 0 ? void 0 : result.source))
                return;
            let statements = this.visitList_of_statements(ctx.list_of_statements());
            if (!(statements === null || statements === void 0 ? void 0 : statements.source))
                return;
            return {
                source: (this.is_in_class_definition ? 'function ' : '') + ctx.IDENTIFIER()
                    + '(' + result.source + ')' + this.NEW_LINE +
                    +'{' + this.NEW_LINE
                    + statements.source + this.NEW_LINE
                    + '}'
            };
        }
    }
    visitClass_definition(ctx) {
        if (ctx.IDENTIFIER() && ctx.list_of_declarations()) {
            let old_is_in_class_definition = this.is_in_class_definition;
            this.is_in_class_definition = true;
            let result = this.visitList_of_declarations(ctx.list_of_declarations());
            this.is_in_class_definition = old_is_in_class_definition;
            if (!(result === null || result === void 0 ? void 0 : result.source))
                return;
            return {
                source: 'class ' + ctx.IDENTIFIER() + ' { ' + result.toString() + '}'
            };
        }
    }
    visitAssignment(ctx) {
        if (ctx._name && ctx._value) {
            let expr = this.visitExpression(ctx.expression());
            if (!(expr === null || expr === void 0 ? void 0 : expr.source))
                return;
            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + ' = ' + expr.source + ';'
            };
        }
    }
    visitCall(ctx) {
        if (ctx._name && ctx._params) {
            let expr = this.visitList_expressions(ctx.list_expressions());
            if (!(expr === null || expr === void 0 ? void 0 : expr.source))
                return;
            return {
                source: (ctx._owner ? ctx._owner.text + '.' : '') + ctx._name.text + '(' + expr.source + ')'
            };
        }
    }
    visitType(ctx) {
        if (ctx.POINTS()) {
            return this.visitTerminal(ctx.POINTS());
        }
        if (ctx.PRECISE()) {
            return this.visitTerminal(ctx.PRECISE());
        }
        if (ctx.RUNE()) {
            return this.visitTerminal(ctx.RUNE());
        }
        if (ctx.TOME()) {
            return this.visitTerminal(ctx.TOME());
        }
        if (ctx.IDENTIFIER()) {
            return this.visitTerminal(ctx.IDENTIFIER());
        }
    }
    visitTerminal(ctx) {
        return {
            source: ctx.toString() //todo
        };
    }
    visitList_typed_identifiers(ctx) {
        if (ctx.type() && ctx.IDENTIFIER()) {
            if (ctx._next) {
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
            source: ''
        };
    }
    visitExpression(ctx) {
        if (ctx.NUMBER()) {
            return this.visitTerminal(ctx.NUMBER());
        }
    }
    visitList_expressions(ctx) {
        if (ctx.list_expressions()) {
            let expr = this.visitExpression(ctx.expression());
            if (!(expr === null || expr === void 0 ? void 0 : expr.source))
                return;
            let list_expr = this.visitList_expressions(ctx.list_expressions());
            if (!(list_expr === null || list_expr === void 0 ? void 0 : list_expr.source))
                return;
            return {
                source: expr.source + this.NEW_LINE + list_expr.source
            };
        }
        if (ctx.expression()) {
            return this.visitExpression(ctx.expression());
        }
    }
    visitMinus_expression(ctx) {
        return { source: '' };
    }
}
exports.SpelGenerateSourceVisitor = SpelGenerateSourceVisitor;
//# sourceMappingURL=spelVisitor.js.map