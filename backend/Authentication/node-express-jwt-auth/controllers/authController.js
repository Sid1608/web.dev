const User=require("../models/User")
const jwt=require('jsonwebtoken')
//handle errors
//E11000 duplicate key error collection: node-auth.users index: email_1 dup key: { email: "mario@gmail.com" } 11000
///we can not do a custom message for a error like unique. above inf will be present in error.code
const handleErrors=(err)=>{
    //message propery contain inf about all errors
    console.log(err.message,err.code)
    let errors={email:'', password:''};

    //incorrect email address
    if(err.message==='incorrect email'){
        errors.email='that email is not registered'
    }
    //incorrect password
    if(err.message === 'incorrect password'){
        errors.password='that password is not correct'
    }

    //duplicate erro code 
    if(err.code === 11000){
        errors.email = 'that email is already registered';
        return errors;
    }

    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }
    return errors;

}
//jwt expects a time in second while cookie expects a time in milliseconds
const maxAge=3*24*60*60;

const createToken=(id)=>{
    return jwt.sign({id},'net ninja secret',{//return a token with a signature. the header automatically get applied  
        expiresIn:maxAge
    });
}

module.exports.signup_get=(req,res)=>{
    res.render('signup');
}
module.exports.login_get=(req,res)=>{
    res.render('login');
}
module.exports.signup_post=async (req,res)=>{
    const {email,password} = req.body;//destructring
    try{
        //  it create an instance of user locally for us and save it in datbase
        const user=await User.create({email,password})//asynchronous task return promises so we have to wait until until this is complete and promise has resolved  
        const token=createToken(user._id);
        //httpOnly: can't access and change in frontend js
        
        res.status(201).json({user:user._ires.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});d});
    }catch(err){
        const errors= handleErrors(err);
        res.status(400).json({errors});
    }
}
module.exports.login_post=async (req,res)=>{
    const {email,password} = req.body;//destructring
    try {
        const user=await User.login(email,password);
        const token=createToken(user._id);
        //httpOnly: can't access and change in frontend js
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        res.status(200).json({user:user._id});
    } catch (err) {
        const errors= handleErrors(err);
        res.status(400).json({errors});
    }
}
//delete jwt cookie: we can't delete jwt cookie from server
//we will replace with blank cookie wiht very very short expiry date
module.exports.logout_get=async(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.redirect('/');
}