const path = require("path");
let config = {
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, './migrations')
    },
    pool: { min: 0, max: 6 }
};

module.exports = config;
