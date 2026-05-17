import { NextResponse } from "next/server";
import { Resend } from "resend";

// Recipient address — where contact form emails land. Keep in sync with
// the address the user signed up to Resend with (only verified addresses
// can receive while no domain is set up).
const TO_ADDRESS = "jeanmarc.dev.18@gmail.com";

// Free Resend tier without a custom domain only allows the sandbox
// sender. Once a domain is verified you can swap this for
// `Portfolio <hello@yourdomain.com>`.
const FROM_ADDRESS = "Portfolio <onboarding@resend.dev>";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // Honeypot: any value here = bot, silently drop.
  website?: string;
};

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 80;
const MAX_MESSAGE = 4000;

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

  // Honeypot — if a bot filled `website`, accept silently and bail.
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

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#1a1a18;">
      <p style="font-size:13px;color:#6b6961;margin:0 0 16px;">
        Nouveau message depuis le portfolio
      </p>
      <table style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 12px 4px 0;color:#6b6961;">Nom</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6961;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6961;">Type</td><td>${escapeHtml(subjectLabel)}</td></tr>
      </table>
      <p style="margin:24px 0 8px;color:#6b6961;font-size:13px;">Message :</p>
      <pre style="white-space:pre-wrap;font-family:inherit;font-size:15px;background:#f7f5f0;border-radius:8px;padding:16px;margin:0;">${escapeHtml(message)}</pre>
    </div>
  `;

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
      html,
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
