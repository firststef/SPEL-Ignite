import { spelParser } from "./spelParser";

const BaseCstVisitor = spelParser.getBaseCstVisitorConstructor();

class SpelVisitor extends BaseCstVisitor{
    constructor() {
        super();
        this.validateVisitor();
    }

    document(ctx: any){
        if (ctx.block){
            return 'start ' + this.visit(ctx.block);
        }
        else{
            return 'empty';
        }
    }

    block(ctx: any){
        return 'program';
    }
}

const spelVisitor = new SpelVisitor();

export{
    SpelVisitor,
    spelVisitor
};