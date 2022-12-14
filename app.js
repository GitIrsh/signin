const{ Model } = require('objection');
const hapi = require('@hapi/hapi');
const knex = require('knex');
const route = require('./router/router');

const init = async () => {
    knex
        .raw('select 1+1 as result')
        .then(_ => {
            console.log("DB connected")
        })
        .catch(e => {
            console.log("Error", e)
            process.exit(1)
        })

        Model.knex(knex)
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });  
    server.route(route)
    await server.start();
    console.log('Port is on %s', server.info.uri);
    process.on('unhandledRejection', (err) => {

        console.log(err);
        process.exit(1);
    });
};

init();
console.log(() => { })