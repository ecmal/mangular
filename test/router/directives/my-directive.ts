import {Directive} from "mangular/annotate";
import {Component} from "mangular/annotate";
import {Filter} from "mangular/annotate";
import {Factory} from "mangular/annotate";
import {Value} from "mangular/annotate";
import {Const} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import {MyService} from "../services/my-service";


class Helpers {

    @Const
    static myConst = {
        const : 'CONST'
    };

    @Value
    static myStatic = {
        stat : 'STAT'
    };

    @Factory
    static myFactory(){
        return {gago:'jan'}
    }
}
class MyController {
    @Directive
    static hello(){
        return {
            scope       : {},
            restrict    : 'AE',
            replace     : true,
            template    : '<div>Hello</div>',
        }
    }
}

@Component('comp',{
    template    : '<div>{{$ctrl.name}}</div>'
})
class MyComponent {

    @Inject
    private service:MyService;

    private name:string;
    constructor(@Inject myFactory, @Inject myStatic,@Inject myConst){
        console.info("MyComponent",this.service);
        this.name = `Hello Other factory.gago:${myFactory.gago} value.stat:${myStatic.stat} const.const:${myConst.const}`;
    }
}

@Directive('other',{
    scope       : {},
    restrict    : 'AE',
    replace     : true,
    template    : `<p style="background-color:{{color}}">{{$ctrl.name | low:'gago'}}</p>`
})
class MyDirective {
    static link(scope, elem, attrs) {
        elem.bind('click', function() {
            elem.css('background-color','#ccccee');

            scope.$apply(()=>{
                scope.color = "#ccccee";
            });
        });
        elem.bind('mouseover', function() {
            elem.css('cursor', 'pointer');
        });
    }

    @Inject
    private service:MyService;

    private name:string;

    constructor(){
        console.info("MyDirective",this.service);
        this.name = "Hello Other"
    }
}

@Filter('low')
class MyFilter {

    @Inject
    private service:MyService;

    filter(input,param){
        return String(input).toLowerCase()+' : '+String(param);
    }

}