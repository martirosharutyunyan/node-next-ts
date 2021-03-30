import express from "express";
const app = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";
import { mailer } from "./nodemailer";
import { nodemailerMessageType } from "../types/types";
import { client } from "../model/postgresDB";

app.post(
    "/registr",
    async (req, res): Promise<void> => {
        try {
            const {  name, surname, email, password } = req.body;
            if (
                name.trim().length === 0 ||
                surname.trim().length === 0 ||
                email.trim().length <= 8 ||
                password.trim().length < 8
            ) {
                res.send({ message: "the inputs are not filled" });
                return 
            } 
                const query: string = `SELECT * FROM users WHERE email = '${email}'`;
                client.query(query,(err:Error,data):void=>{
                    if(err) throw err
                    if(data.rows.length === 0){
                        let code: string = `${Math.floor(Math.random()*100000)}`
                        bcrypt.hash(code,10,(err,data):void=>{
                            if(err) throw err
                            const message: nodemailerMessageType = {
                                from: "tahku_ohjluhe@mail.ru",
                                to: email,
                                subject: "Congratulations",
                                text: `dzer cody ${code}`, 
                            };
                            mailer(message);
                            res.send({ message: "User saved",code:data});
                        })
                        return 
                    }
                        res.send({ message: "already exists" })
                })
        } catch (err) {
            console.log(err);
        }
    },
);

app.post(
    "/login",
    async (req, res): Promise<void> => {
        try {
            const  loginEmail = await req.body.loginEmail.toLowerCase();
            const  loginPassword = await req.body.loginPassword;
            const query: string = `SELECT * FROM users WHERE email = '${loginEmail}'`;
            client.query(query,async (err:Error,data):Promise<void>=>{
                if(err) throw err
                if(data.rows.length === 0){
                    res.send({message:'NOT finded'})
                    return 
                }
                    const {
                        id,
                        name,
                        surname,
                        email,
                        password,
                    }: any = data.rows[0];
                    await bcrypt.compare(loginPassword,password,async (err:Error, trueORfalse:boolean): Promise<void> => {
                            if (err) throw err;
                            if (trueORfalse) {
                                const objectOfData = {
                                    id,
                                    name,
                                    surname,
                                    email:email.toLowerCase(),
                                    password,
                                };
                                const token = jwt.sign(objectOfData, "secret", {
                                    expiresIn: 3600,
                                });
                                res.send({ token, userEmail:data.rows[0]});
                                return 
                            } 
                                res.send({message: `password is incorect try again`,});
                        },
                    );
            }) 
        } catch (err:any) {
            console.log(err);
        }
    },
);

app.post(
    "/save",
    async (req, res): Promise<void> => {
        try {
            const {
                verificationCode,
                id,
                email,
                name,
                surname,
                password,
                code,
            } = req.body;
            bcrypt.compare(verificationCode,code,async (err:Error,data):Promise<void>=>{
                if(err) throw err
                if(data){
                    await bcrypt.hash(password, 10, async (err:Error, data) => {
                        if (err) throw err;
                        const query: string = `INSERT INTO users(email,name,surname,password) VALUES('${email}','${name}','${surname}','${data}')`;
                        client.query(query,(err:Error):void=>{
                            if(err) throw err
                        })
                        res.send({ message: "User saved" });
                    });
                    return 
                } 
                    res.send({message:'error'})
            })
        } catch (err:any) {
            console.log(err);
        }
    },
);

module.exports = app;
