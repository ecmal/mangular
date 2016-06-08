import angular from "./angular/angular";
import {Decorator} from "runtime/decorators";
import {Member, Class, Constructor, Property,Interface} from "runtime/reflect/class";

const MANGULAR = Symbol('mangular');

export class Inject extends Decorator{
    private static map = {
        'mangular/interfaces#Scope':'$scope',
        'mangular/interfaces#Logger':'$log'
    };
    protected name:string;
    constructor(name?:string){
        super();
        this.name = name;
    }
    decorate(member:Member){

        member.owner.metadata.mangular = true;
        var type = member.type.reference;
        if(this.name){
            member.metadata.injected = this.name;
        }else{
            if(Inject.map[type.id]){
                member.metadata.injected = Inject.map[type.id];
            }else{
                member.metadata.injected = type.name;
            }
        }

    }
}
export class Controller extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        console.info(`target for ${this.constructor.name} in ${member.toString()}`);
        if(member instanceof Constructor){
            member.owner.metadata.mangular = true;
            member.owner.metadata.isController = true;
        }else{
            throw new Error(`invalid target for ${this.constructor.name} in ${member.toString()}`)
        }
    }
}
export class Service extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        console.info(`target for ${this.constructor.name} in ${member.toString()}`);
        if(member instanceof Constructor){
            member.owner.metadata.mangular = true;
            member.owner.metadata.isService = true;
        }else{
            throw new Error(`invalid target for ${this.constructor.name} in ${member.toString()}`)
        }
    }
}
export class Config extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isConfig = true;
    }
}
export class Run extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isRun = true;
    }
}
export class Provider extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isProvider = true;
    }
}
export class Directive extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isDirective = true;
    }
}
export class Component extends Decorator{
    private options:any;
    constructor(options?){
        super();
        this.options = options;
    }
    decorate(member:Member){
        console.info(`target for ${this.constructor.name} in ${member.toString()}`);
        if(member instanceof Constructor){
            member.owner.metadata.mangular = true;
            member.owner.metadata.isComponent = true;
            member.owner.metadata.options = this.options;
        }else{
            throw new Error(`invalid target for ${this.constructor.name} in ${member.toString()}`)
        }
    }
}
export class Filter extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isFilter = true;
    }
}
export class Value extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isValue = true;
    }
}
export class Const extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isConst = true;
    }
}
export class Factory extends Decorator{
    constructor(...args){super()}
    decorate(member:Member){
        member.owner.metadata.mangular = true;
        member.metadata.isFactory = true;
    }
}

export class Mangular {
    static modules:{[k:string]:Module};
    public static start(module) {
        this.modules = Object.create(null);
        var mClasses = Object.keys(system.classes)
            .filter(k=>system.classes[k].metadata.mangular)
            .map(k=>{
                var cls = system.classes[k];
                var mod = cls.module;
                Mangular.modules[mod.name]=mod;
                return cls;
            });
        Object.keys(Mangular.modules).forEach(c=>{
            var m = Mangular.modules[c];
            if(!m[MANGULAR]){
                m[MANGULAR]=angular.module(m.name,m.requires.filter(n=>!!this.modules[n]));
            }
        });
        mClasses.forEach(c=>{
            if(c.metadata.isController){
                this.initController(c);
            }
            if(c.metadata.isService){
                this.initService(c);
            }
            if(c.metadata.isComponent){
                this.initComponent(c);
            }
        })
    }

    private static getClassFunction(cls:Class):Function {
        var members = Object.keys(cls.members).map(k=>cls.members[k]);
        var construct:Constructor = members.find(f=>
            (f instanceof Constructor)
        );
        var fields:Property[] = members.filter(f=>
            (f.metadata.injected && (f instanceof Property) && !f.isStatic)
        );
        var instanceParamTypes = fields.map((f:Property)=> {
            return f.metadata.injected;
        });
        var instanceParamNames = fields.map((f:Property)=> {
            return f.name;
        });

        var constructParams = [];/* construct..map((p:Param)=> {
            return p.getMetadata("angular:inject") || (p.type == Object ? p.name : p.type.name);
        });*/
        var closure:Function = (...args)=> {
            var instance = Object.create(cls.value.prototype);
            for (var i = 0; i < instanceParamNames.length; i++) {
                instance[instanceParamNames[i]] = args.shift();
            }
            cls.value.apply(instance, args);
            /*if (modifier) {
                instance = modifier(instance) || instance;
            }*/
            return instance;
        };
        closure['$inject'] = instanceParamTypes.concat(constructParams);
        return closure;
    }
    private static initController(m:Class){
        m.module[MANGULAR].controller(m.name,this.getClassFunction(m));
    }
    private static initService(m:Class){
        m.module[MANGULAR].service(m.name,this.getClassFunction(m));
    }
    private static initComponent(m:Class){
        var options = Object.create(null);
        if(m.metadata.options){
            for(var key in m.metadata.options){
                options[key]= m.metadata.options[key];
            }
        }
        options.name = options.name || m.name;
        options.controller = this.getClassFunction(m);
        options.name = options.name[0].toLowerCase()+options.name.substring(1);
        m.module[MANGULAR].component(options.name,options);
    }
}

export default Mangular;