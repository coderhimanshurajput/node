'use strict';

const
    path = require('path'),
    async = require('async'),
    _  = require('lodash'),
    mongoose  = require('mongoose');
var SocMod = require(path.resolve('./models/SocialModel'));

exports.SocialDetIns = function (req, res, next) {

    var SocField = {
        Text: req.body.Text,
        Description : req.body.Description
    }
     var SocNewObj = new SocMod(SocField);

    SocNewObj.save(function (err, saveObj) {

        if(err){
            res.json({obj:err,message:'Data not saved'});
        } else {
            res.json({obj:saveObj,message:'Data Insert Susscfully'});
        }
    });
}
