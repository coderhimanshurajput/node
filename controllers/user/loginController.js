'use strict';

const
    path = require('path'),
    async = require('async'),
    _  = require('lodash'),
    mongoose = require('mongoose'),
    userModel = require(path.resolve(`./models/usermodel.js`)),
    jwt = require('jwt-express');
var crypto = require('crypto');
var string = 'my string';


// ====================  Create a login method ================================

exports.UserLogin = function (req, res, next) {
    var dataBody = req.body;
    var hash = crypto.createHash('md5').update(string).digest('hex');


    var Login = {
        email : dataBody.email,
        password : dataBody.password
    };
    //console.log(LoginModel);

    userModel.findOne({
        email :dataBody.email,
    },function (err, user) {
        if(user){
            if(user.password===dataBody.password){
                res.json({message:'success'});
            }else{
                res.json({message:'wrong password'});
            }
        }else{
            res.json({message:'user not found'});
        }

        console.log(user)
        /* if (err) throw err;
         if(!user){
             res.json({success:false,message :'Authentication Failed. User not found.' });
         } else if(user){
             if(user.password != dataBody.password){
                 req.json({success:false,message:'Authentication Failed.Wrong Password'});
             }else {
    // ====================== create a token with only our given with payload  ==============================
                 const payload = {
                      admin: user.admin
                 };
                 var token = jwt.sign(payload,app.get('superSecret'),{
                     expiresInMinutes: 1440 // expires in 24 hours
                 });
    // =====================  return  information including with token as JSON ===============================
                 res.json({
                     success : true,
                     message : 'Login Successfully !! Welcome Back ',
                     token : token
                 });
             }
         }*/
    });

}
