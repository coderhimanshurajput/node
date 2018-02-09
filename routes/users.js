'user strict';

const express  = require('express'),
    fs = require('fs'),
    path = require('path'),
    expressJWT = require('express-jwt'),
    config = require(path.resolve('./config/mongoconfig')),
    router = express.Router(),
    mongoose = require('mongoose');

 /*============ file system concat =====================*/

var ctrl = {};
fs.readdirSync(path.resolve('./controllers/user')).forEach(file =>{
    console.log(file)
    var name = file.substr(0,file.indexOf('.'));
    ctrl[name] = require(path.resolve(`./controllers/user/${name}`));
});

console.log(ctrl);
/*check for user authentication*/

router.use(expressJWT({
    secret:new Buffer(config.secret).toString('base64')
}).unless({
    path:[
        'user/userSignupData'
    ]
}));

// console.log(ctrl);

router.post('/userSignupData',ctrl.user.userSignupData);

module.exports = router;