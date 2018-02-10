'use strict';

const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose'),
    // md5  = require('md5'),
    UserModel   = require(path.resolve(`./models/usermodel`));

exports.SaveData = function (req, res, next) {
    var reqBody = req.body;
     // var md5password = crypto.createHash('md5');

    var user = {
        name : req.body.name,
        email : reqBody.email,
        password : reqBody.password,
        address : reqBody.address,
    };
    console.log(user);

    var usermodel = new UserModel(user);

    usermodel.save(function (err, saveObj) {

        if(err){
            res.json({obj:err,message:'unsuccess'});
        } else {
            res.json({obj:saveObj,message:'success'});
        }
    });
}

// module.exports = SaveData;
