import {Component,Inject} from "mangular/annotate";
import LogInTemplate from '../template/pages/logIn'

import {Auth} from "../services/auth";


@Component({
    name        : 'wcLogin',
    template    : LogInTemplate
})
class LogIn{

    @Inject
    private userAuthService :Auth;
    @Inject
    private $location:any;
    @Inject
    private $rootScope:any;


    private username:string;
    private password:string;
    constructor(){
        console.info("LogInComponent constructor");
        console.log(this.userAuthService);
        this.submit = this.submit.bind(this);

    }

    submit(){
        this.userAuthService.checkUserCredentials(this.username,this.password).then((exist)=>{
            if(exist){
                this.userAuthService.setCredentials(this.username,this.password);
                console.log("$location",this.$location);
                this.$location.path('/dashboard');
                return;
            }
            alert("Wrong Password");
        }).catch((e)=>{
            console.error(e);
        });
    }
}