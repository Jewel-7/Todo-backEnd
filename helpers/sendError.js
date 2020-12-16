const sendErrorMessgae = (error, req, res) => {
  res.status(error.statusCode).json({
    statusCode: error.statusCode,
    status: error.status,
    message: error.message,
  });
};

module.exports = sendErrorMessgae;
