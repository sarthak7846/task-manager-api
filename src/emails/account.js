const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: 'sarthakbehera10@gmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sarthakbehera10@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};

//https://github.com/sendgrid/sendgrid-nodejs/blob/main/USAGE.md
//https://app.sendgrid.com/guide/integrate/langs/nodejs/verify
//API KEY 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
