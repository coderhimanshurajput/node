'use strict';

var mongoose  = require('mongoose');
var path = require('path');
var dataSchema = mongoose.Schema;

var UserModel = new dataSchema ({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    address:{
        type:String,
    }
});

var userData = mongoose.model('usermodel',UserModel);

module.exports =userData;

