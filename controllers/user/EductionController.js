'use strict';

const
    path 	 	= require('path'),
    async 	 	= require('async'),
    _ 			= require('lodash'),
    mongoose 	= require('mongoose');
var EduDetails = require(path.resolve(`./models/eductionModel`));

exports.EduDetailsInsert = function (req, res, next) {

   let body = req.body;

   var Edu = {
       Text :body.Text,
       Description: body.Description
   };
   console.log(Edu);

  var  EduDet = new EduDetails(Edu);


      EduDet.save(function (err, saveObj) {
          console.log('EduDet');

          if (err) {
              res.json({obj: err, message: 'Data Is not Saved'});
          } else {
              res.json({obj: saveObj, message: 'Data Insert Successfully'});
          }
      });
};
