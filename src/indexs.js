const express =require("express")
const app =express()
let port =3000
const path =require(`path`)
const Collection=require("./Models/models")
const templatepath=path.join(__dirname,"../template/views")
app.set(`view engine`,`hbs`);
app.set(`views`,templatepath)
app.use(express.urlencoded({extended:false}))

require("./db/db")


// app.get("/",(req,res)=>{
//     res.send("Hello Worlds in the Artificail thereasas are lots of games")
// })git add README.md
app.get(`/`,(req,res)=>{
    res.render(`index`)
})
app.post('/data',async(req,res)=>{
    try {
        const checkpassword=req.body.password
        const cpassword=req.body.cpassword
        if(checkpassword===cpassword){
         const  datas =  new  Collection({
     
             fname: req.body.fname,
             lname:req.body.lname,
             email:req.body.email,
             number: req.body.number,
            
           
             password:req.body.password,
             cpassword : req.body.cpassword
             
     
         })
         const postdata= await datas.save();
         res.sendFile(path.join(__dirname, '../file/home.html'));

        }
        else{
         res.send("Password Are not Match")
        }
        
    } catch (error) {
        res.send(error)
    }
   
})
app.listen(port,()=>{
    console.log("Port Are Runnning at 3000")
})