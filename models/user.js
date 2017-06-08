var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    isActive: {type: Boolean, default:false}
});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User',schema);