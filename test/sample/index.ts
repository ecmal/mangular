import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Inject} from "mangular/annotate";

import "mangular/angular/animate";
import "mangular/angular/aria";
import "mangular/angular/material";

import "./api/provider";
import "./user/controller";
import "./user/service";


class MyApp {


    @Config testConfig(
        @Inject('UserServiceProvider') usersProvider:any,
        @Inject('ApiServiceProvider') apiProvider:any,
        @Inject('$mdThemingProvider') $mdThemingProvider:any,
        @Inject('$mdIconProvider') $mdIconProvider:any
    ){
        console.info(usersProvider);
        console.info(apiProvider);
        apiProvider.setService('one');
        $mdIconProvider
            .defaultIconSet("assets/svg/avatars.svg", 128);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }

}

Angular.start('mangular/sample/index');

