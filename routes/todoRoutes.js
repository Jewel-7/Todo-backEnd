//all the end point for /todoList
const express = require("express");
const {
  findTask,
  createTask,
  findUniqueTask,
  updateUniqueTask,
  verifyPostRequest,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/create").post(verifyPostRequest, createTask);
router.route("/find").get(findTask);
router.route("/finduni").get(findUniqueTask);

router.route("/update/:taskId").post(updateUniqueTask);
router.route("/delete").post(deleteTask);

// router.route("/tasks").get(getAllTasks).post(verifyPostRequest, createTask);

// router.route("/tasks/:id").get(getTasks);

module.exports = router;
