import Angular from "mangular/injector";
import {Module} from "mangular/injector";
import {Inject} from "mangular/injector";

import "mangular/angular-animate";
import "mangular/angular-aria";
import "mangular/angular-material";

import "./api/provider";
import "./user/controller";
import "./user/service";

@Module
class MyApp {

    @Inject('UserServiceProvider') usersProvider:any;
    @Inject('ApiServiceProvider') apiProvider:any;
    @Inject $mdThemingProvider:any;
    @Inject $mdIconProvider:any;

    constructor(){
        console.info(this.usersProvider);
        console.info(this.apiProvider);
        this.apiProvider.setService('one');
        console.info(this.$mdThemingProvider);
        console.info(this.$mdIconProvider);
        this.$mdIconProvider
            .defaultIconSet("assets/svg/avatars.svg"          , 128)
            .icon("menu"       , "assets/svg/menu.svg"        , 24)
            .icon("share"      , "assets/svg/share.svg"       , 24)
            .icon("google_plus", "assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "assets/svg/phone.svg"       , 512);

        this.$mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }
}

Angular.init('mangular/sample/test');

