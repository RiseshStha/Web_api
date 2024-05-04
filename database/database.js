//importing package

//Always export the function


const mongoose = require('mongoose');

// 2. Creating a function
const connectDB = () => {
    
//connecting to database
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Database Connected Successfully")
    })
    
}

//3. Exporting the function
module.exports = connectDB;
