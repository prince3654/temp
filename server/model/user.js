import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

 const user = mongoose.model("user",signupSchema);
 export default user;

