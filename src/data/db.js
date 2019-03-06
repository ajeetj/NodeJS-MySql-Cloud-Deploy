const cnf = require("./knexfile");
const knex = require("knex")(cnf);

module.exports = knex;