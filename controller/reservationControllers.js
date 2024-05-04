const reservationModel = require('../models/reservationModels')

const createReservation = async (req, res) => {
    console.log(req.body)

    const {userId, eventDate, numberOfGuests} = req.body;
    
    const date = new Date();
    if(numberOfGuests === null|| eventDate===''||userId === null){
        return res.json({
            "success": false,
            "message" : "Please enter all details"
        })
    }
    if(!(numberOfGuests > 0) || !(new Date(eventDate) > date)){
        return res.json({
            "success": false,
            "message" : "Please enter valid details"
        })
    }

    try{
    const newReservation = new reservationModel({
        userId : userId,
        eventDate : eventDate,
        numberOfGuests : numberOfGuests
    })

    await newReservation.save()
    res.json({
        "success": true,
        "message": "Reservation added successfully",
        "User Id": userId,
        "eventDate" : eventDate,
        "numberOfGuests" : numberOfGuests
    });
    }
    catch(error) {
        console.log(error)
        res.json({
            "success" : false,
            "message" : "internal Server Error"
        })
    }


}
module.exports = {createReservation}