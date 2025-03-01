require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Test Email from Node.js",
    text: "This is a test email from the server.",
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error("Error:", error);
    }
    console.log("Email sent successfully:", info.response);
});
