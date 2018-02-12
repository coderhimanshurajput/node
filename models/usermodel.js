'use strict';

var mongoose  = require('mongoose');
var path = require('path');
var dataSchema = mongoose.Schema;

var UserModel = new dataSchema ({
    name:{
        type:String,
        required:true,

    },
    mobile:{
      type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

var userData = mongoose.model('usermodel',UserModel);

module.exports =userData;

