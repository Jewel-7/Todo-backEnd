// const sendError = (error, req, res, next) => {
//     res.status;
// };

const sendErrorMessgae = (error, req, res) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
    });
};

module.exports = sendErrorMessgae;