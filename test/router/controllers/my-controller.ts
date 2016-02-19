import {Controller} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import {MyService} from "../services/my-service";

@Controller
class MyController {

    @Inject private service:MyService;

    constructor(){
        console.info("MyController",this.service);
    }
}