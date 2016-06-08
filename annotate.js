system.register("mangular/annotate", ["./angular/angular", "runtime/decorators", "runtime/reflect/class"], function(system,module) {
    var angular_1, decorators_1, class_1;
    var MANGULAR;
    var Inject = (function (__super) {
        Inject.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            var type = member.type.reference;
            if (this.name) {
                member.metadata.injected = this.name;
            }
            else {
                if (Inject.map[type.id]) {
                    member.metadata.injected = Inject.map[type.id];
                }
                else {
                    member.metadata.injected = type.name;
                }
            }
        };
        Inject.__initializer = function(__parent){
            __super=__parent;
            Inject.map = {
                'mangular/interfaces#Scope': '$scope',
                'mangular/interfaces#Logger': '$log'
            };
        };
        return Inject;
        function Inject(name) {
            __super.call(this);
            this.name = name;
        }
    })();
    module.define('class', Inject);
    module.export("Inject", Inject);
    var Controller = (function (__super) {
        Controller.prototype.decorate = function (member) {
            console.info("target for " + this.constructor.name + " in " + member.toString());
            if (member instanceof class_1.Constructor) {
                member.owner.metadata.mangular = true;
                member.owner.metadata.isController = true;
            }
            else {
                throw new Error("invalid target for " + this.constructor.name + " in " + member.toString());
            }
        };
        Controller.__initializer = function(__parent){
            __super=__parent;
        };
        return Controller;
        function Controller() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Controller);
    module.export("Controller", Controller);
    var Service = (function (__super) {
        Service.prototype.decorate = function (member) {
            console.info("target for " + this.constructor.name + " in " + member.toString());
            if (member instanceof class_1.Constructor) {
                member.owner.metadata.mangular = true;
                member.owner.metadata.isService = true;
            }
            else {
                throw new Error("invalid target for " + this.constructor.name + " in " + member.toString());
            }
        };
        Service.__initializer = function(__parent){
            __super=__parent;
        };
        return Service;
        function Service() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Service);
    module.export("Service", Service);
    var Config = (function (__super) {
        Config.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isConfig = true;
        };
        Config.__initializer = function(__parent){
            __super=__parent;
        };
        return Config;
        function Config() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Config);
    module.export("Config", Config);
    var Run = (function (__super) {
        Run.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isRun = true;
        };
        Run.__initializer = function(__parent){
            __super=__parent;
        };
        return Run;
        function Run() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Run);
    module.export("Run", Run);
    var Provider = (function (__super) {
        Provider.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isProvider = true;
        };
        Provider.__initializer = function(__parent){
            __super=__parent;
        };
        return Provider;
        function Provider() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Provider);
    module.export("Provider", Provider);
    var Directive = (function (__super) {
        Directive.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isDirective = true;
        };
        Directive.__initializer = function(__parent){
            __super=__parent;
        };
        return Directive;
        function Directive() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Directive);
    module.export("Directive", Directive);
    var Component = (function (__super) {
        Component.prototype.decorate = function (member) {
            console.info("target for " + this.constructor.name + " in " + member.toString());
            if (member instanceof class_1.Constructor) {
                member.owner.metadata.mangular = true;
                member.owner.metadata.isComponent = true;
                member.owner.metadata.options = this.options;
            }
            else {
                throw new Error("invalid target for " + this.constructor.name + " in " + member.toString());
            }
        };
        Component.__initializer = function(__parent){
            __super=__parent;
        };
        return Component;
        function Component(options) {
            __super.call(this);
            this.options = options;
        }
    })();
    module.define('class', Component);
    module.export("Component", Component);
    var Filter = (function (__super) {
        Filter.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isFilter = true;
        };
        Filter.__initializer = function(__parent){
            __super=__parent;
        };
        return Filter;
        function Filter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Filter);
    module.export("Filter", Filter);
    var Value = (function (__super) {
        Value.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isValue = true;
        };
        Value.__initializer = function(__parent){
            __super=__parent;
        };
        return Value;
        function Value() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Value);
    module.export("Value", Value);
    var Const = (function (__super) {
        Const.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isConst = true;
        };
        Const.__initializer = function(__parent){
            __super=__parent;
        };
        return Const;
        function Const() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Const);
    module.export("Const", Const);
    var Factory = (function (__super) {
        Factory.prototype.decorate = function (member) {
            member.owner.metadata.mangular = true;
            member.metadata.isFactory = true;
        };
        Factory.__initializer = function(__parent){
            __super=__parent;
        };
        return Factory;
        function Factory() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            __super.call(this);
        }
    })();
    module.define('class', Factory);
    module.export("Factory", Factory);
    var Mangular = (function (__super) {
        Mangular.start = function (module) {
            var _this = this;
            this.modules = Object.create(null);
            var mClasses = Object.keys(system.classes)
                .filter(function (k) { return system.classes[k].metadata.mangular; })
                .map(function (k) {
                var cls = system.classes[k];
                var mod = cls.module;
                Mangular.modules[mod.name] = mod;
                return cls;
            });
            Object.keys(Mangular.modules).forEach(function (c) {
                var m = Mangular.modules[c];
                if (!m[MANGULAR]) {
                    m[MANGULAR] = angular_1.default.module(m.name, m.requires.filter(function (n) { return !!_this.modules[n]; }));
                }
            });
            mClasses.forEach(function (c) {
                if (c.metadata.isController) {
                    _this.initController(c);
                }
                if (c.metadata.isService) {
                    _this.initService(c);
                }
                if (c.metadata.isComponent) {
                    _this.initComponent(c);
                }
            });
        };
        Mangular.getClassFunction = function (cls) {
            var members = Object.keys(cls.members).map(function (k) { return cls.members[k]; });
            var construct = members.find(function (f) {
                return (f instanceof class_1.Constructor);
            });
            var fields = members.filter(function (f) {
                return (f.metadata.injected && (f instanceof class_1.Property) && !f.isStatic);
            });
            var instanceParamTypes = fields.map(function (f) {
                return f.metadata.injected;
            });
            var instanceParamNames = fields.map(function (f) {
                return f.name;
            });
            var constructParams = []; /* construct..map((p:Param)=> {
                return p.getMetadata("angular:inject") || (p.type == Object ? p.name : p.type.name);
            });*/
            var closure = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
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
        };
        Mangular.initController = function (m) {
            m.module[MANGULAR].controller(m.name, this.getClassFunction(m));
        };
        Mangular.initService = function (m) {
            m.module[MANGULAR].service(m.name, this.getClassFunction(m));
        };
        Mangular.initComponent = function (m) {
            var options = Object.create(null);
            if (m.metadata.options) {
                for (var key in m.metadata.options) {
                    options[key] = m.metadata.options[key];
                }
            }
            options.name = options.name || m.name;
            options.controller = this.getClassFunction(m);
            options.name = options.name[0].toLowerCase() + options.name.substring(1);
            m.module[MANGULAR].component(options.name, options);
        };
        return Mangular;
        function Mangular() {
        }
    })();
    module.define('class', Mangular);
    module.export("Mangular", Mangular);
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            },
            function (decorators_1_1) {
                decorators_1 = decorators_1_1;
            },
            function (class_1_1) {
                class_1 = class_1_1;
            }],
        execute: function() {
            MANGULAR = Symbol('mangular');
            Inject = module.init(Inject,decorators_1.Decorator);
            Controller = module.init(Controller,decorators_1.Decorator);
            Service = module.init(Service,decorators_1.Decorator);
            Config = module.init(Config,decorators_1.Decorator);
            Run = module.init(Run,decorators_1.Decorator);
            Provider = module.init(Provider,decorators_1.Decorator);
            Directive = module.init(Directive,decorators_1.Decorator);
            Component = module.init(Component,decorators_1.Decorator);
            Filter = module.init(Filter,decorators_1.Decorator);
            Value = module.init(Value,decorators_1.Decorator);
            Const = module.init(Const,decorators_1.Decorator);
            Factory = module.init(Factory,decorators_1.Decorator);
            Mangular = module.init(Mangular);
            module.export("default",Mangular);
        }
    }
});
//# sourceMappingURL=annotate.js.map