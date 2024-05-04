const appoinmentModel = require("../models/appoinmentModels");
const { model, Schema } = require("mongoose");

const createAppoinment = async (req, res) => {
  console.log(req.body);

  const { date, time } = req.body;

  if (date === "" || time === "") {
    return res.json({
      success: false,
      message: "Please enter valid details",
    });
  }
  const validateDate = function(value) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(value);
};

// Custom validator function for time format 'HH:mm'
const validateTime = function(value) {
    // const regex = /^\d{2}:\d{2}$/;
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(value);
};

if(!validateDate(date) || !validateTime(time)){
    return res.json({
        success: false,
        message: "Please enter the date and time in correct format",
      });
}
  if(time === "15:00"){
    return res.json({
        success: false,
        message: "Appoinment is unavailable in this time",
      });
  }
  const date2 = new Date();
  if(!(new Date(date) > date2)){
    return res.json({
        "success": false,
        "message" : "Please enter valid date/ future date"
    })
  }

  try {
    
    const newAppoinment = new appoinmentModel({
      date: date,
      time:time,
    });

    await newAppoinment.save()
    res.json({
      success: true,
      message: "Appoinment booked successfully",
      "date": date,
      "time": time,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "internal Server Error",
    });
  }
};

module.exports = { createAppoinment};
