const Hapi = require('hapi');
const api = require('./plugins/api');
const config = require('./config/config.json');
const log = require('./utils/helpers/log.helpers');

const database = require('./init/database');

// define your server
const server = Hapi.server({
    host: config.host,
    port: config.port,
    app: {}
});

const myServer = async () => {
    database.init();
    try {
        await server.register(api);

        await server.start();

        log.info(`Hapi server running at ${server.info.uri}`);
    } catch (err) {
        log.error('Hapi error starting server', err);
    }
};

myServer();
