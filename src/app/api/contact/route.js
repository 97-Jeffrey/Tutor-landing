import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message, phone } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "shaoyuhao970909@gmail.com",
      pass: 'yvph tgkg voku hgou',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Tutor Inquiry From ${name}`,
      text: `${message}, My phone number is ${phone}` ?? `I want to know about your tutoring service, my phone numebr is ${phone}`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ message: 'Email failed to send.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}