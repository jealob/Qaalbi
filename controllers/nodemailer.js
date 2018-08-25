const nodemailer = require('nodemailer');

module.exports = {
  send: function (req, res) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'qaalbieventsemail@gmail.com',
        pass: '@Password1'
      }
    });

    const mailOptions = {
      from: 'Qaalbi Event Booking',
      to: 'jealob@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      // console.log(mailOptions)
      if (error) {
        console.log(error);

      } else {
        console.log(mailOptions)
        console.log('Email sent: ' + info.response);
      }
    });
  }
}