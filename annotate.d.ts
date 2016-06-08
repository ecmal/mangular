import { Decorator } from "runtime/decorators";
import { Member } from "runtime/reflect/class";
export declare class Inject extends Decorator {
    private static map;
    protected name: string;
    constructor(name?: string);
    decorate(member: Member): void;
}
export declare class Controller extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Service extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Config extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Run extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Provider extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Directive extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Component extends Decorator {
    private options;
    constructor(options?: any);
    decorate(member: Member): void;
}
export declare class Filter extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Value extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Const extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Factory extends Decorator {
    constructor(...args: any[]);
    decorate(member: Member): void;
}
export declare class Mangular {
    static modules: {
        [k: string]: Module;
    };
    static start(module: any): void;
    private static getClassFunction(cls);
    private static initController(m);
    private static initService(m);
    private static initComponent(m);
}
export default Mangular;
