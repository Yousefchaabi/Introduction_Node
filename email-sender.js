const nodemailer = require("nodemailer");
require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PWD = process.env.PASSWORD;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL, // generated ethereal user
    pass: PWD, // generated ethereal password
  },
});

const mailOptions = {
  from: `"CHAABI Contact" <${EMAIL}>`,
  to: "chaabiyoussef70@gmail.com",
  subject: "Condidature Spontané",
  text: "Good Morning",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Sent :" + info.response);
  }
});
