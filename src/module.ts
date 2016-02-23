import Definition = Reflect.Definition;
import Method = Reflect.Method;
import Module = Reflect.Module;
import Class = Reflect.Class;
import Param = Reflect.Param;
import Member = Reflect.Member;
import Scope = Reflect.Scope;
import Field = Reflect.Field;
import Path = Runtime.Path;


interface MangularModules {
    [name:string] : MangularModule
}

const modules:MangularModules = {};

export class MangularModule {
    static loadCss(url){
        var link = document.createElement('link');
        link.href = url;
        link.rel = "stylesheet";
        document.head.appendChild(link)
    }
    static getClassFunction(clazz:Class,modifier?:(instance:any)=>any):Function{
        var fields:Field[] = <Field[]>clazz.members((f:Member)=>(
            (f instanceof Field) && f.scope==Scope.INSTANCE && f.hasMetadata("angular:inject"))
        );
        var instanceParams = fields.map((f:Field)=>{
            return f.getMetadata("angular:inject") || ( f.type==Object ? f.name:f.type.name);
        });
        var instanceFields = fields.map((f:Field)=>{
            return f.name;
        });
        var constructParams = clazz.params.map((p:Param)=>{
            return p.getMetadata("angular:inject") || (p.type==Object ? p.name : p.type.name);
        });
        var closure:Function = (...args)=>{
            var instance = Object.create(clazz.constructor.prototype);
            while(instanceFields.length){
                var name = instanceFields.shift();
                var value = args.shift();
                instance[name] = value;
            }
            clazz.constructor.apply(instance,args);
            if(modifier){
                instance = modifier(instance) || instance;
            }
            return instance;
        };
        closure['$inject'] = instanceParams.concat(constructParams);
        return closure;
    }
    static getMethodFunction(method:Method):Function{
        var target = method.owner.constructor;
        if(method.scope==Scope.INSTANCE){
            target = target.prototype;
        }
        var fn = Object.getOwnPropertyDescriptor(target,method.name).value;
        if(method.scope==Scope.STATIC){
            fn = fn.bind(target);
        }
        fn['$inject'] = method.params.map((p:Param,i:number)=>{
            var injection:string = p.getMetadata("angular:inject");
            if(!injection){
                injection =  p.type===Object ? p.name : p.type.name;
            }
            return injection;
        });

        return fn;
    }
    static getFieldValue(field:Field){
        var target = field.owner.constructor;
        if(field.scope==Scope.INSTANCE){
            throw new Error('Value should be static field');
        }else{
            return Object.getOwnPropertyDescriptor(target,field.name).value
        }
    }
    static run(main:string,angular:any){
        for(var m in modules){
            modules[m].init(angular)
        }
        modules[main].run(angular);
    }
    static get(def:Definition):MangularModule{
        var module:Module;
        if(def instanceof Param){
            var owner = def.owner;
            if(owner instanceof Method){
                module = owner.owner.owner;
            }else
            if(owner instanceof Class){
                module = owner.owner;
            }
        }else
        if(def instanceof Member){
            module = def.owner.owner;
        }else
        if(def instanceof Class){
            module = def.owner;
        }
        var mModule = modules[module.name];
        if(!mModule){
            module.setMetadata("angular",mModule=modules[module.name]=new MangularModule(module));
        }
        return mModule;
    }
    private get name():string{
        return this.module.name;
    }
    private module:Module;
    private configs:Definition[];
    private services:Definition[];
    private providers:Definition[];
    private controllers:Definition[];
    private components:Definition[];
    private directives:Definition[];
    private filters:Definition[];
    private runs:Definition[];
    private constants:Definition[];
    private factories:Definition[];
    private values:Definition[];
    private dependencies:string[];
    private initialized:boolean;

    constructor(module:Module){
        this.module = module;
        this.configs = [];
        this.runs = [];
        this.services = [];
        this.providers = [];
        this.controllers = [];
        this.components = [];
        this.directives = [];
        this.filters = [];
        this.constants = [];
        this.factories = [];
        this.values = [];
        this.initialized = false;
    }

    addConfig(def:Definition){
        this.configs.push(def)
    }
    addFactory(def:Definition){
        this.factories.push(def)
    }
    addRun(def:Definition){
        this.runs.push(def)
    }
    addProvider(def:Definition){
        this.providers.push(def);
    }
    addService(def:Definition){
        this.services.push(def);
    }
    addController(def:Definition){
        this.controllers.push(def);
    }
    addDirective(def:Definition){
        this.directives.push(def);
    }
    addComponent(def:Definition){
        this.components.push(def);
    }
    addFilter(def:Definition){
        this.filters.push(def);
    }
    addValue(def:Definition){
        this.values.push(def);
    }
    addConst(def:Definition){
        this.constants.push(def);
    }
    create(angular:any):any{
        this.dependencies=['ng'];
        this.module.dependencies.forEach(d=>{
            switch(d){
                case 'mangular/angular/animate'     : this.dependencies.push('ngAnimate');break;
                case 'mangular/angular/aria'        : this.dependencies.push('ngAria');break;
                case 'mangular/angular/material'    : this.dependencies.push('ngMaterial');break;
                case 'mangular/angular/route'       : this.dependencies.push('ngRoute');break;
                case 'mangular/angular/table'       : this.dependencies.push('md.data.table');break;
                case 'mangular/angular/ui-router'   : this.dependencies.push('ui.router');break;
                default :
                    if(modules[d]){
                        modules[d].init(angular);
                        this.dependencies.push(d);
                    }
                    break;
            }
        });
        this.dependencies = this.dependencies.filter((e,i,a)=>a.indexOf(e)==i);
        return angular.module(this.name,this.dependencies);
    }
    init(angular:any){
        if(!this.initialized){
            this.initialized = true;
            //console.info("INIT",this.name);
            var aModule:any = this.create(angular);
            for(var constant of this.constants){
                this.initConst(aModule,constant)
            }
            for(var value of this.values){
                this.initValue(aModule,value)
            }
            for(var config of this.configs){
                this.initConfig(aModule,config)
            }
            for(var run of this.runs){
                this.initRun(aModule,run);
            }
            for(var provider of this.providers){
                this.initProvider(aModule,provider);
            }
            for(var factory of this.factories){
                this.initFactory(aModule,factory);
            }
            for(var service of this.services){
                this.initService(aModule,service);
            }
            for(var controller of this.controllers){
                this.initController(aModule,controller);
            }
            for(var directive of this.directives){
                this.initDirective(aModule,directive);

            }
            for(var component of this.components){
                this.initComponent(aModule,component);
            }
            for(var filter of this.filters){
                this.initFilter(aModule,filter);
            }
        }
    }

