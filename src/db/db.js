const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/form")
.then(()=>{
    console.log("Database Connected")
    
})
.catch((error)=>{
    console.log(error)
    
}) 