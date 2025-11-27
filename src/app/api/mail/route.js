import nodemailer from "nodemailer";

import connectDB from "@/utils/connectDB";
import { Mail } from "@/models/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    
    const { name, email, subject, message } = body;
    
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `${name}`,
      text: `name = ${name}, email = ${email}, message = ${message}`,
    };
    console.log("mail options:", mailOptions)
    await transporter.sendMail(mailOptions);

    connectDB();
    const mail = await Mail.create(body.formData);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending email");
    return new Response(
      JSON.stringify({ error: "An error occurred while sending the email" }),
      { status: 500 }
    );
  }
}
