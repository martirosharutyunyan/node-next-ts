import express from 'express';
const app = express.Router();
import jwt from 'jsonwebtoken';
import { client } from '../model/postgresDB';
import { objectOfDataType, parsedDataType } from "../types/types";

app.post('/',async (req, res)=>{
    try{
        const token:string = req.body.token
        let parsedData:parsedDataType = JSON.parse(token)
        let decodetToken:any = jwt.decode(parsedData.token)
        const query: string = `SELECT * FROM users WHERE email = '${decodetToken.email}'`
        client.query(query,(err:Error,data):void=>{
            if(err) throw err
            res.send(data.rows[0])
        })
    } catch(err){
        console.log(err)
    }
})



module.exports = app;


