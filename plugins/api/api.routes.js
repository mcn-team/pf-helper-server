module.exports = exports = (server) => {
    server.route([
        {
            method: 'GET',
            path: '/api/hello',
            handler: async () => {
                return 'Hello, World';
            }
        }
    ]);
};
