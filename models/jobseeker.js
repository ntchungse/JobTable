const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    name:String,
    gender:String,
    email:String,
    avt:String,
    phoneNumber:String,
    roles:String,
    password:String,
    newsId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'news',
    }]
});
const JobSeeker = mongoose.model('jobSeeker',jobSeekerSchema);
module.exports = JobSeeker;