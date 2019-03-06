const server = require("./server");
const seeder = require("./data/seeder");

server.listen("9090", () => {
    console.log('API server started on: 9090');
    setImmediate(() => {
        seeder.initMigration()
            .catch(error => {
                console.log('There was an error while running migration. Attempting rollback', { error });
                seeder.rollBackMigration();
            });
    });
});
