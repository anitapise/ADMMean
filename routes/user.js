var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
    host: 'mailtrap.io',
    port: 2525,
    auth: {
        user: 'heroku-862474415adad528',
        pass: 'fc85dee542d86c3d'
    }
}));
router.post('/', function(req, res, next) {
   var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        isactive: req.body.isactive
    });
    user.save(function(err,result){
        if (err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
          message: 'User Created',
          obj: result
        });
    });
host=req.get('host');
link="http://"+req.get('host')+"/auth/signin/"+user._id;
var mail = {
    from: "mailer@ambersoft.in",
    to: user.email,
    subject: "Verify your Email account",
    html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
}

transporter.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + user._id);

    }
    transporter.close();
});
});
router.get('/signin/:id',function(req,res){
console.log(req.protocol+"://"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query._id==user._id)
    {
        console.log("email is verified");
        res.end("<h1>Email is been Successfully verified");
    }
    else
    {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
}
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});
module.exports = router;