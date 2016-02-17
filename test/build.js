System.register(['node/fs', 'node/path', "node/https"], function(exports_1) {
    var Fs, Path, https;
    var TEMPLATES, Main;
    return {
        setters:[
            function (Fs_1) {
                Fs = Fs_1;
            },
            function (Path_1) {
                Path = Path_1;
            },
            function (https_1) {
                https = https_1;
            }],
        execute: function() {
            TEMPLATES = ["\nSystem.register(['./angular'], function(exports) {return { setters:[], execute: function() {\n\n\"ANGULAR.SOURCE\";\n\nexports('default',angular);\n\n}}});", "\nSystem.register([], function(exports) { return { setters:[], execute: function() {\n\n\n\"ANGULAR.SOURCE\";\n\nexports('default',angular);\n\n}}});"];
            Main = (function () {
                function Main() {
                    this.gitBaseUrl = '';
                    this.getConfiguration();
                    this.getFiles();
                }
                Main.changeModuleWrappers = function (data) {
                    var _a = TEMPLATES[0].split('"ANGULAR.SOURCE";'), firstReplacement = _a[0], secondReplacement = _a[1];
                    data = data.replace(/[(]function[(][-\s]?window, angular, undefined[-\s]?[)][-\s]?[{]/, firstReplacement)
                        .replace(/}[)][(]window, window.angular[)][\s\S]*.*/, secondReplacement);
                    return data;
                };
                Main.changeCssWrappers = function (data) {
                    return "export default `" + data + "`;";
                };
                Main.changeAngularWrappers = function (data) {
                    var _a = TEMPLATES[1].split('"ANGULAR.SOURCE";'), firstReplacement = _a[0], secondReplacement = _a[1];
                    data = data.replace(/[(]function[(]window, document, undefined[)] [{]'use strict';/, firstReplacement)
                        .replace(/}[)][(]window, document[)];[\s\S]*.*/, secondReplacement);
                    return data;
                };
                Main.prototype.getConfiguration = function () {
                    var config = Fs.readFileSync(Path.resolve(__dirname, '../../config.json'));
                    this.config = JSON.parse(config.toString());
                };
                Main.prototype.getFiles = function () {
                    var _this = this;
                    Object.keys(this.config).forEach(function (repo) {
                        Object.keys(_this.config[repo].files).map(function (fileName) {
                            var destination = _this.config[repo].files[fileName];
                            _this.getFile(repo, _this.config[repo].version, fileName, destination).then(function (options) {
                                _this.changeWrappers(options);
                            }).catch(function (e) {
                                console.info(e);
                            });
                        });
                    });
                };
                Main.createDir = function (path, recursive) {
                    if (recursive === void 0) { recursive = false; }
                    if (recursive) {
                        var parts = Path.normalize(path).split(Path.sep);
                        path = '';
                        for (var i = 0; i < parts.length; i++) {
                            path += parts[i] + Path.sep;
                            if (!Fs.existsSync(path)) {
                                Fs.mkdirSync(path, 0x1FD);
                            }
                        }
                    }
                    else {
                        Fs.mkdirSync(path);
                    }
                };
                Main.prototype.writeToSrcDir = function (fileName, data) {
                    var path = Path.resolve(Path.resolve(__dirname, '../../src'), fileName);
                    var dir = Path.dirname(path);
                    if (!Fs.existsSync(dir)) {
                        Main.createDir(dir);
                    }
                    Fs.writeFileSync(path, data);
                    console.log(fileName + " has been successfully added to src directory");
                };
                Main.prototype.changeWrappers = function (options) {
                    var file = options.file;
                    var data = options.data;
                    var dest = options.destination;
                    if (file == 'angular.js') {
                        data = Main.changeAngularWrappers(data);
                    }
                    else {
                        data = Main.changeModuleWrappers(data);
                    }
                    this.writeToSrcDir(dest, data);
                };
                Main.prototype.getFile = function (repo, version, file, destination) {
                    try {
                        var path = "/" + repo + "/" + version + "/" + file;
                        console.info("FETCH", path);
                        return new Promise(function (resolve, reject) {
                            var req = https.request({
                                host: 'raw.githubusercontent.com',
                                path: path,
                                method: 'GET',
                            }, function (res) {
                                var data = '';
                                res.on('data', function (chunk) {
                                    data += chunk;
                                });
                                res.on('end', function () {
                                    resolve({ file: file, data: data, destination: destination });
                                });
                                res.on('error', function () {
                                    reject(false);
                                });
                            });
                            req.on('error', function (e) { return reject(false); });
                            req.end();
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                return Main;
            })();
            //let stream = new Main();
            new Main();
        }
    }
});
//# sourceMappingURL=build.js.map