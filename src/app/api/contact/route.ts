import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["delivered@resend.dev"],
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send message.",
      },
      { status: 500 },
    );
  }
}
