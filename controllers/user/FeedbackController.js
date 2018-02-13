'use strict';

const
    path = require('path'),
    _    = require('lodash'),
    async = require('async'),
    mongoose = require('mongoose');

var FeedBackModel = require(path.resolve('./models/FeedbackModel'));

exports.FeedBD = function (req,res, next) {
    var FeedFiled = {
        name : req.body.name,
        email : req.body.email,
        mobile : req.body.mobile,
        textfield : req.body.textfield
    }
    console.log('FeedFiled');

    var FeedNewObj = new FeedBackModel(FeedFiled);

    FeedNewObj.save(function (err, saveObj) {
        if(err){
            res.json({obj:err , message:'!!!!! Ops !!!! This is Wrong '});
        } else {
            res.json({obj:err,message:'Thanku!! Data Succssfully Saved'});
        }
    })
}