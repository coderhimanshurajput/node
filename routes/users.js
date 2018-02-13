'user strict';

const express  = require('express'),
    fs = require('fs'),
    path = require('path'),
    expressJWT = require('express-jwt'),
    config = require(path.resolve('./config/mongoconfig')),
    router = express.Router();


/*============ file system concat =====================*/

var ctrl = {};
fs.readdirSync(path.resolve('./controllers/user')).forEach(file =>{
    // console.log(file)
    var name = file.substr(0,file.indexOf('.'));
    ctrl[name] = require(path.resolve(`./controllers/user/${name}`));
});

// console.log(ctrl);

/*check for user authentication*/

/*router.use(expressJWT({
    secret: new Buffer(config.secret).toString('base64')
}).unless({
    path:[
        'user/userSignupData'
    ]
}));*/

// console.log(ctrl);


/** @namespace ctrl.userSignupData */
router.post('/SaveData',ctrl.userSignupData.SaveData);
/** @namespace ctrl.loginController */
router.post('/UserLogin',ctrl.loginController.UserLogin);
/** @namespace ctrl.imageUploadController */
router.post('/imageUpload',ctrl.imageUploadController.imageUpload);
/** @namespace ctrl.EductionController */
router.post('/EduDetailsInsert',ctrl.EductionController.EduDetailsInsert);
/** @namespace ctrl.MedicalController */
router.post(('/MedicalDetIns',ctrl.MedicalController.MedicalDetIns));
/** @namespace ctrl.SocialController */
router.post('/SocialDetIns',ctrl.SocialController.SocialDetIns);
/** @namespace ctrl.FeedbackController */
router.post('./FeedBD',ctrl.FeedbackController.FeedBD);



module.exports = router;