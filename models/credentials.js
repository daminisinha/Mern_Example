let mongoose =  require('mongoose');

let loginSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

let Login = module.exports=mongoose.model('logincreadentials',loginSchema);
