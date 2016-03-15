System.register(["mangular/annotate", "../services/my-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotate_1, annotate_2, my_service_1;
    var MyController;
    return {
        setters:[
            function (annotate_1_1) {
                annotate_1 = annotate_1_1;
                annotate_2 = annotate_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            }],
        execute: function() {
            MyController = (function () {
                function MyController() {
                    console.info("MyController", this.service);
                }
                __decorate([
                    annotate_2.Inject, 
                    __metadata('design:type', my_service_1.MyService)
                ], MyController.prototype, "service", void 0);
                MyController = __decorate([
                    annotate_1.Controller, 
                    __metadata('design:paramtypes', [])
                ], MyController);
                return MyController;
            })();
        }
    }
});
//# sourceMappingURL=my-controller.js.map