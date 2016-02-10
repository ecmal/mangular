import {angular} from "./angular";
import {IModule} from "./angular";

import "./angular-aria";
import "./angular-animate";
import "./angular-material";
import "./angular-route";

import CSS from "./angular-material.css";

export class Mangular {
    private static module:IModule;
    static init(name:string,view:string):void {
        this.module = angular.module(name,[
            'ngRoute',
            'ngMaterial'
        ]);
        console.info(this.module.component);
        this.initStyle();
        this.initViews(view);
    }
    static initStyle(){
        var css = document.createElement('style');
        css.setAttribute("md-main-style","");
        css.innerHTML = CSS;
        document.querySelector('head').appendChild(css);
    }
    static initViews(main:string){
        var module = this.module;
        Object.keys(View['MAP']).forEach(i=>{
            var controller:any = View['MAP'][i].controller;
            var injectServices = [];
            var injectNames = [];
            Object.keys(controller.prototype).forEach(k=>{
                var service = Reflect.getMetadata(controller.prototype,k,'ng:inject');
                if(service){
                    injectNames.push(k);
                    injectServices.push(`$${service}`);
                }
            });
            module.controller(i,[...injectServices,(...params)=>{
                var instance = Object.create(controller.prototype);
                for(var i=0;i<injectNames.length;i++){
                    instance[injectNames[i]] = params[i];
                }
                controller.apply(instance);
                return instance;
            }]);
        });
        module.config(($routeProvider)=>{
            for(var i in View['MAP']){
                var v = View['MAP'][i];
                $routeProvider.when(v.path, {
                    controller  : i,
                    template    : v.options.template
                })
            }
            $routeProvider.otherwise({redirectTo:main});
        });
    }
}

export function View(path:string,options:any):any {
    var VIEWS = View['MAP'] || (View['MAP']={});
    return (controller:any)=>{
        VIEWS[controller.name] = {
            controller,path,options
        };
    }
}

/*
enum DirectiveRestrict {
    ELEMENT     = 1, // 001
    ATTRIBUTE   = 2, // 010
    CLASS       = 4  // 100
}

interface DirectiveOptions {
    template : string;
    restrict : number;
    scope    : {
        property : '(@ = =? =* =*? < <? &)attr'
    }
}

var opt:DirectiveOptions = {
    template : 'aaa',
    restrict : DirectiveRestrict.ATTRIBUTE | DirectiveRestrict.CLASS,
    constroller:
};

export function Component(options:{}){

}*/

export function Inject(service:string):any{
    return (target,key,descriptor) => {
        Reflect.metadata('ng:inject',service)(target,key,descriptor);
        return { enumerable:true, configurable:true, writable:true, value : null }
    }
}
