'use strict';

const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose');
    var md5  = require('md5');
  var crypto = require('crypto'),

    UserModel   = require(path.resolve(`./models/usermodel`));

exports.SaveData = function (req, res, next) {

    var Body = req.body;

  // var hashmd5 = crypto.createHash('md5').update(data).digest('hex');

   console.log('hashmd5');
    var user = {
        name : Body.name,
        mobile : Body.mobile,
        email : Body.email,
        password : Body.password,
        address : Body.address
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


