'use strict';

const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose'),
    md5  = require('md5'),
    crypto = require('crypto'),

    UserModel   = require(path.resolve(`./models/usermodel`));
var string = 'my string';

exports.SaveData = function (req, res, next) {

    var Body = req.body;
    console.log(req.body);

    var hash = crypto.createHash('md5').update(string).digest('hex');
    console.log('hash');

    var user = {
        name : Body.name,
        mobile : Body.mobile,
        email : Body.email,
        password : Body.hash,
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

// module.exports = SaveData;
