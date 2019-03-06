var db = require('./db');

const tbl = "tasks";

const getAllTask = (() => {
    return db.select().table(tbl)
    .then(data => {
        console.log(data[0]);
        return data[0];
    });
    
});

module.exports = {
    getAllTask
};