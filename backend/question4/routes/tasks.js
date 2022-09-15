const {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks");

const router = require("express").Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);

module.exports = router;
