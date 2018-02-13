'use strict';

var mongoose = require('mongoose');
var path  = require('path');
var dataSchema =  mongoose.Schema;

var SocialDet = new dataSchema ({

    Text :{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }

});

var socDet  = mongoose.model('SocialModel',SocialDet);

module.exports = socDet;