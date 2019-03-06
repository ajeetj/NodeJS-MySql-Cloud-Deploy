
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("tasks", function (tbl) {
            tbl.uuid("id");
            tbl.primary("id");
            tbl.varchar("task");
            tbl.boolean("status");
            tbl.timestamps(true, true);
        })
        .then((_) => {
            return knex("tasks").insert([
                {
                    id: "1",
                    task: "deploy",
                    status: 1,
                }
            ]);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists("tasks");
};
