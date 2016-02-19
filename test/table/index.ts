import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import "mangular/angular/material";
import "mangular/angular/table";

import "./scripts/controller";


class MyApp {
    @Config
    themes(@Inject('$mdThemingProvider') themes:any){
        themes.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
    }
}

Angular.start('mangular/table/index');

