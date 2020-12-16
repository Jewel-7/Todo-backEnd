const mongoose = require("mongoose");
const uniqid = require("uniqid");
const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    default: uniqid(),
  },

  taskName: {
    type: String,
    //required:[true,"please enter"]
    validate: {
      validator: function () {
        console.log("this is validator", this);
        return true;
      },
    },
  },

  status: {
    type: String,
    default: "Not Started",
  },
});

const Task = mongoose.model("Data", taskSchema);

module.exports = Task;
