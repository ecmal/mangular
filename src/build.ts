const Fs =  system.node.require('fs');
const Path =  system.node.require('path');
const https =  system.node.require('https');

var TEMPLATES = [
`system.register('mangular/angular/MODULENAME',['./angular'], function(system,module) {

"ANGULAR.SOURCE";

module.export('default',angular);
return { setters:[function(){}], execute: function() {}};
});`,
`system.register('mangular/angular/MODULENAME',[], function(system,module) {


"ANGULAR.SOURCE";

module.export('default',angular);
return { setters:[function(){}], execute: function() {}};
});`
];

export class Main{
    private angularVersion:string;
    private gitBaseUrl:string = '' ;
    private config :Object ;

    constructor(){
        this.getConfiguration();
        this.getFiles();
    }

    public static  changeModuleWrappers(data,file){
        var [firstReplacement,secondReplacement] = TEMPLATES[0].split('"ANGULAR.SOURCE";');
        var moduleName = Path.basename(file,'.js');
        firstReplacement = firstReplacement.replace(/MODULENAME/,moduleName);
        console.info(moduleName,firstReplacement);
        data = [firstReplacement,data,secondReplacement].join('\n');
        return data;
    }

    public static changeCssWrappers(data){
        return `export default \`${data}\`;`
    }
    public static changeAngularWrappers(data,file){
        var [firstReplacement,secondReplacement] = TEMPLATES[1].split('"ANGULAR.SOURCE";');
        var moduleName = Path.basename(file,'.js');
        firstReplacement = firstReplacement.replace(/MODULENAME/,moduleName);
        console.info(moduleName,firstReplacement);
        data = [firstReplacement,data,secondReplacement].join('\n');
        return data;
    }

    public getConfiguration(){
        let config  = Fs.readFileSync(Path.resolve(system.node.dirname,'../../config.json'));
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
        let path  = Path.resolve(Path.resolve(system.node.dirname,'../../src'),fileName);
        let dir = Path.dirname(path);
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
            data = Main.changeAngularWrappers(data,file)
        }else
        if(Path.extname(file)=='.js'){
            data = Main.changeModuleWrappers(data,file)
        }
        this.writeToSrcDir(dest,data);
    }

    public getFile(repo, version, file,destination){
        try{
            var path = `/${repo}/${version}/${file}`;
            console.info("FETCH",path);
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