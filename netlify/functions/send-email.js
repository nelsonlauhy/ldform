const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { firstName, lastName, email, phone } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: "mail.redms.ca",
      port: 25,
      secure: false,
      auth: {
        user: "info@redms.ca",
        pass: "Qwedcxz225@#$@"
      },
      tls: {
        rejectUnauthorized: false // for some shared hosting
      }
    });

    const mailOptions = {
      from: '"Ekin Lucky Draw" <info@redms.ca>',
      to: email,
      subject: "Thank you for joining the Ekin Cheng Concert Lucky Draw!",
      html: `<p>Hi ${firstName},</p>
        <p>Thank you for registering for the lucky draw for Ekin Cheng's concert in Toronto.</p>
        <p>We have received your entry. If you are selected as a winner, we will notify you by email.</p>
        <p>Good luck!</p>
        <p>– Lucky Draw Organizer</p>`
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};
