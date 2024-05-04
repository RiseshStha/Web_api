const express =  require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const connectDB = require('./database/database');


const app = express();

app.use(express.json())

dotenv.config()

connectDB();
const PORT =  process.env.PORT;

app.listen(PORT, ()=> {
    console.log('Server is Running!')
    console.log(`Server is Running on port ${PORT}`)
})

app.get('/test', (req, res)=>{ // reqeust and send response (endpoint)
    res.send('Test Api is Working!...')
})

app.use('/api/contact', require('./routes/contactRoutes'))
app.use('/api/reservation', require('./routes/reservationRoutes'))
app.use('/api/book-appoinment', require('./routes/appoinmentRoutes'))