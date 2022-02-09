const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//third party validation package:
//we can not do a custom message for a error like unique
const {isEmail}=require('validator');
const userSchema = new mongoose.Schema({
    email:{
        type:'String',
        require:[true,"please enter an email"],
        unique:true,
        lowercase:true,
        validate:[isEmail,'please enter an valid email']
    },
    password:{
        type:'String',
        require:[true,'please enter an password'],
        minlength:[6,'minimum password length is 6 character'],
    },

})

userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    //this refers to the instance of usr that we trying to create.

    this.password=await bcrypt.hash(this.password,salt);
    next();
})

//static method to login users
userSchema.statics.login=async function(email,password){
    const user =await this.findOne({email});
    if(user){
        const auth=await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('Incorrect Password')
    }
    throw Error("incorrect email")

}

//Mongoose Hooks: Special function which fires after a certain mongoose event happens
//for example we can make hook which fires when we save to db, delete from db.


//fire a function after new user saved to db
//post here does not refers to post req but something happening after something else is happened
//this will fire whenever we save new document to the database
// userSchema.post('save',function(doc,next){
//     console.log('new user was created and saved',doc)
//     next();
// })


//fire a function before doc saved to db
//save instance of new user locally we can get access to this instance using this keyword.
//with arrow function we can not that instance
// userSchema.pre('save',function(next){
//     console.log("user about to be created and saved",this);
//     next();
// })



const User = mongoose.model('user',userSchema)
module.exports=User;