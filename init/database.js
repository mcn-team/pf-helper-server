const mysql = require('mysql');
const { database } = require('../config/config');

exports.init = () => {
    exports.pool = mysql.createPool({
        connectionLimit: database.connectionLimit,
        host            : database.host,
        user            : database.user,
        password        : database.password,
        database        : database.schema
    });
};
