const {model} = require("mongoose")
const mongoose = require("mongoose")

const appoinmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        // validate: {
        //     validator: function(value) {
        //         // Check if the value matches the 'YYYY-MM-DD' format using a regular expression
        //         return /\d{2}-\d{2}-\d{4}/.test(value);
        //     },
        //     message: props => `${props.value} is not a valid date in the format YYYY-MM-DD!`
        // }
    },
    time: {
        type: String,
        required: true,
        // validate:{
        // validator: function(value) {
        //     // Check if the value matches the 'HH:mm' format using a regular expression
        //     return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
        // },
        // message: props => `${props.value} is not a valid time in the format HH:mm!`
        // }
    },

})

const Appoinment = mongoose.model('appionment', appoinmentSchema)
module.exports = Appoinment