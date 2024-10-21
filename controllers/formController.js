const nodemailer = require("nodemailer");

const send = (req, res) => {
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
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: "lebossamedina@gmail.com",
      pass: "bdqh uaew zakj rcck",
    },
    tls: {
      rejectUnAuthorized: true,
    },
  });

  const mailOptions = {
    to: "lebossamedina@gmail.com",
    subject: "Node Contact Request",
    text: "¡Thanks for Contacting me!",
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email has been sent: " + info.response);
    }
  });
  res.render("index", { message: "Email sent successfully." });
};

module.exports = { send };
