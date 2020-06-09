const mongoose = require('mongoose')
const imagesSchema = new mongoose.Schema({
    name : {
        type : String
    },
    description : String,
    fileName : {
        type : String
    }
})

const IMAGES = mongoose.model('IMAGES', imagesSchema)
module.exports = IMAGES