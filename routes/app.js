var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
res.render('index');
});
/*var User = require('../models/users');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node');
    });
});

router.post('/', function(req, res, next) {
   var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isactive: req.body.isactive
    });
    user.save();
    res.redirect('/');
});*/
module.exports = router;
