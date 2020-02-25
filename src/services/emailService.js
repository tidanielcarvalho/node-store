'use strict'

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.readyMail = async (to) => {
  const msg = {
    to: to,
    from: 'dicarvalho92@gmail.com',
    subject: 'Heeeelllooo my friennnds',
    text: 'Its ok ?',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  await sgMail.send(msg);
}


//sgMail.send(msg);