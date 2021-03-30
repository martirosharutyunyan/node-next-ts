import nodemailer from 'nodemailer';
import { nodemailerMessageType } from '../types/types';

const transporter = nodemailer.createTransport(
    {
        host: "smtp.mail.ru",
        port: 465,
        secure: true, // if 465 true else false
        auth: {
            user: "tahku_ohjluhe@mail.ru",
            pass: "okmijnuhbygvtfcesz147896325",
        },
    },
    {
        from: "Martiros",
    },
);

export const mailer= (message:nodemailerMessageType):void => {
transporter.sendMail(message,(err:Error):void => {
        if (err) console.log('email dont exist')
    });
};

