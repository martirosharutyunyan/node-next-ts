import dotenv from "dotenv";
dotenv.config();
import axios, { AxiosResponse } from 'axios';
// import express from "express";
// import { createServer } from "http";
// import next from "next";
// import morgan from "morgan";
// import { client } from "./model/postgres";
// const app = express();
const port: number | string = process.env.PORT;
// const dev: boolean = true;
// const server = next({ dev });
// const handle = server.getRequestHandler();

// server.prepare().then(() => {
//     app.use(express.json());
//     app.use(
//         express.urlencoded({
//             extended: false,
//         }),
//     );

//     app.post("/api/v1/test",async (req, res): Promise<void> => {
//             try {
//                 res.send("You got");
//             } catch (err: any) {
//                 console.log(err);
//             }
//         },
//     );
//     app.get("*",async (req, res): Promise<void> => {
//             try {
//                 console.log(req.body);
//                 return handle(req, res);
//             } catch (err: any) {
//                 console.log(err);
//             }
//         },
//     );
//     app.listen(port, () => console.log(`server running on port ${port}`));
// });

// import { createServer } from "http";
// import { parse } from "url";
// import next from "next";

// const dev = true;
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     createServer((req, res) => {
//         const parsedUrl = parse(req.url, true);
//         const { pathname, query } = parsedUrl;
//         console.log(parsedUrl)
//         switch (pathname) {
//             case "/a":
//                 app.render(req,res,'/',query)
//                 break;
//             default:
//                 handle(req,res,parsedUrl)
//         }
//     }).listen(port, (): void => {
//         console.log(`> Ready on http://localhost:${port}`);
//     });
// });
import { parse } from 'url';
import express from 'express';
import next from 'next';
const nextServer = next({dev:true})
const handle = nextServer.getRequestHandler()
import { client } from './model/postgresDB';
nextServer.prepare().then(()=> {
    
    const app = express();
    dotenv.config();
    const port:string | number = process.env.port;
    
    
    const mongoURL:string = process.env.mongoURL
    
    
    app.use(express.json())
    app.use(express.urlencoded({
     extended: false
    }))
    client.connect((err:Error):void=>{
        if(err) throw err
        console.log('postgresDB connected')
    })

    app.post('/login',async(req,res)=> {
        const parsedUrl = parse(req.url, true);
        let postToBack:AxiosResponse = await axios.post('http://localhost:5000/api/auth/login',req.body)
        console.log(postToBack.data)
        nextServer.render(req,res,'/user')
    })
    
    app.get('*', (req, res) => {
        return handle(req, res)
    })
    
    app.use('/api/auth',require('./routes/authPage'));
    app.use('/getUsers',require('./routes/getUsers'))
    app.use('/deleteUser',require('./routes/deleteUser'))
    app.use('/autoLogin',require('./routes/autoLogin'))
    
    app.listen(port, () => console.log(`server is runnig on port ${port}`));  
})