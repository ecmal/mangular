import angular from "./angular/angular";

import {MangularModule} from "./module";

import Definition = Reflect.Definition;
import Method = Reflect.Method;
import Module = Reflect.Module;
import Param = Reflect.Param;
import Field = Reflect.Field;
import Class = Reflect.Class;

function decorate(args:any[],fn:Function):any{
    var def:Definition;
    switch(typeof args[0]){
        case 'function':
        case 'object':
            def = Definition.for(args[0],args[1],args[2]);
            break;
    }
    return def ? fn(def) : (target,key,desc)=>{
        fn(def = Definition.for(target,key,desc),...args)
    };
}

export function Run(...args):any {
    return decorate(args,(def:Definition,option:string)=>{
        return MangularModule.get(def).addRun(def);
    });
}
export function Config(...args):any {
    return decorate(args,(def:Definition,option:string)=>{
        MangularModule.get(def).addConfig(def);
    });
}
export function Service(...args):any {
    return decorate(args,(def:Definition,option:string)=>{
        if(def instanceof Class){
            def.setMetadata("angular:service",option);
        }
        MangularModule.get(def).addService(def);
    });
}
export function Controller(...args):any {
    return decorate(args,(def:Definition,option:string)=>{
        if(def instanceof Class){
            def.setMetadata("angular:controller",option);
            MangularModule.get(def).addController(def);
        }

    });
}
export function Inject(...args):any {
    return decorate(args,(def:Definition,service:string)=>{
        if(def instanceof Param){
            def.setMetadata("angular:inject",service)
        }else
        if(def instanceof Field){
            def.setMetadata("angular:inject",service)
        }else{
            throw new Error("Wrong target for 'Inject' "+def.name);
        }
    });
}
export function Provider(...args):any {
    return decorate(args,(def:Definition,service:string)=>{
        if(def instanceof Class){
            def.setMetadata("angular:provider",service);
            MangularModule.get(def).addProvider(def);
        } else
        if(def instanceof Method){
            def.setMetadata("angular:provider",service)
        }
    });
}
export function Directive(...args):any {
    return decorate(args,(def:Definition,name:string,options:any)=>{
        if(def instanceof Class){
            def.setMetadata("angular:directive",name);
            def.setMetadata("angular:directive:options",options);
            MangularModule.get(def).addDirective(def);
        } else
        if(def instanceof Method){
            def.setMetadata("angular:directive",name);
            MangularModule.get(def).addDirective(def);
        }
    });
}
export function Component(...args):any {
    return decorate(args,(def:Definition,name:string,options:any)=>{
        if(def instanceof Class){
            def.setMetadata("angular:component",name);
            def.setMetadata("angular:component:options",options);
            MangularModule.get(def).addComponent(def);
        }
    });
}
export function Filter(...args):any {
    return decorate(args,(def:Definition,name:string,options:any)=>{
        if(def instanceof Class){
            def.setMetadata("angular:filter",name);
            def.setMetadata("angular:filter:options",options);
            MangularModule.get(def).addFilter(def);
        }
    });
}

export function Value(...args):any {
    return decorate(args,(def:Definition,name:string)=>{
        if(def instanceof Field){
            def.setMetadata("angular:value",name);
            MangularModule.get(def).addValue(def);
        }
    });
}

export function Const(...args):any {
    return decorate(args,(def:Definition,name:string)=>{
        if(def instanceof Field){
            def.setMetadata("angular:const",name);
            MangularModule.get(def).addConst(def);
        }
    });
}

export function Factory(...args):any {
    return decorate(args,(def:Definition,name:string)=>{
        if(def instanceof Method){
            def.setMetadata("angular:factory",name);
            MangularModule.get(def).addFactory(def);
        }
    });
}

export class Mangular {
    static start(module) {
        MangularModule.run(module,angular)
    }
}

export default Mangular;