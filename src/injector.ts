import angular from "./angular";

export const CONTROLLERS = {};
export const SERVICES = {};
export const PROVIDERS = {};
export const MODULES = {};

class Decorators {
    static decorate(decorator,...rest){
        var [target,key,desc] = rest;
        var targetType = typeof target;
        var keyType = typeof key;
        if(targetType=='function' || (
            targetType == 'object' &&
            keyType == 'string' &&
            target.constructor.prototype === target
        )){
            return this[decorator](target,key,desc);
        }else{
            return (target,key,desc)=>{
                return this[decorator](target,key,desc,...rest);
            };
        }
    }
    static inject(target?,key?,descriptor?,service?){
        var Class = target.constructor;
        if(!service){
            var Type = Reflect.getDesignType(target,key);
            service = Type==Object?key:Type.name
        }
        if(Class){
            var inject = Class['$inject'];
            if(!inject){
                inject = Class['$inject'] = {};
            }
            inject[key] = `${service||key}`;
            return descriptor = {
                enumerable      : true,
                configurable    : true,
                writable        : true,
                value           : null
            }
        }else{
            throw new Error('IDI NA XUY');
        }
    }
    static module(target?,key?){
        var module:any = Reflect.getMetadata(target,key,'design:module');
        module.deps = module.deps.filter((e,i,a)=>a.indexOf(e)==i);
        var injectKeys   = [];
        var injectValues = [];
        if(target.$inject) {
            Object.keys(target.$inject).forEach(key=> {
                injectKeys.push(key);
                injectValues.push(target.$inject[key]);
            });
        }
        var modules = MODULES[module.id];
        if(!modules) {
            modules = MODULES[module.id] = {};
        }
        modules.deps = module.deps;
        modules.config = [...injectValues,(...params)=>{
            var instance = Object.create(target.prototype);
            injectKeys.forEach((key,index)=>{
                instance[key] = params[index];
            });
            target.apply(instance);
            return instance;
        }];
    }
    static controller(target?,key?){
        var module:any = Reflect.getMetadata(target,key,'design:module');
        var injectKeys = [];
        var injectValues = [];
        Object.keys(target.$inject).forEach(key=>{
            injectKeys.push(key);
            injectValues.push(target.$inject[key]);
        });
        var controllers = CONTROLLERS[module.id];
        if(!controllers) {
            controllers = CONTROLLERS[module.id] = {};
        }
        controllers[target.name] =[...injectValues,(...params)=>{
            var instance = Object.create(target.prototype);
            injectKeys.forEach((key,index)=>{
                instance[key] = params[index];
            });
            target.apply(instance);
            return instance;
        }];
    }
    static service(target?,key?){
        var module:any = Reflect.getMetadata(target,key,'design:module');
        var injectKeys = [];
        var injectValues = [];
        Object.keys(target.$inject).forEach(key=>{
            injectKeys.push(key);
            injectValues.push(target.$inject[key]);
        });
        var services = SERVICES[module.id];
        if(!services) {
            services = SERVICES[module.id] = {};
        }
        services[target.name] =[...injectValues,(...params)=>{
            var instance = Object.create(target.prototype);
            injectKeys.forEach((key,index)=>{
                instance[key] = params[index];
            });
            target.apply(instance);
            return instance;
        }];
    }
    static provider(target?,key?){
        var module:any = Reflect.getMetadata(target,key,'design:module');
        var name:string = target.name.replace(/(.*)Provider$/,'$1');
        var injectKeys = [];
        var injectValues = [];
        if(target.$inject) {
            Object.keys(target.$inject).forEach(key=> {
                injectKeys.push(key);
                injectValues.push(target.$inject[key]);
            });
        }
        var providers = PROVIDERS[module.id];
        if(!providers) {
            providers = PROVIDERS[module.id] = {};
        }
        providers[name] = [...injectValues,(...params)=>{
            var instance = Object.create(target.prototype);
            injectKeys.forEach((key,index)=>{
                instance[key] = params[index];
            });
            target.apply(instance);
            Object.defineProperty(instance,'$get', <PropertyDescriptor>{
                get(){
                    var target = this.service;
                    var injectKeys = [];
                    var injectValues = [];
                    if(target.$inject) {
                        Object.keys(target.$inject).forEach(key=> {
                            injectKeys.push(key);
                            injectValues.push(target.$inject[key]);
                        });
                    }
                    return [...injectValues,(...params)=>{
                        var instance = Object.create(target.prototype);
                        injectKeys.forEach((key,index)=>{
                            instance[key] = params[index];
                        });
                        target.apply(instance);
                        return target;
                    }];
                }
            });
            return instance;
        }];
    }
}

export const Inject     = (...args:any[]):any => Decorators.decorate('inject',...args);
export const Module     = (...args:any[]):any => Decorators.decorate('module',...args);
export const Controller = (...args:any[]):any => Decorators.decorate('controller',...args);
export const Service    = (...args:any[]):any => Decorators.decorate('service',...args);
export const Provider   = (...args:any[]):any => Decorators.decorate('provider',...args);

export class Bootstrap {
    static init(mod){
        var module = MODULES[mod];
        if(module){
            var deps = ['ng'];//'ngAnimate','ngAria','ngMaterial'
            var app:any = angular.module(mod,deps).config(module.config);
            module.deps.forEach(d=>{
                switch(d){
                    case 'mangular/angular-animate'     : return deps.push('ngAnimate');
                    case 'mangular/angular-aria'        : return deps.push('ngAria');
                    case 'mangular/angular-material'    : return deps.push('ngMaterial');
                }
                if(CONTROLLERS[d]){
                    for(let c in CONTROLLERS[d]){
                        app.controller(c,CONTROLLERS[d][c]);
                    }
                }
                if(SERVICES[d]){
                    for(let c in SERVICES[d]){
                        app.service(c,SERVICES[d][c]);
                    }
                }
                if(PROVIDERS[d]){
                    for(let c in PROVIDERS[d]){
                        app.provider(c,PROVIDERS[d][c]);
                    }
                }
            });
            angular.element(document).ready(()=>{
                angular.bootstrap(document, [mod]);
            })
        }

    }
}

export default Bootstrap;