const nodemailer = require("nodemailer");

const send = async (req, res) => {
  let output = `
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Description: ${req.body.description}</li>
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for user
      pass: process.env.EMAIL_PASS, // Use environment variable for password
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailOptions = {
    to: process.env.EMAIL_USER, // Send to the same user
    subject: "Node Contact Request",
    text: "Thanks for contacting me!",
    html: output,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
    return res.status(200).render("index", { message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).render("index", { message: "Error sending email." });
  }
};

module.exports = { send };

