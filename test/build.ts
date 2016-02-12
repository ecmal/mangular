import * as Fs from 'node/fs';
import * as Path from 'node/path';
import * as https from "node/https";

var TEMPLATES = [`
System.register(['./angular'], function(exports) {var angularModule,angular;return {
setters:[
function (mod) {
    angularModule = mod;
    angular = mod.default;
}],
execute: function() {

"ANGULAR.SOURCE";

exports('default',angular);

}}});`,`
System.register([], function(exports) { return { setters:[], execute: function() {


"ANGULAR.SOURCE";

exports('default',angular);

}}});`];
class Main{
    private angularVersion:string;
    private gitBaseUrl:string = '' ;
    private config :Object ;

    constructor(){
        this.getConfiguration()
        this.getFiles();
    }

    public static  changeModuleWrappers(data){
        var [firstReplacement,secondReplacement] = TEMPLATES[0].split('"ANGULAR.SOURCE";');
        data = data.replace(/[(]function[(][-\s]?window, angular, undefined[-\s]?[)][-\s]?[{]/,firstReplacement)
            .replace(/}[)][(]window, window.angular[)][\s\S]*.*/,secondReplacement);
        return data;
    }

    public static changeCssWrappers(data){
        return `export default \`${data}\`;`
    }
    public static changeAngularWrappers(data){
        var [firstReplacement,secondReplacement] = TEMPLATES[1].split('"ANGULAR.SOURCE";');
        data = data.replace(/[(]function[(]window, document, undefined[)] [{]'use strict';/,firstReplacement)
            .replace(/}[)][(]window, document[)];[\s\S]*.*/,secondReplacement);
        return data;
    }

    public getConfiguration(){
        let config  = Fs.readFileSync(Path.resolve(__dirname,'../../config.json'));
        this.config = JSON.parse(config.toString());
    }

    public getFiles(){
        Object.keys(this.config).forEach( ( repo ) => {
            Object.keys(this.config[repo].files).map((fileName)=>{
                var destination = this.config[repo].files[fileName];
                this.getFile(repo,this.config[repo].version,fileName,destination).then((options)=>{
                    this.changeWrappers(options);
                }).catch(e=>{
                    console.info(e)
                });
            });
        });
    }
    static createDir(path,recursive=false){
        if(recursive){
            var parts = Path.normalize(path).split(Path.sep);
            path = '';
            for (var i = 0; i < parts.length; i++) {
                path += parts[i] + Path.sep;
                if (!Fs.existsSync(path)) {
                    Fs.mkdirSync(path, 0x1FD);
                }
            }
        }else {
            Fs.mkdirSync(path);
        }
    }
    public writeToSrcDir(fileName,data){
        let path  = Path.resolve(Path.resolve(__dirname,'../../src'),fileName);
        let dir = Path.dirname(path)
        if(!Fs.existsSync(dir)){
            Main.createDir(dir);
        }
        Fs.writeFileSync(path,data);
        console.log(`${fileName} has been successfully added to src directory`)
    }

    public changeWrappers(options){
        let file = options.file;
        let data = options.data;
        let dest = options.destination;
        if(file=='angular.js'){
            data = Main.changeAngularWrappers(data)
        }else{
            data = Main.changeModuleWrappers(data)
        }
        this.writeToSrcDir(dest,data);
    }

    public getFile(repo, version, file,destination){
        try{
            var path = `/${repo}/${version}/${file}`
            console.info("FETCH",path)
            return new Promise((resolve, reject)=> {
                let req = https.request({
                    host: 'raw.githubusercontent.com',
                    path: path,
                    method: 'GET',
                }, (res) => {
                    var data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        resolve({file,data,destination});
                    });
                    res.on('error', () => {
                        reject(false)
                    });
                });
                req.on('error',e=>reject(false));
                req.end()
            })
        }catch(e){
            console.log(e)
        }
    }

}
//let stream = new Main();
new Main();