    private initConfig(module:any,service:Definition){
        var fn = MangularModule.getMethodFunction(<Method>service);
        module.config(fn);
    }
    private initRun(module:any,service:Definition){
        var fn = MangularModule.getMethodFunction(<Method>service);
        module.run(fn);
    }
    private initConst(module:any,service:Definition){
        var field:Field = <Field>service;
        var name = field.getMetadata("angular:const") || field.name;
        var value = MangularModule.getFieldValue(field);
        module.constant(name,value);
    }
    private initValue(module:any,service:Definition){
        var field:Field = <Field>service;
        var name = field.getMetadata("angular:value") || field.name;
        var value = MangularModule.getFieldValue(field);
        module.value(name,value);
    }
    private initProvider(module:any,service:Definition){
        if(service instanceof Class){
            var clazz = <Class>service;
            var metadata = clazz.getMetadata("angular:provider");
            var name = metadata||clazz.name;
            var provide = clazz.instance['provide'];
            module.provider(name,MangularModule.getClassFunction(clazz,(instance)=>{
                instance.$get = provide?MangularModule.getMethodFunction(<Method>provide):instance.provide||instance.$get;
            }));
        }
    }
    private initFactory(module:any,service:Definition){
        if(service instanceof Method){
            var method = <Method>service;
            var name = method.getMetadata("angular:factory")||method.name;
            module.factory(name,MangularModule.getMethodFunction(method));
        }
    }
    private initService(module:any,service:Definition){
        if(service instanceof Class){
            var clazz = <Class>service;
            var metadata = clazz.getMetadata("angular:service");
            var name = metadata||clazz.name;
            module.service(name,MangularModule.getClassFunction(clazz));
        }
    }
    private initController(module:any,service:Definition){
        if(service instanceof Class){
            var clazz = <Class>service;
            var metadata = clazz.getMetadata("angular:controller");
            var name = metadata||clazz.name;
            module.controller(name,MangularModule.getClassFunction(clazz));
        }
    }
    private initDirective(module:any,service:Definition){
        if(service instanceof Class){
            var clazz = <Class>service;
            var name = clazz.getMetadata("angular:directive")||clazz.name;
            var options:any = clazz.getMetadata("angular:directive:options") || {};
            options.controller = MangularModule.getClassFunction(clazz);
            options.controllerAs = options.controllerAs||'$ctrl';
            var compile = clazz.constructor['compile'];
            var link = clazz.constructor['link'];
            options.compile = options.compile||compile;
            if(!options.compile){
                options.link = options.link||link;
                if(!options.link){
                    var preLink = clazz.constructor['preLink'];
                    var postLink = clazz.constructor['postLink'];
                    if(preLink||postLink){
                        options.link = {};
                        if(preLink){
                            options.pre = preLink.bind(clazz.constructor);
                        }
                        if(postLink){
                            options.post = postLink.bind(clazz.constructor);
                        }
                    }
                }else{
                    options.link = options.link.bind(clazz.constructor)
                }
            }else{
                options.compile = options.compile.bind(clazz.constructor)
            }

            module.directive(name,()=>{
                return options;
            });
        }else
        if(service instanceof Method){
            module.directive(service.name,MangularModule.getMethodFunction(<Method>service));
        }
    }
    private initComponent(module:any,service:Definition){
        if(service instanceof Class) {
            var clazz = <Class>service;
            var name = clazz.getMetadata("angular:component") || clazz.name;
            var options:any = clazz.getMetadata("angular:component:options") || {};
            options.controller = MangularModule.getClassFunction(clazz);
            module.component(name, options);
        }
    }
    private initFilter(module:any,service:Definition){
        if(service instanceof Class) {
            var clazz = <Class>service;
            var name = clazz.getMetadata("angular:filter") || clazz.name;
            var options:any = clazz.getMetadata("angular:filter:options") || {};
            var closure:Function = MangularModule.getClassFunction(clazz,(instance)=>{
                instance = instance.filter.bind(instance);
                instance.$stateful = options.stateful;
                instance.$digest = options.digest;
                return instance;
            });
            module.filter(name, closure);
        }
    }

    run(angular:any){
        angular.element(document).ready(()=> {
            console.info("Mangular.start",this.module.name);
            var mMaterials = System.modules['mangular/angular/material'];
            var mTable = System.modules['mangular/angular/table'];

            if(mMaterials){
                MangularModule.loadCss(Path.dirname(mMaterials.url)+'/material.css');
            }
            if(mTable){
                MangularModule.loadCss(Path.dirname(mTable.url)+'/table.css');
            }
            angular.bootstrap(document, [this.module.name]);
        })
    }


}