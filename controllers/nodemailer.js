const nodemailer = require('nodemailer');

module.exports = {
  bookAppointment: function (req, res) {

    let mailDetails = req.body.appointmentDetails;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'qaalbieventsemail@gmail.com',
        pass: '@Password1'
      }
    });

    const mailOptions = {
      from: 'Qaalbi Event Booking',
      to: mailDetails.email,
      subject: mailDetails.subject,
      text: `Hello, \n You have been scheduled a ${mailDetails.type} appointment for ${mailDetails.date} by ${mailDetails.time}. \n Thank You, \n Qaalbi Events. `
    };

    transporter.sendMail(mailOptions, function (error, info) {
      console.log(mailOptions);
      if (error) {
        console.log(error);

      } else {
        console.log(mailOptions)
        console.log('Email sent: ' + info.response);
      }
    });
  }
}