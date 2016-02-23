import {Service,Inject} from "mangular/annotate";

@Service
export class Auth{

    @Inject $rootScope;
    private rootScope:any;

    constructor($http,$q,$rootScope){

    }

    checkUserCredentials ( username , password ){
        return new Promise(( resolve , reject )=>{
            try{
                setTimeout(()=>{
                    let exist = false;
                    if( username == 'admin' && password == 'admin' ){
                        exist = true;
                    }
                    resolve(exist);
                },0);
            }catch(e){
                reject();
            }
        })
    }

    setToLocalStorage(key:string,val:Object){
        localStorage.setItem(key,JSON.stringify(val));
    }

    clearLocalStorage(key:string){
        localStorage.removeItem(key);
    }
    getFromLocalStorage(key:string){
        return JSON.parse(localStorage.getItem(key));
    }

    clearCredentials () {
        this.$rootScope.globals = {};
        this.clearLocalStorage('globals');
    }

    setCredentials (username,password) {
        this.$rootScope.globals = {
            currentUser : {
                username : username,
                password : password
            }
        };
        this.setToLocalStorage('globals',this.$rootScope.globals);
    }
}
