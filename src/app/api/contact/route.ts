import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  company: string;
  problem: string;
  email: string;
};

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP is not configured');
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user,
      pass,
    },
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function validate(payload: ContactPayload) {
  const company = payload.company.trim();
  const problem = payload.problem.trim();
  const email = payload.email.trim();

  if (!company || !problem || !email) {
    return null;
  }

  if (company.length > 200 || problem.length > 4000 || email.length > 320) {
    return null;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return null;
  }

  return { company, problem, email };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const validPayload = validate(payload);
  if (!validPayload) {
    return NextResponse.json({ error: 'Invalid form payload' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  if (!to || !from) {
    return NextResponse.json({ error: 'Contact email is not configured' }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport(getTransportConfig());

    await transporter.sendMail({
      from,
      to,
      replyTo: validPayload.email,
      subject: `MISISIMI diagnostic request — ${validPayload.company}`,
      text: [
        `Company: ${validPayload.company}`,
        `Email: ${validPayload.email}`,
        '',
        'Problem:',
        validPayload.problem,
      ].join('\n'),
      html: `
        <h2>New diagnostic request</h2>
        <p><strong>Company:</strong> ${escapeHtml(validPayload.company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(validPayload.email)}</p>
        <p><strong>Problem:</strong></p>
        <p>${escapeHtml(validPayload.problem).replaceAll('\n', '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form delivery failed', error);
    return NextResponse.json({ error: 'Delivery failed' }, { status: 500 });
  }
}
