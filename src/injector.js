System.register(["./angular/angular"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular_1;
    var Definition, Class, Module, Decorators, Mangular;
    function Inject() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['inject'].concat(args));
    }
    exports_1("Inject", Inject);
    function Module() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['module'].concat(args));
    }
    exports_1("Module", Module);
    function Controller() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['controller'].concat(args));
    }
    exports_1("Controller", Controller);
    function Service() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['service'].concat(args));
    }
    exports_1("Service", Service);
    function Provider() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['provider'].concat(args));
    }
    exports_1("Provider", Provider);
    function Component() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return Decorators.decorate.apply(Decorators, ['component'].concat(args));
    }
    exports_1("Component", Component);
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }],
        execute: function() {
            Definition = Reflect.Definition;
            Class = Reflect.Class;
            Decorators = (function () {
                //
                function Decorators(mangular, key) {
                    var def = Definition.for(mangular, key);
                    if (def instanceof Class) {
                        var module = def.owner;
                        var filename = module.url.split('/');
                        filename.pop();
                        module.dirname = filename.join('/');
                        mangular.module = module;
                    }
                }
                Decorators.get = function (id) {
                    var m = this.cache[id];
                    if (!m) {
                        m = this.cache[id] = {
                            config: null,
                            deps: [],
                            providers: {},
                            services: {},
                            controllers: {},
                            components: {}
                        };
                    }
                    return m;
                };
                Decorators.proxy = function (target, override) {
                    var injectKeys = [];
                    var injectValues = [];
                    if (target.$inject) {
                        Object.keys(target.$inject).forEach(function (key) {
                            injectKeys.push(key);
                            injectValues.push(target.$inject[key]);
                        });
                    }
                    var proxy = function () {
                        var params = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            params[_i - 0] = arguments[_i];
                        }
                        var instance = Object.create(target.prototype);
                        injectKeys.forEach(function (key, index) {
                            instance[key] = params[index];
                        });
                        target.apply(instance);
                        if (typeof override == 'function') {
                            instance = override(instance) || instance;
                        }
                        return instance;
                    };
                    proxy.$inject = injectValues;
                    return proxy;
                };
                Decorators.decorate = function (decorator) {
                    var _this = this;
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    var target = rest[0], key = rest[1], desc = rest[2];
                    var targetType = typeof target;
                    var keyType = typeof key;
                    if (targetType == 'function' || (targetType == 'object' &&
                        keyType == 'string' &&
                        target.constructor.prototype === target)) {
                        return this[decorator](target, key, desc);
                    }
                    else {
                        return function (target, key, desc) {
                            return _this[decorator].apply(_this, [target, key, desc].concat(rest));
                        };
                    }
                };
                //
                Decorators.inject = function (target, key, descriptor, service) {
                    var Class = target.constructor;
                    if (!service) {
                        var def = Definition.for(target, key);
                        var Type = def.type;
                        service = Type == Object ? key : Type.name;
                    }
                    if (Class) {
                        var inject = Class['$inject'];
                        if (!inject) {
                            inject = Class['$inject'] = {};
                        }
                        inject[key] = "" + (service || key);
                        return descriptor = {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: null
                        };
                    }
                    else {
                        throw new Error('IDI NA XUY');
                    }
                };
                Decorators.module = function (target, key) {
                    var def = Definition.for(target, key);
                    if (def instanceof Class) {
                        var mod = def.owner;
                        var deps = mod.dependencies.filter(function (e, i, a) { return a.indexOf(e) == i; });
                        var module = this.get(mod.name);
                        module.deps = deps;
                        module.config = this.proxy(target);
                    }
                    else {
                        console.error("Wrong Target");
                    }
                };
                Decorators.controller = function (target, key) {
                    var def = Definition.for(target, key);
                    if (def instanceof Class) {
                        var mod = def.owner;
                        var module = this.get(mod.name);
                        module.controllers[target.name] = this.proxy(target);
                    }
                    else {
                        console.error("Wrong Target");
                    }
                };
                Decorators.service = function (target, key) {
                    var def = Definition.for(target, key);
                    if (def instanceof Class) {
                        var mod = def.owner;
                        var module = this.get(mod.name);
                        module.services[target.name] = this.proxy(target);
                    }
                    else {
                        console.error("Wrong Target");
                    }
                };
                Decorators.provider = function (target, key) {
                    var def = Definition.for(target, key);
                    if (def instanceof Class) {
                        var mod = def.owner;
                        var name = target.name.replace(/(.*)Provider$/, '$1');
                        var module = this.get(mod.name);
                        module.providers[name] = this.proxy(target, function (instance) {
                            Object.defineProperty(instance, '$get', {
                                get: function () { return Decorators.proxy(this.service); }
                            });
                        });
                    }
                    else {
                        console.error("Wrong Target");
                    }
                };
                Decorators.component = function (target, key, descriptor, options) {
                    var name = options.name || target.name;
                    options.controller = this.proxy(target);
                    var def = Definition.for(target, key);
                    if (def instanceof Class) {
                        var mod = def.owner;
                        var module = this.get(mod.name);
                        module.components[name] = options;
                    }
                    else {
                        console.error("Wrong Target");
                    }
                };
                Decorators.cache = {};
                return Decorators;
            })();
            Mangular = (function () {
                function Mangular() {
                }
                Mangular.element = function (el) {
                    return angular_1.default.element(el);
                };
                Mangular.loadCss = function (url) {
                    var link = document.createElement('link');
                    link.href = url;
                    link.rel = "stylesheet";
                    document.head.appendChild(link);
                };
                Mangular.init = function (mod) {
                    var deps = ['ng'];
                    var cache = Decorators.cache[mod];
                    var app = angular_1.default.module(mod, deps).config(cache.config);
                    cache.deps.forEach(function (d) {
                        switch (d) {
                            case 'mangular/angular/animate': return deps.push('ngAnimate');
                            case 'mangular/angular/aria': return deps.push('ngAria');
                            case 'mangular/angular/material': return deps.push('ngMaterial');
                            case 'mangular/angular/table': return deps.push('md.data.table');
                        }
                        var dep = Decorators.cache[d];
                        if (dep) {
                            for (var c in dep.providers) {
                                app.provider(c, dep.providers[c]);
                            }
                            for (var c in dep.services) {
                                app.service(c, dep.services[c]);
                            }
                            for (var c in dep.controllers) {
                                app.controller(c, dep.controllers[c]);
                            }
                            for (var c in dep.components) {
                                app.component(c, dep.components[c]);
                            }
                        }
                    });
                    delete Decorators['cache'];
                    if (cache.deps.indexOf('ngMaterial')) {
                        this.loadCss(this.module.dirname + '/angular/material.css');
                    }
                    if (cache.deps.indexOf('ngMaterial')) {
                        this.loadCss(this.module.dirname + '/angular/table.css');
                    }
                    angular_1.default.element(document).ready(function () {
                        angular_1.default.bootstrap(document, [mod]);
                    });
                };
                Mangular = __decorate([
                    Decorators, 
                    __metadata('design:paramtypes', [])
                ], Mangular);
                return Mangular;
            })();
            exports_1("Mangular", Mangular);
            exports_1("default",Mangular);
        }
    }
});
//# sourceMappingURL=injector.js.map