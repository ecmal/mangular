import angular from "./angular/angular";

import Definition = Reflect.Definition;
import Class = Reflect.Class;
import Module = Reflect.Module;

class Decorators {
    static cache = {};
    static get(id):any {
        var m = this.cache[id];
        if(!m){
            m = this.cache[id] = {
                config      :null,
                deps        :[],
                providers   :{},
                services    :{},
                controllers :{},
                components  :{}
            };
        }
        return m;
    }
    static proxy(target:any,override?){
        var injectKeys   = [];
        var injectValues = [];
        if(target.$inject) {
            Object.keys(target.$inject).forEach(key=> {
                injectKeys.push(key);
                injectValues.push(target.$inject[key]);
            });
        }
        var proxy:any = (...params)=>{
            var instance = Object.create(target.prototype);
            injectKeys.forEach((key,index)=>{
                instance[key] = params[index];
            });
            target.apply(instance);
            if(typeof override=='function'){
                instance = override(instance)||instance;
            }
            return instance;
        };
        proxy.$inject = injectValues;

        return proxy;
    }
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
    //
    static inject(target?,key?,descriptor?,service?){
        var Class = target.constructor;
        if(!service){
            var def:any = Definition.for(target,key);
            var Type = def.type;
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
        var def:any = Definition.for(target,key);
        if(def instanceof Class){
            var mod:Module = def.owner;
            var deps = mod.dependencies.filter((e,i,a)=>a.indexOf(e)==i);
            var module = this.get(mod.name);
            module.deps = deps;
            module.config = this.proxy(target);
        }else{
            console.error("Wrong Target")
        }
    }
    static controller(target?,key?){
        var def:any = Definition.for(target,key);
        if(def instanceof Class){
            var mod:any = def.owner;
            var module = this.get(mod.name);
            module.controllers[target.name] = this.proxy(target)
        }else{
            console.error("Wrong Target")
        }
    }
    static service(target?,key?){
        var def:any = Definition.for(target,key);
        if(def instanceof Class){
            var mod:any = def.owner;
            var module = this.get(mod.name);
            module.services[target.name] = this.proxy(target);
        }else{
            console.error("Wrong Target")
        }
    }
    static provider(target?,key?){
        var def:any = Definition.for(target,key);
        if(def instanceof Class){
            var mod:Module = def.owner;
            var name:string = target.name.replace(/(.*)Provider$/,'$1');
            var module = this.get(mod.name);
            module.providers[name] = this.proxy(target,(instance)=>{
                Object.defineProperty(instance,'$get', <PropertyDescriptor>{
                    get(){ return Decorators.proxy(this.service); }
                });
            });
        }else{
            console.error("Wrong Target")
        }

    }
    static component(target?,key?,descriptor?,options?){
        var name = options.name || target.name;
        options.controller = this.proxy(target);
        var def:any = Definition.for(target,key);
        if(def instanceof Class){
            var mod:Module = def.owner;
            var module = this.get(mod.name);
            module.components[name] = options;
        }else{
            console.error("Wrong Target")
        }
    }
    //
    constructor(mangular,key){
        var def:any = Definition.for(mangular,key);
        if(def instanceof Class){
            var module = def.owner;
            var filename = module.url.split('/');
            filename.pop();
            module.dirname = filename.join('/');
            mangular.module = module;
        }
    }
}

export function Inject(...args):any{
    return Decorators.decorate('inject',...args)
}
export function Module(...args):any{
    return Decorators.decorate('module',...args)
}
export function Controller(...args):any{
    return Decorators.decorate('controller',...args)
}
export function Service(...args):any{
    return Decorators.decorate('service',...args)
}
export function Provider(...args):any{
    return Decorators.decorate('provider',...args)
}
export function Component(...args):any{
    return Decorators.decorate('component',...args)
}


@Decorators
export class Mangular {
    static module:any;
    static element(el){
        return angular.element(el)
    }
    static loadCss(url){
        var link = document.createElement('link');
        link.href = url;
        link.rel = "stylesheet";
        document.head.appendChild(link)
    }
    static init(mod){
        var deps = ['ng'];
        var cache = Decorators.cache[mod];
        var app:any = angular.module(mod,deps).config(cache.config);
        cache.deps.forEach(d=>{
            switch(d){
                case 'mangular/angular/animate'     : return deps.push('ngAnimate');
                case 'mangular/angular/aria'        : return deps.push('ngAria');
                case 'mangular/angular/material'    : return deps.push('ngMaterial');
                case 'mangular/angular/table'       : return deps.push('md.data.table');
            }
            var dep = Decorators.cache[d];
            if(dep) {
                for (let c in dep.providers) {
                    app.provider(c, dep.providers[c]);
                }
                for (let c in dep.services) {
                    app.service(c, dep.services[c]);
                }
                for (let c in dep.controllers) {
                    app.controller(c, dep.controllers[c]);
                }
                for (let c in dep.components) {
                    app.component(c, dep.components[c]);
                }
            }
        });
        delete Decorators['cache'];
        if(cache.deps.indexOf('ngMaterial')){
            this.loadCss(this.module.dirname+'/angular/material.css');
        }
        if(cache.deps.indexOf('ngMaterial')){
            this.loadCss(this.module.dirname+'/angular/table.css');
        }

        angular.element(document).ready(()=>{
            angular.bootstrap(document, [mod]);
        });
    }
}

export default Mangular;