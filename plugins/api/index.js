module.exports = {
    name: "ApiPlugin",
    register: async (server, options) => {

        require('./api.routes')(server);

    }
}
