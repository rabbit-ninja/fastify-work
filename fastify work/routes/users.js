async function routes(fastify, options){
    //GET /users/:id
    fastify.get('/:id', async(req, res)=>{
        if(req.params.id=="g"){
            res.raw.end('<script> var url= "https://www.google.com"; window.location = url; </script> ');
        }
        else{
            res.send({
                id: req.params.id,
                status:'Will not redirect to google unless id is == g'
            });
        }
        
    });

};
module.exports = routes;