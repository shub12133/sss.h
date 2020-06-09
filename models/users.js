const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema  = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : ["Please enter an email"]
    },
    password : {
        type : String,
        required : ["Please enter a password"]
    }
})

const USERS = mongoose.model('USERS', userSchema)

// method to createUser 
const createUser = function(newUser,callback){
    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(newUser.password , salt, function(err,hash){
            newUser.password = hash
            newUser.save(callback)
        })
    })
}

const getUserByEmail = function(email,callback){
    const query = {email : email}
    USERS.findOne(query,callback)
}

const getUserById = function(id,callback){
    const query = {_id :id}
    USERS.findOne(query, callback)
}


const comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash, function(err,isMatch){
        if(err) throw err;
        callback(null , isMatch)
    })
}
module.exports = {
    USERS,
    createUser,
    getUserByEmail ,
    getUserById ,
    comparePassword
}