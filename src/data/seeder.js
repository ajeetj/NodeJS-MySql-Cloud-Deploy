const db = require("./db");

const initMigration = function () {
    console.log('Initiating Migration');
    return db.migrate.latest()
        .then(function (data) {
            console.log(`Migration ran successfully ${data[0]}`);
            if (data.length >= 1 && data[1].length !== 0) {
                console.log(`Migration files that were were executed are`, { payload: data[1] });
                return data;
            }
        });
};

const rollBackMigration = function () {
    console.log('Intiating migration rollback');
    return db.migrate.rollback()
        .then(function (data) {
            console.log('Rollback was successful ,mutated records:', data.length);
            return data;
        });
};

module.exports = {
    initMigration: initMigration,
    rollBackMigration: rollBackMigration
};
