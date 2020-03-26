
import { createServer, Server } from 'http';
import * as express from 'express';
import * as  mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as socketIo from 'socket.io';


import { Vote } from './model/vote.model';

// express routes
import { sessionRouter } from './routes/session';

export class ScrumPokerServer {
    public static readonly PORT: number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.setMongoConnection();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ScrumPokerServer.PORT;
        // adding bodyParser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.app.use('/session', sessionRouter);
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            this.io.emit('message', nconf.get('sessionId'));
            socket.on('Vote', (v: Vote) => {
                console.log('[server](message): %s', JSON.stringify(v));
                this.io.emit('message', v);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    // MongoDB Connection
    private setMongoConnection() {
        mongoose.connect("mongodb+srv://MEAN_APP:" +
        process.env.MONGO_ATLAS_PW +
        "@cluster0-qtxwi.mongodb.net/scrumPoker?retryWrites=true&w=majority", {
            useNewUrlParser: true
          }).then(() => {
            console.log('Connected to DB');
        }).catch((err) => {
            console.log('Unable to Connect to DB', err, process.env.MONGO_ATLAS_PW);
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}