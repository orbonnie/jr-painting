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

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (char) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };

        return entities[char];
      });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "No subject provided");
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: "Jacob Reitz Painting <website@jacobreitzpainting.com>",
      to: ["obonnie@icloud.com"],
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <h3>Message</h3>
      <p>${safeMessage}</p>
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
