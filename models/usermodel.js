'use strict';

const
    mongoose  = require('mongoose'),
    path = require('path'),
    Schema = mongoose.Schema;

var Usermodel;
Usermodel = new Schema ({
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

module.exports = mongoose.model('Usermodel','Usermodel');

