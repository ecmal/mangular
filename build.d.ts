export declare class Main {
    private angularVersion;
    private gitBaseUrl;
    private config;
    constructor();
    static changeModuleWrappers(data: any, file: any): any;
    static changeCssWrappers(data: any): string;
    static changeAngularWrappers(data: any, file: any): any;
    getConfiguration(): void;
    getFiles(): void;
    static createDir(path: any, recursive?: boolean): void;
    writeToSrcDir(fileName: any, data: any): void;
    changeWrappers(options: any): void;
    getFile(repo: any, version: any, file: any, destination: any): Promise<{}>;
}
