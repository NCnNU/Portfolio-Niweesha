import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This function handles POST requests
export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, message } = await req.json();
    console.log('Form Data Submittedddddddddddddddddddddd:', { firstname, lastname, email, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "spynavindu@gmail.com", // Use your Gmail credentials
        pass: "pdkd mwqt djru akza", // Your app password or SMTP server password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "uniweesha@gmail.com", // The email of the person submitting the form
      subject: 'Portfolio - Contact Form Submission',
      text: `Name: ${firstname} ${lastname}\n\nMessage: ${message}  \n\nEmail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
