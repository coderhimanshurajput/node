'use strict';
var mongoose = require('mongoose');
var path = require('path');
var dataSchema = mongoose.Schema;

var FeedBack = new dataSchema({
   name:{
       type:String,
       required:true
   },
    email:{
       type:String,
       required:true
   },
    number:{
       type:String,
        required:true
    },
    textfield:{
       type:String,
        required:true
    }

});


var FeedModel = mongoose.model('FeedbackModel',FeedBack);
module.exports = FeedModel;