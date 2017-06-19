var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/verify_email/:id?',function(req,res){
console.log(req.protocol+"://"+req.get('host'));
User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'No User Found!',
                error: {message: 'User not found'}
            });
        }
        if(req.params.id==user._id){
        user.isActive=true;
        }
        user.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if(res.status(200))
            {
                console.log('User Updated');
                res.redirect('/auth/signin');
            }
       });
    });
});

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
