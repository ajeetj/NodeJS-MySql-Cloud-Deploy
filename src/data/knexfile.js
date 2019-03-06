const path = require("path");
let config = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'password',
        database : 'aj'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, './migrations')
    },
    pool: { min: 0, max: 6 }
};

module.exports = config;
