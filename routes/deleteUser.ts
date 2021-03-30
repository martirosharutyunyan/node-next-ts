import express from 'express';
const app = express.Router();
import { client } from '../model/postgresDB';

app.post('/',async (req, res)=>{
    try{
        const query: string = `DELETE FROM users WHERE id = ${req.body.id}`;
        client.query(query,(err:Error):void=>{
            if(err) throw err
        })
        res.send({message:'deleted'})
    } catch(err:any){
        console.log(err)
    }
})

module.exports = app;