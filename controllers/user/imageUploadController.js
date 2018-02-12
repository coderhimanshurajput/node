'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var multer = require('multer');
// var index = require('./views/index')
// var upload  = multer({dest:'./public/upload/'});
var app = express();

// ========== storage in local folder with multer -======================

exports.imageUpload = function (req, res, next) {
    var storage = multer.diskStorage({
        destination: './public/upload',
        filename: function (req, file, cb) {
            cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
        }
    })
};
/* noinspection JSUnresolvedFunction*/

var storage;
var upload = multer({storage: storage}).single('profileImage');
app.post('./public/upload',(req, res) =>{
    res.send('hiiiiiiiiiiiiiiii');
})


