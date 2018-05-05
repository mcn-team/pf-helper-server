module.exports = exports = (server) => {
    server.route([
        {
            method: "GET",
            path: "/api/hello",
            handler: async (request, h) => {
                return "Hello, World";

            }
        }
    ]);
}
