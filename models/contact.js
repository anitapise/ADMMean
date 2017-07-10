var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    phone:{type: Number},
    current_location:{type: String},
    total_experience: {type: Number},
    current_organization:{type: String},
    job_role:{type: String},
    gender:{type: String},
    social_profile_link:{type: String},
    dateofbirth:{type: Date},
    resume_upload:{type: Buffer}
    });
schema.plugin(mongooseUniqueValidator);
var Contact=module.exports=mongoose.model('Contact',schema);
module.exports.getContacts=function(callback){
    Contact.find(callback);
}
module.exports.deleteContact=function(id,callback){
    Contact.findByIdAndRemove(id,callback);
}