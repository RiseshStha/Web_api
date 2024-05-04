const contactModel = require("../models/contactModels");

const createContact = async (req, res) => {
  console.log(req.body);

  const { contactName, email, phoneNumber } = req.body;

  if (contactName === "" || email === "" || phoneNumber === "") {
    return res.json({
      success: false,
      message: "Please enter all details",
    });
  }
  const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        return res.json({
            "success": false,
            "message": "Please provide a valid phone number"
        });
    }

  try {
    const existingPhonenumber = await contactModel.findOne({
      phoneNumber: phoneNumber,
    });
    if (existingPhonenumber) {
      return res.json({
        success: false,
        message: "Phone Number Already Exists!",
      });
    }
    const newContact = new contactModel({
      contactName: contactName,
      email: email,
      phoneNumber: phoneNumber,
    });

    await newContact.save()
    res.json({
      success: true,
      message: "Contact created successfully",
      "contactName": contactName,
      "email": email,
      "phoneNumber": phoneNumber,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "internal Server Error",
    });
  }
};

module.exports = { createContact };
