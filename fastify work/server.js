//Imports
const fastify = require('fastify')();
//Routes
fastify.register(require('./routes/users'), {prefix:'/users'});
//Listner
fastify.listen(3000, function(err, address) {
    if(err){
        console.log(err);
        process.exit(1);
    }else{
        console.log('server is up and running on port 3000...')
    }
});