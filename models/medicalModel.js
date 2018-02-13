'use strict';
var mongoose = require('mongoose');
var path =  require('path');
var dataSchema = mongoose.Schema;

var MedDet = new dataSchema({
   Text :{
       type:String,
       required: true
   } ,
    Description:{
       type:String,
        required:true
    }
});

var MedDetIN = mongoose.model('medicalModel',MedDet);
module.exports = MedDetIN;

