const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/imgappcb2020', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Database is connected`)
}).catch((err)=>{
    console.error(err)
})

const IMAGES = require('./images')
const USERS = require('./users')
module.exports= {
    IMAGES,USERS
}