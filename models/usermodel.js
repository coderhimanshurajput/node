"use strick";

const
    mongoose  = require('mongoose'),
    path = require('path'),
    schema = mongoose.schema;

Usermodel = new schema ({
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

mongoose.exports = mongoose.model('usermodel','Usermodel');
