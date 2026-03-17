import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // ── Option A: Send via Resend (recommended) ──────────────────────────
    // Install: npm install resend
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@healingtouchbyalina.com',
    //   to: 'alina@healingtouchbyalina.com',
    //   subject: `New Contact Form: ${subject || 'General Inquiry'} from ${name}`,
    //   html: `
    //     <h2>New Message from Healing Touch Website</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject || 'General'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // ── Option B: Forward to Formspree ────────────────────────────────────
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //   body: JSON.stringify({ name, email, phone, subject, message }),
    // });
    // if (!res.ok) throw new Error('Formspree error');

    // ── Option C: Send via Nodemailer + Gmail ─────────────────────────────
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    // });
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: 'alina@healingtouchbyalina.com',
    //   subject: `New contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    // });

    // Placeholder response — remove when real email is configured
    console.log('Contact form submission:', { name, email, phone, subject, message });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try calling or texting directly.' },
      { status: 500 }
    );
  }
}
