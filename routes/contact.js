var express = require('express');
var router = express.Router();
//var bcrypt = require('bcryptjs');
//var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var Contact = require('../models/contact');
//var multer = require('multer');
//var GridFsStorage = require('multer-gridfs-storage');
//var Grid = require('gridfs-stream');
//var conn = mongoose.connection;
//console.log(conn);
//Grid.mongo = mongoose.mongo;
//var gfs = Grid(conn.db);
router.get('/',function(req,res){
Contact.getContacts(function(err,contacts){
    if(err) throw err;
    res.json(contacts);
});
})
 /** API path that will upload the files */
// router.post('/upload', function(req, res) {
//         upload(req,res,function(err){
//             if(err){
//                  res.json({error_code:1,err_desc:err});
//                  return;
//             }
//              res.json({error_code:0,err_desc:null});
//         });
//     });

router.post('/', function(req, res, next) {
console.log("in routes "+req+" "+res);
   var contact = new Contact({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                current_location: req.body.current_location,
                total_experience: req.body.total_experience,
                current_organization: req.body.current_organization,
                job_role: req.body.job_role,
                gender: req.body.gender,
                social_profile_link: req.body.social_profile_link,
                dateofbirth: req.body.dateofbirth,
                resume_upload: req.body.resume_upload
            });
    /** Setting up storage using multer-gridfs-storage */
    // var storage = GridFsStorage({
    //     gfs : gfs,
    //     filename: function (req, file, cb) {
    //         cb(null, file.fieldname);
    //     },
    //     /** With gridfs we can store aditional meta-data along with the file */
    //     metadata: function(req, file, cb) {
    //         cb(null, { originalname: file.originalname });
    //     },
    //     root: 'ctFiles' //root name for collection to store files into
    // });

    // var upload = multer({ //multer settings for single upload
    //     storage: storage
    // }).single('file');


    contact.save(function(err,result){
        if (err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        return res.status(201).json({
          message: 'Contact Created',
          obj: result
        });
    });
});
router.delete('/:_id',function(req,res){
    Contact.deleteContact(req.params._id,function(err,contact){
    if(err) throw err;
    res.json(contact);
});    
})
module.exports = router;