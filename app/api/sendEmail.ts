import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstname, lastname, email, message } = req.body;

    // Create transporter using SMTP settings (use your email provider's settings)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use 'gmail' or your email provider
      auth: {
        user: process.env.EMAIL_USER, // Email from env variables
        pass: process.env.EMAIL_PASS, // Email password from env variables
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // Sender's email
        to: process.env.EMAIL_USER, // Your email where the form data should be sent
        subject: `New message from ${firstname} ${lastname}`,
        text: message, // Plain text body of the email
        html: `
          <h3>New message from ${firstname} ${lastname}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
