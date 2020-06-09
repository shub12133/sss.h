var express = require('express');
var router = express.Router();
const db = require('../models')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  pool : true,
  service : "Gmail",
  secure : false,
  auth : {
    user : "shub.123433@gmail.com",
    pass : "meghaluvu"
  },
  tls : {
    rejectUnauthorized : false
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//register page 
// 
router.get('/register',(req,res)=>{
  res.render('register')
})

//login
router.get('/login',(req,res)=>{
  res.render('login')
})


// router post saving the user to db 
// path - '/users/register'/ http - post 
router.post('/register' ,(req,res)=>{
   const newUser = new db.USERS.USERS({
     name : req.body.name,
     email : req.body.email,
     password : req.body.password
   })
   db.USERS.createUser(newUser, async function(err,user){
     if(err) {
       console.log(err)
      }else{
        //send email
        const mailOptions = {
          from : "ImagApp<testnodeappmail@gmail.com>",
          to :  user.email, //list of receivers,
          subject : "Thank you for registering with us",
          html : `<p> Hi ${user.name} ,</p> 
            <p>Thank you for Registering. </p> 
            <p>Regards, </p>
            <p> Team ImageApp.</p>
          `
        }
        // send the mail transporter Object
      await transporter.sendMail(mailOptions, function(err,info){
          if(err) {
            console.log(err)
          }else{
            console.log(info)
          }
        })
        // 
        res.redirect('/users/login')
      }

   })
})




module.exports = router;