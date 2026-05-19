import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/emails/ContactEmail";

// Must be a verified Resend address (no custom domain set up yet).
const TO_ADDRESS = "jeanmarc.dev.18@gmail.com";
const FROM_ADDRESS = "Portfolio <onboarding@resend.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
};

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 80;
const MAX_MESSAGE = 4000;

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const SUBJECT_LABELS: Record<string, string> = {
  "mission-freelance": "Mission freelance",
  "poste-cdi": "Poste salarié",
  collaboration: "Collaboration",
  autre: "Autre",
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Server not configured." },
      { status: 500 }
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "autre";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json(
      { ok: false, error: "Invalid name." },
      { status: 400 }
    );
  }
  if (!email || email.length > MAX_EMAIL || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email." },
      { status: 400 }
    );
  }
  if (subject.length > MAX_SUBJECT) {
    return NextResponse.json(
      { ok: false, error: "Invalid subject." },
      { status: 400 }
    );
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { ok: false, error: "Invalid message." },
      { status: 400 }
    );
  }

  const subjectLabel = SUBJECT_LABELS[subject] ?? "Contact";
  const mailSubject = `[Portfolio] ${subjectLabel} — ${name}`;

  const text = [
    `Nom: ${name}`,
    `Email: ${email}`,
    `Type: ${subjectLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: mailSubject,
      react: ContactEmail({ name, email, subjectLabel, message }),
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
