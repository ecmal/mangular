import {Provider} from "mangular/annotate";
import {Inject} from "mangular/annotate";


export class HttpService {
    private http:any;
    constructor(http){
        this.http = http;
    }
}

export interface HttpServiceDefaults{
    cache           :any;
    xsrfCookieName  :string;
    xsrfHeaderName  :string;
    headers         :string;
    paramSerializer :string|Function;
}

@Provider('HttpService')
export class HttpServiceProvider {

    @Inject('$httpProvider')
    private provider:any;

    protected provide(@Inject $http){
        return new HttpService($http);
    }

    public get defaults():HttpServiceDefaults{
        return this.provider.defaults;
    }
    public set defaults(v:HttpServiceDefaults){
        this.provider.defaults = v;
    }

    public get interceptors():string[]{
        return this.provider.interceptors;
    }
    public set interceptors(v:string[]){
        this.provider.interceptors = v;
    }

    public useApplyAsync(value?:boolean){
        return this.provider.useApplyAsync(value);
    }
    public useLegacyPromiseExtensions(value?:boolean){
        return this.provider.useLegacyPromiseExtensions(value);
    }

}