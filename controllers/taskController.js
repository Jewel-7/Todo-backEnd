const fs = require("fs");
const path = require("path");
const Task = require("../models/taskSchema");
const uniqid = require("uniqid");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessgae = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const { Query } = require("mongoose");
const { query } = require("express");

const verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["taskName"];
  let result = requiredProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    sendErrorMessgae(
      new AppError(400, "Unsucessful", "Request body is not valid"),
      req,
      res
    );
  } else {
    next();
  }
};

const createTask = (req, res, next) => {
  let todo = new Task(req.body);
  todo.save().then((data) => {
    sendResponse(200, "Sucessfull", "Task Is Created", req, res);
  });
};

const findUniqueTask = (req, res, next) => {
  Task.find(req.body).then((data) => {
    if (data.length == 0) {
      sendErrorMessgae(
        new AppError(400, "Unsucessful", "Task is in valid"),
        req,
        res
      );
    }

    sendResponse(200, "Sucessful", data, req, res);
  });
};
const findTask = (req, res, next) => {
  Task.find().then((data) => {
    sendResponse(200, "Sucessful", data, req, res);
  });
};

const updateUniqueTask = (req, res, next) => {
  Task.updateOne(req.params, req.body).then((data) => {
    console.log(req.params);

    if (data.nModified == false) {
      sendErrorMessgae(new AppError(404, "There is no such Data"), req, res);
    }
    res.send("Task Updated");
  });
};

const deleteTask = (req, res, next) => {
  Task.deleteOne(req.body).then((data) => {
    if (data.n == false) {
      sendErrorMessgae(new AppError(404, "There is no such Data"), req, res);
    }
    res.send("Deleted");
  });
};

module.exports.createTask = createTask;
module.exports.findTask = findTask;
module.exports.findUniqueTask = findUniqueTask;
module.exports.updateUniqueTask = updateUniqueTask;
module.exports.deleteTask = deleteTask;
module.exports.verifyPostRequest = verifyPostRequest;
