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

const updateTasks = async (req, res) => {
  Tasks.findOneAndUpdate(
    {_id:req.params.id},
    { name: req.body.name ,
     status: req.body.status },
    function (err, tasks) {
      res.send(tasks);
    }
  );
};

const deleteTasks = async (req, res) => {
  Tasks.deleteOne({ _id: req.params.id }, function (err, tasks) {
    res.send(tasks);
  });
};

module.exports = { getTasks, createTasks, updateTasks, deleteTasks };
