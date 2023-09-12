const mongoose=require(`mongoose`)


const empSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
  
 
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },

})

const Collection =new mongoose.model("collection",empSchema)
module.exports=Collection