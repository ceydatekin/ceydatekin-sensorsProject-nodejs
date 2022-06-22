
const httpStatus = require("http-status");

var ObjectId = require('mongoose').Types.ObjectId;
// ObjectId.isValid('microsoft123');
const idChecker = (field) => (req, res, next) => {

    if(!ObjectId.isValid(req?.params[field || "id"])){

        return;
    }
    next();
};

module.exports = idChecker;