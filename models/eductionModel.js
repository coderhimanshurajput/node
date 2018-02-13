'use strict';

var mongoose  = require('mongoose');
var path = require('path');
var dataSchema = mongoose.Schema;

var EduDetails = new dataSchema ({
    Text : {
        type : String,
        require : true,
    },
    Description:{
        type : String,
        require: true,
    }
});

var EduDetailsIn = mongoose.model('eductionModel',EduDetails);
module.exports = EduDetailsIn;



