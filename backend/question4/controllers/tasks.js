const Tasks = require("../models/Tasks");

const getTasks = async (req, res) => {
  Tasks.find({}, function (err, tasks) {
    res.send(tasks);
  });
};

const createTasks = async (req, res) => {
  Tasks.create(req.body, function (err, task) {
    res.send(task);
  });
};

const updateTasks = (req, res) => {
  Tasks.findOneAndUpdate({ _id: req.body.id }, { name: req.body.name, status: req.body.status },
    function (err, result) {
      res.send(result);
    });
};

const deleteTasks = async (req, res) => {
  Tasks.deleteOne({ _id: req.params.id }, function (err, tasks) {
    res.send(tasks);
  });
};

module.exports = { getTasks, createTasks, updateTasks, deleteTasks };
