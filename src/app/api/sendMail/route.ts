import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json()
    
    try{
        const {name,companyname,job,email,country,city,service,message} = body;
        const transporter = nodemailer.createTransport({
            name: 'My-Webpage',
            host: process.env.CONTACT_FORM_HOST,
            port: 465,
            secure: true,
            auth: {
              user: process.env.CONTACT_FORM_SEND_EMAIL,
              pass: process.env.CONTACT_FORM_PASS,
            },
          });
          
        console.log(transporter);

        transporter.verify(function (error:any, success:any) {
          if (error) {
            console.log(error);
            return;
          } else {
            console.log('Server is ready to take our messages');
          }
        });

        const clientMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${email}`,
          subject: 'Contact | Morsi M Partners',
          text: `Name: ${name}\nCompany Name: ${companyname}\nJob Title: ${job}\nEmail Address: ${email}\nCountry: ${country}\nCity: ${city}\nService: ${service}\nMessage: ${message}\n`,
        });

        console.log('Message sent: %s', clientMail.messageId);

        const ServerMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${process.env.CONTACT_FORM_RECEIVE_EMAIL}`,
          subject: 'Contact | Morsi M Partners',
          text: `Name: ${name}\nCompany Name: ${companyname}\nJob Title: ${job}\nEmail Address: ${email}\nCountry: ${country}\nCity: ${city}\nService: ${service}\nMessage: ${message}\n`,
        });

        console.log('Message sent: %s', ServerMail.messageId);

        return NextResponse.json({message: "Sent"})
    } catch (err) {
        return NextResponse.json({message: "Failed"})
    }
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
