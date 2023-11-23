const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(`${process.env.API_KEY}`);

// Create an email
const msg = {
  to: `${process.env.MY_EMAIL}`,
  from: `${process.env.EMAIL_FROM}`,
  subject: "Subject of the fake email sender",
  text: "Dear recipient,\n\nThis is the text version of the email. Hope you enjoy reading it!\n\nBest regards,\nVasyl",
  html: `
    <p>Dear recipient,</p>
    <p>This is the HTML version of the email. Hope you enjoy the rich formatting!</p>
    <p>Best regards,<br>Vasyl</p>
  `,
};

// Send the email
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
