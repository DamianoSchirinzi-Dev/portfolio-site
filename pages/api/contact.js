import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Replace these values with your actual email configuration
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: "damianoschirinzi.devportfolio@gmail.com", // Replace with your email address
    subject: `Message from ${name}`,
    text: message,
  });

  res.status(200).json({ message: "Email sent successfully" });
}
