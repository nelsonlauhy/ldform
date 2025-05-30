const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { firstName, lastName, email } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: "mail.redms.ca",
    port: 25,
    secure: false, // no SSL on port 25
    auth: {
      user: "info@redms.ca",
      pass: "Qwedcxz225@#$@"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: '"Ekin Lucky Draw" <info@redms.ca>',
    to: email,
    subject: "Thanks for joining the Ekin Cheng Lucky Draw!",
    html: `
      <p>Hi ${firstName} ${lastName},</p>
      <p>Thank you for entering the <strong>Ekin Cheng HERE & NOW 2025</strong> Toronto concert lucky draw.</p>
      <p>The winner will be notified via email on <strong>June 18, 2025</strong>.</p>
      <p>Good luck!</p>
      <p>— The Ekin Lucky Draw Team</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error: error.message })
    };
  }
};

