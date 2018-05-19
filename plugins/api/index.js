module.exports = {
    name: 'ApiPlugin',
    register: async (server) => {
        require('./api.routes')(server);
    }
};
