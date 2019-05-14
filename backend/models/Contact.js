const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactEnqSchema = new Schema({
    user_name: {
        type: String
    },
    user_email: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Contact = mongoose.model("contacts", ContactEnqSchema);