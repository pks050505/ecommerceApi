const {Schema,model} =require("mongoose");
const uuid=require("uuid");
const bcrypt=require("bcrypt");
const userSchema=new Schema({
    id:{type:String,unique:true},
    fullName:{type:String,default:""},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},   // abc34 -> imdjhhdjju4kju466
    phoneNumber:{type:String,default:""},
    city:{type:String,default:""},
    address:{type:String,default:""},
    state:{type:String,default:""},
    profileProgress:{type:Number,default:0},  //0->account created , 1-> address entered
    updatedOn:{type:Date},
    createdOn:{type:Date},
});

userSchema.pre("save",function(next){
    this.id=uuid.v1();
    this.updatedOn=new Date();
    this.createdOn=new Date();
  // Hash the password
  const salt=bcrypt.genSaltSync(10);
  const hash=bcrypt.hashSync(this.password,salt);
  this.password=hash;
  next();

});

userSchema.pre(['update','findOneAndUpdate',"updateOne"],function(next){
    const update=this.getUpdate();
    delete update.id;
    delete update._id;

    this.updatedOn=new Date();
    next();
});

const userModel=model('User',userSchema);
module.exports=userModel;