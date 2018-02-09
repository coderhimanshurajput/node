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
    var hashedPassword = bcrypt.hashSync(req.body.password,8);

    UserCreate({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword,
        address : req.body.address ,

    })

    console.log("heloooo HImanhsu");
}

module.exports = router;
