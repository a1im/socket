import express from 'express'
import http from 'http'
import db  from './db'
import router from './router'
import socket from './socket'

const app = express();
const httpServer = http.Server(app);

(async () => {
    try {
        await db.connect();
        router(app);
        socket(httpServer);
        httpServer.listen(app.get('port'), () => {
            console.log('listening on *:' + app.get('port'));
        });
    } catch (e) {
        console.log(e);
    }
})()
