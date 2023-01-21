const UserModel=require("./user.model")
const {Router} = require("express");
const app = Router()

app.post("/register",async(req,res)=>{
           const {email}=req.body;

       try{
       
         const findUser= await UserModel.findOne({email})
       
          if(findUser){
            return res.send("User already exist")
          } 

        const user=new UserModel(req.body);
        await user.save()
        return res.status(201).send("user created successfully");
       }catch(e){
        res.send(e.message)
       }
})


app.post("/login",async(req,res)=>{
   const {email,password}=req.body;

 try{
      const user=await UserModel.findOne({email,password})
      if(user){
        res.send({message:"login successfull"})
      }else{
       res.status(401).send("invalid credintials")
      }
      }catch(e){
            res.send(e.message)
      }
})


app.get("/getProfile",async(req,res)=>{
    try{
      const user=await UserModel.findOne({email})
      if(user){
        return res.send(user.name,user.email)
      }else{
        return res.status(404).send("Cannot find user")
      }
    }catch(e){
      res.send(e.message)
    }
})

module.exports=app;