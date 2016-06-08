export interface Logger {
    [k: string]: any;
    log(...args: any[]): any;
    info(...args: any[]): any;
    warn(...args: any[]): any;
    error(...args: any[]): any;
    debug(...args: any[]): any;
}
export interface Scope {
    [k: string]: any;
    $new(isolate: boolean, parent?: Scope): Scope;
    $watch(watchExpression: string | Function, listener: Function, objectEquality?: boolean): any;
}
