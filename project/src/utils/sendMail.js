const nodemailer = require("nodemailer");

exports.sendOTP = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gamil.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const mail = {
    form: process.env.SMTP_USER,
    to,
    subject,
    text,
  };
  return await transporter.sendOTP(mail);
};
