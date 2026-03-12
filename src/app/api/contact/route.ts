import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${process.env.SMTP_FROM || 'Portafolio'}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Send to yourself
            replyTo: email,
            subject: `Nuevo mensaje de ${name}: ${subject}`,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
            html: `
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Mensaje enviado exitosamente' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error enviando el correo:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor al enviar el mensaje' },
            { status: 500 }
        );
    }
}
