const nodemailer = require('nodemailer');

const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: `"EasyMart Support" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: subject,
    html: message,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Email successfully sent to ${email}`);
};

module.exports = sendEmail;