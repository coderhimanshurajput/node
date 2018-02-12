'use strict';

const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose'),
    // md5  = require('md5'),
    // crypto = require('crypto'),
    UserModel   = require(path.resolve(`./models/usermodel`));

exports.SaveData = function (req, res, next) {

    var reqBody = req.body;

    // var hashMd5 = crypto.createHash('md5').update(salt + password).digest("hex");

    var user = {
        name : req.body.name,
        mobile:reqBody.module,
        email : reqBody.email,
        password : reqBody.password,
        address : reqBody.address,
    };
    console.log(user);

    var usermodel = new UserModel(user);
    console.log(usermodel);

    usermodel.save(function (err, saveObj) {

        if(err){
            res.json({obj:err,message:'unsuccess'});
        } else {
            res.json({obj:saveObj,message:'success'});
        }
    });
}

// module.exports = SaveData;
