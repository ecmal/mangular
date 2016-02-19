import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Run} from "mangular/annotate";

import {Inject} from "mangular/annotate";
import "mangular/angular/animate";

import {HttpServiceProvider} from "./providers/my-provider";

import "./providers/my-provider";
import "./controllers/my-controller";
import "./directives/my-directive";


class MyOther {

    @Config
    static config(@Inject('$httpProvider') http, @Inject myConst){
        console.info(this.name,http);
        console.info("CONST",myConst);
    }

    @Run
    static run(@Inject http:HttpServiceProvider){
        console.info(this.name,"RUN",http.defaults)
    }

}

class MyApp {

    @Config
    static config(@Inject('$httpProvider') http){
        //console.info(this.name,http)
    }

    @Run
    static run(@Inject('$httpProvider') http){
        //console.info(this.name,http)
    }

}


Angular.start('mangular/router/index');

