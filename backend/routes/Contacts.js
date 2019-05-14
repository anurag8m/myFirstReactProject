const express = require("express");
const contacts = express.Router();
const cors = require("cors");

const Contact = require("../models/Contact");
contacts.use(cors());
process.env.SECRET_KEY = "secret";

contacts.post("/contactenq", (req, res) => {
    const today = new Date();
    const contactData = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        subject: req.body.subject,
        message: req.body.message,
        created: today
    };

    Contact.create(contactData)
        .then(contact => {
            res.json({ status: contact.user_name + " Your enquiry submitted!" });
        })
        .catch(err => {
            res.send("error:" + err);
        });



});



module.exports = contacts;