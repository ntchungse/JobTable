const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title:String,
  location:String,
  level:String,
  field:String,
  type:String,
  salary:{
    min:String,
    max:String,
    currency:String,
  },
  jobseekerId:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'jobseeker',
  }],
  companyID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'company'
  },
  companyName:String,
  avt:String
});
const News = mongoose.model('news',newsSchema);
module.exports = News;