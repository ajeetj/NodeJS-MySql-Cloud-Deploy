var repo = require('../data/taskRepo');

function list_all_tasks(req, res) {
  let response = {};
  console.log(`trying to fetch the tasks.`);
  return repo.getAllTask()
      .then(tasks => {
          response = Object.assign(response, tasks);
          return res.send(response);
      })
      .catch(error => {
          console.log(`failed to fetch the tasks`, { error });
          return res.status(500).send(response);
      });
}

module.exports = {
  list_all_tasks
};
