export declare class Auth {
    $rootScope: any;
    private rootScope;
    constructor($http: any, $q: any, $rootScope: any);
    checkUserCredentials(username: any, password: any): Promise<{}>;
    setToLocalStorage(key: string, val: Object): void;
    clearLocalStorage(key: string): void;
    getFromLocalStorage(key: string): any;
    clearCredentials(): void;
    setCredentials(username: any, password: any): void;
}
