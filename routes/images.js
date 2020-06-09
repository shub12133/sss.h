const express = require('express')
const router = express.Router()
const db = require('../models')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'./public/uploads')
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now())    }
})

const upload = multer({
    storage : storage,
    limits : { fileSize : 1000000000},

}).single('myImage')

// Get , path -'/images' 
/// render the upload.ejs
router.get('/', (req,res)=>{
    res.render('upload')
})

// /images/upload -- http method -post
router.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
            res.redirect('/')
        }else{
            if(req.file === undefined){
                res.redirect('/images')
            }else{
               db.IMAGES.create({
                   name : req.body.name,
                   description: req.body.description,
                   fileName: req.file.filename
               }).then(()=> res.redirect('/'))
               .catch((err)=> {
                   console.log(err)
                   res.redirect('/images')
               })
            }
        }
    })
})


router.get('/get/:id' , (req,res)=>{
    db.IMAGES.findOne({fileName : req.params.id})
    .then((image) => res.render('imagedetails', {image: image}))
    .catch((err)=>{
        console.log(err)
        res.redirect('/')
    })
})

module.exports= router
