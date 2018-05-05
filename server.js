const Hapi = require('hapi');
const api = require('./plugins/api');
const config = require('./config/config.json');

// define some constants to make life easier
const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 3000;
const RADIX = 10;

// define your server
const server = Hapi.server({
    host: config.host,
    port: config.port,
    app: {}
});

const myServer = async () => {
    try {
        await server.register(api);

        await server.start();

        console.log(`Hapi server running at ${server.info.uri}`);

    } catch (err) {

        console.log("Hapi error starting server", err);

    }
};

myServer();
