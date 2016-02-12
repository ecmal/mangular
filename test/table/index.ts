import Angular from "mangular/injector";
import {Module} from "mangular/injector";
import {Inject} from "mangular/injector";

import "mangular/angular/material";
import "mangular/angular/table";

import "./scripts/controller";

@Module
class MyApp {

    @Inject('$mdThemingProvider') themes:any;

    constructor(){
        this.themes.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
    }
}

Angular.init('mangular/table/index');

