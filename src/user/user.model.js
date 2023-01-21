const {Schema,model}=require("mongoose");

const UserSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:String
},{timestamps:true})

const UserModel=model("user",UserSchema)


module.exports=UserModel;