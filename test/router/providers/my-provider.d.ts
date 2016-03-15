export declare class HttpService {
    private http;
    constructor(http: any);
}
export interface HttpServiceDefaults {
    cache: any;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    headers: string;
    paramSerializer: string | Function;
}
export declare class HttpServiceProvider {
    private provider;
    protected provide($http: any): HttpService;
    defaults: HttpServiceDefaults;
    interceptors: string[];
    useApplyAsync(value?: boolean): any;
    useLegacyPromiseExtensions(value?: boolean): any;
}
