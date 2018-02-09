'use strict';

const
    path = require('path'),
    async = require('async'),
    _     =   require('lodash'),
    mongoose = require('mongoose'),
    config = require(path.resolve('./config/mongoconfig')),
    userModel = require(path.resolve('./models/usermodel')),
    express = require('express'),
    router = express.Router();

exports.userSignupData = function (req, res, next)
{
    var dataBody =req.body;

    var hashedPassword = bcrypt.hashSync(dataBody.password,8);

    UserCreate({
        name : dataBody.name,
        email : dataBody.email,
        password : hashedPassword,
        address : dataBody.address ,

    },
        function (err, user) {
        if (err)
        {
            return req.status(500).send("There Was a Problem Registering the user.")
        }
        else
            {
                req.status(200).send("Registration Successfully");
            }
        });

         // console.log("heloooo HImanhsu");
 }

module.exports = router;
