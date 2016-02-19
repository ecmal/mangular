import {Service} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import {HttpService} from "../providers/my-provider";


@Service
export class MyService {

    @Inject private service:HttpService;

    private q:any;
    private http:any;

    constructor($http,$q){
        this.q = $q;
        this.http = $http;
        console.info("MyService.new",this.service);
    }
}