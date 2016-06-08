export interface Logger {
    [k:string]:any;
    log(...args:any[]);
    info(...args:any[]);
    warn(...args:any[]);
    error(...args:any[]);
    debug(...args:any[]);
}

export interface Scope {
    [k:string]:any;
    $new(isolate:boolean, parent?:Scope):Scope;
    $watch(watchExpression:string|Function, listener:Function, objectEquality?:boolean);
}

