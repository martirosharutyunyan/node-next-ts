import express from 'express';
const app = express.Router();
import { client } from '../model/postgresDB';

app.post('/',async (req, res)=>{
    try{
        const query: string = 'SELECT * FROM users';
        client.query(query,(err:Error,data):void=>{
            if(err) throw err
            res.send(data.rows)
        })
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;