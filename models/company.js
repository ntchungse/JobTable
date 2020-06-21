const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name:String,
  location:String,
  avt:String,
  phoneNumber:String,
  email:String,
  description:String,
  roles:String,
  newsId:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'news'
  }]
});
const Company = mongoose.model('Company',companySchema);
module.exports = Company;