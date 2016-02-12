import Angular from "mangular/injector";
import {Module} from "mangular/injector";
import {Inject} from "mangular/injector";

import "./api/provider";
import "./api/controller";

@Module
class MyApp {

    @Inject('ApiServiceProvider') api:any;

    constructor(){
        this.api.setService('one');
        console.info(this.api.service)
    }
}

Angular.init('mangular/simple/test');

