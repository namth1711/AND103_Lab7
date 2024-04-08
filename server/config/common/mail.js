var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "namthph31259@fpt.edu.vn",
        pass: "gtaz"
    }
});
module.exports = transporter 