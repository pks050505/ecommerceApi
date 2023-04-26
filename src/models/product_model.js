const {Schema,model}=require("mongoose");

const productSchema= new Schema({

    title: {type:String ,required:[true,"Title is required"]},
    category:{type:Schema.Types.ObjectId,ref:"Category",required:true},
    description: {type:String,default:''},
    price:{type:Number,required:true},
    images:{type:Array,default:[]},
    
    updatedOn: {type:Date},
    createdOn: {type:Date},
});

productSchema.pre("save",function(next){
    this.createdOn=new Date();
    this.updatedOn=new Date();

    next();
});

productSchema.pre(["update","findOneAndUpdate","updateOne"],function(next){
    const update=this.getUpdate();
    delete update._id;
    this.updatedOn=new Date();
    next();
});

const ProductModel=model("Product",productSchema);
module.exports=ProductModel;