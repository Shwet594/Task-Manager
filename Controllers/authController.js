import {userModel} from "../Models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login = async(req,res)=>{
    let {email,password}=req.body;
    let user =await userModel.findOne({email}).populate('tasks');
    if(!user) return res.send("user not exixts");
    bcrypt.compare(password,user.password,async(err,result)=>{
        if(!result) return res.send("login unsuccessful")
        return res.render("profile",{user})
     })
     let token = jwt.sign({email},process.env.JWT_KEY);
     res.cookie("token",token);
     

}
export const logout = (req, res) => {
  res.clearCookie("token"); // name of your cookie
  res.redirect("/");
};
export const register = async(req,res)=>{
    let {email,name,password}=req.body;
    let user =await userModel.findOne({email});
    if(user) return res.send("user exixts")
    bcrypt.hash(password,10,async(err,hash)=>{
        let user = await userModel.create({
            email,name,password:hash
        })
        res.send(user)
     })
} 