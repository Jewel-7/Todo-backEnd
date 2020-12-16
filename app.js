const express = require("express");
const mongoose = require("mongoose");

const Task = require("./models/taskSchema");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("./routes/todoRoutes");
const taskRouter = require("./routes/todoRoutes");
// const Task = require("./models/taskSchema");

const app = express();
app.use(express.json());
// app.use("/todoList", taskRouter);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, connection) => {
    if (err) {
      console.log(err);
      return console.log("error in db");
    }
    app.use("/todoList", taskRouter);

    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });

    //console.log(connection);

    //creating
    console.log("succesfully connected");

    //  let newTask={
    //       taskName:"New Task"
    //  };
    //   Task.create(newTask)

    //   let newTask=new Task({
    //         taskName:"added using create"
    //     });
    //    newTask.save().then((data)=>{
    //         console.log(data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //  })

    //  task.find({}).then((allTasks)=>{

    //  })

    //to update

    // Task.updateOne({ status: "pending" }, { status: "Completed" })
    //   .then((data) => {
    //     console.log(data);
    //     console.log("888888888");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Task.findOneAndUpdate(
    // {
    //     status:"Pending"
    // },
    // {
    //     status:"Completed"
    // },
    // {userFinfAndModify:false,new:time}

    // )

    // Task.findById("5fd35bbc64110b2258248765").then((data)=>{
    //                 console.log(data);
    //            })
    //         .catch((err)=>{
    //              console.log(err);
    //         })

    // let newUser=new User({
    //     email:"user@gmail.com",
    //      password:"123"
    //  });
    //  newUser.save().then((user)=>{
    //    console.log(user);
    // })
    //  .catch((err)=>{
    //     console.log(err);
    //  })
  }
);

// app.listen(3000, console.log("App started on port 3000"));
// app.listen(process.env.PORT, () => {
//   console.log(`Server started on port ${process.env.PORT}`);
// });
