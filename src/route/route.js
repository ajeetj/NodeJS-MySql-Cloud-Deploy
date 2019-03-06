const express = require('express');
const router = express.Router();
const taskController = require("../controller/appController");

router.route('/status')
    .get(function (req, res) {
        res.send({ message: "server is up and running!" });
    });

router.route("/tasks")
    .get(taskController.list_all_tasks);

module.exports = router;