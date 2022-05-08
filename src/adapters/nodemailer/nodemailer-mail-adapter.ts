import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e7a65864ff85e6",
    pass: "3383476d11016a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gxguinho <gxguinho@gmail.com>',
      subject,
      html: body
    });
  };
}