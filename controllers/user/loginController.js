'use strict';

const
    path = require('path'),
    async = require('async'),
    _  = require('lodash'),
    mongoose = require('mongoose'),
    loginModel = require(path.resolve(`./models/loginModel`)),
    jwt = require('jwt-express');


exports.UserLogin = function (req, res, next) {
    var dataBody = req.body;

    var Login = {
        email : dataBody.email,
        password : dataBody.password
    };
    var LoginModel = new loginModel(Login);
    console.log(LoginModel);

 LoginModel.findOne({
    email :dataBody.email,
 },function (err, user) {
     if (err) throw err;
     if(!user){
         res.json({success:false,message :'Authentication Failed. User not found.' });
     } else if(user){
         if(user.password != dataBody.password){
             req.json({success:false,message:'Authentication Failed.Wrong Password'});
         }else {

             // create a token with only our given with payload

             const payload = {
                  admin: user.admin
             };
             var token = jwt.sign(payload,app.get('superSecret'),{
                 expiresInMinutes: 1440 // expires in 24 hours
             });

             // return  information including with token as JSON
             res.json({
                 success : true,
                 message : 'Login Successfully !! Welcome Back ',
                 token : token
             });
         }
     }
     });

}