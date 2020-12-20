import { spelVisitor } from './antlr_generated/spelVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { BlockContext, DocumentContext } from './antlr_generated/spelParser'

class SpelVisitor extends AbstractParseTreeVisitor<number> implements spelVisitor<number> {
    protected defaultResult(): number {
        return;
    }

    visitDocument(ctx: DocumentContext): number{
        console.log('wow');
        
        return 0;
    }

    visitBlock(ctx: BlockContext): number{

        return 0;
    }

}

export{
    SpelVisitor
};