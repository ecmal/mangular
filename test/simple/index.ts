import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import "./api/provider";
import "./api/controller";


class MyApp {
    @Config config(
        @Inject('ApiServiceProvider') api:any
    ){
        api.setService('one');
        console.info(api.service);
    }
}

Angular.start('mangular/simple/index');

