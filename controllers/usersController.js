
const User = require("../models/userModel");
const bcrypt = require("bcrypt")



module.exports.register = async(req,res,next)=>{

    try{
        const {username,email,password}=req.body;

    const usernamecheck = await User.findOne({username});
    if(usernamecheck){
    return res.json({msg:"username already used",status:false});
    }
    const emailcheck = await User.findOne({email});
    if(emailcheck){
    return res.json({msg:"email already used",status:false});
    }


    const hashedPassword = await bcrypt.hash(password,10);

    const user =await User.create({
        email,username,password:hashedPassword,
    });

    delete user.password;
    return res.json({status:true, user})
    }
    catch(er){
        next(er);
    }
};

module.exports.login = async(req,res,next)=>{

    try{
        const {username,password}=req.body;

    const users = await User.findOne({username});
    if(!users){
    return res.json({msg:"Incorrect username or password",status:false});
    }
    


    const isPasswordValid = await bcrypt.compare(password,users.password);
    if(!isPasswordValid){
        return res.json({msg:"incorrect username or password",status:false});
        }
    
    delete users.password;
    return res.json({status:true, users})
    }
    catch(er){
        next(er);
    }
};