import {Controller} from "mangular/injector";
import {Inject} from "mangular/injector";

import {ApiService} from "./service";

@Controller
class ApiController {

    @Inject $log:any;
    @Inject api:ApiService;

    constructor(){
        this.$log.debug('ApiController');
        console.info(this.api.name);
    }
}