const {model} = require("mongoose")
const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true,
    }

})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact