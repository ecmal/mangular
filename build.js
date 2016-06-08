require('./out/runtime/package');
system.import('mangular/build').catch(function(e){
    console.error(e.stack);
    process.exit(1);
});