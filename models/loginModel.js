'use strict';

var mongoose = require('mongoose');
var path =  require('path');
var dataSchema  = mongoose.Schema;

var Login = new dataSchema({
    email :{
       type: String,
        required : true,
    },
    password : {
        type: String,
        required:true,
    }

});

var LoginUser = mongoose.model('loginModel',Login)

module.exports = LoginUser;