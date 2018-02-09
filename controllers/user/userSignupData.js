"use strick";

const
    path = require('path'),
    async = require('async'),
    _     =   require('lodash'),
    mongoose = require('mongoose'),
    config = require(path.resolve('./config/mongoconfig')),
    userModel = require(path.resolve('./models/usermodel')),
    express = require('express'),
    router = express.Router();

exports.userSignupData = function (req, res, next) {
    console.log("heloooo HImanhsu");
}

module.exports = router;
