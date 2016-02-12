import {angular} from "./angular";
import {IModule} from "./angular";

export class Mangular {
    private static module:IModule;
    static init(name:string):void {
        this.module = angular.module(name,[]);
        console.info(this.module);
    }
}