const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test2Schema = new Schema({
    username:{type:String, required: true},
    password: {type:String, required: true},
    city: {type:String, required: true},
    gender: {type:String, required: true},
    description: {type:String, required: true},
    dob: {type:String, required: true},
});
module.exports = mongoose.model('Test2', test2Schema);
