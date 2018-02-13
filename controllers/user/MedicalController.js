'use strict';
const
    path = require('path'),
    _  = require('lodash'),
    async = require('async'),
    mongoose  = require('mongoose');
var medDetINS = require(path.resolve('./models/medicalModel'));

exports.MedicalDetIns = function (req, res, next ) {
    var medField = {
        Text:req.body.Text,
        Description:req.body.Description
    }
    var MedicalDI = new medDetINS(medField);
    medicalDI.save(function (err, saveObj) {
       if(err){
           res.json({obj:err,message:'Data Is Not Saved'});
       } else {
           res.json({obj:saveObj,message:'Data Saved Successfully'});
       }
    });
}


