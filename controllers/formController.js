import nodemailer from "nodemailer";

export default async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const description = req.body.description;

    let output = `
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Description: ${description}</li>
      </ul>
    `;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    await transporter.verify();
    console.log("Server is ready to take our messages");

    const mailData = {
      from: {
        name: "Luis Bossa",
        address: process.env.EMAIL_USER,
      },
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "Node Contact Request",
      text: "Thanks for contacting me!",
      html: output,
    };

    await transporter.sendMail(mailData);
    console.log("Email sent successfully");

    // Render success response
    return res
      .status(200)
      .render("index", { message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    // Render error response
    return res.status(500).render("index", { message: "Error sending email." });
  }
};
